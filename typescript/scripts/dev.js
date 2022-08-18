const args = require('minimist')(process.argv.slice(2))
const { build } = require('esbuild')
const { resolve } = require('path')

const target = args.t
const format = args.f || 'global'
const globalName = args.gn || 'tsExport'
const outputFormat = format === 'global' ? 'iife' : format === 'cjs' ? 'cjs' : 'esm'
const outfile = resolve(__dirname, `../dist/${target}.${format}.js`)
const entryPoints = [resolve(__dirname, `../src/${target}.ts`)]

console.log(args)
if (!target) {
  throw 'target is empty'
}

build({
  entryPoints,
  outfile,
  bundle: true, // 把所有的包打包到一起
  sourcemap: false,
  format: outputFormat,
  globalName,
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
