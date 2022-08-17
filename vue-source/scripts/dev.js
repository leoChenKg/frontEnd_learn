const args = require('minimist')(process.argv.slice(2))
console.log(args)
const { resolve } = require('path')
const { build } = require('esbuild')

const target = args._[0] || 'reactivity'
const format = args.f || 'global'

const pkg = require(resolve(__dirname, `../packages/${target}/package.json`))

// iife cjs esm(浏览器中的esmdule)
const outputFormat = format.startsWith('global') ? 'iife' : format === 'cjc' ? 'cjs' : 'esm'

const outfile = resolve(__dirname, `../packages/${target}/dist/${target}.${format}.js`)

build({
  entryPoints: [resolve(__dirname, `../packages/${target}/src/index.ts`)],
  outfile,
  bundle: true, // 把所有的包打包到一起
  sourcemap: true,
  format: outputFormat,
  globalName: pkg.buildOptions?.name,
  platform: format === 'cjs' ? 'node' : 'browser',
  watch: {
    // 监控文件变化
    onRebuild(err) {
      if (!err) console.log('rebuild...')
    }
  }
}).then(() => {
  console.log('watching...')
})
