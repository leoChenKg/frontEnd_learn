### 2022 8.17 Vue 源码环境搭建

- 使用 pnmp 来进行创建 monorepo 式的项目管理
- pnpm install xxx -w ，（w 的意思是 workspace-roor ）安装 xxx 到工作间的根，所有子项目可以通用
- 开启 pnpm 的 👻 依赖 在根目录下的 .npmrc 文件中添加 shamefully-hoist=true
- minimist 命令行解析工具 esbuild 打包工具

* 配置子项目的 package.json 文件 配置其打包模式 "buildOptoins" 字段 name 是 global（浏览器 script 引用） 个试下全局的变量名，formats 就是要把这个模块打包成的格式
* ts 配置文件

```json
{
  "compilerOptions": {
    "outDir": "dist", // 输出的目录
    "sourceMap": true,
    "target": "es2016",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "resolveJsonModule": true,
    "esModuleInterop": true, // 使用sem引入 cjs模块
    "jsx": "preserve", // jsx 不转义
    "lib": ["esnext", "dom"], // 支持的类库
    "baseUrl": ".",
    "paths": {
      // 引用别名
      "@vue/*": ["packages/*/src"]
    }
  }
}
```

- dev.js 开发环境打包

**课时 51 : 4.实现 reactive **
TODO pnpm
TODO monorepo
