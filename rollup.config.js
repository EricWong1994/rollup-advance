// import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
// import commonjs from 'rollup/plugin-commonjs'
// import typescript from '@rollup/plugin-typescript'

export default {
    // input: './src/main.js',
    // input: './src/index.js',
    input: ['./src/index.js'],
    output: {
        file: './dist/bundle.js',
        format: 'cjs',
        // format: 'umd',
        name: 'experience'
    },
    // global:{
    //     'jquery':'$' //告诉rollup 全局变量$即是jquery
    // },
    plugins: [
        // resolve(),
        // resolve({
        //     jsnext: true,
        //     main: true,
        //     browser: true,
        // }),
        commonjs()
        // commonjs({
        //     'my-lib': [ 'named' ]
        // }),
        // babel({
        //     exclude: 'node_modules/**'
        // }),
    ],
    // external:['lodash'] //告诉rollup不要将此lodash打包，而作为外部依赖
    // (!) Unresolved dependencies
    // https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency (todo)
}


// // rollup.config.js
// export default {
//     // 核心选项
//     input,     // 必须
//     external,
//     plugins,
  
//     // 额外选项
//     onwarn,
  
//     // danger zone
//     acorn,
//     context,
//     moduleContext,
//     legacy
  
//     output: {  // 必须 (如果要输出多个，可以是一个数组)
//       // 核心选项
//       file,    // 必须 // // 输出文件
//       format,  // 必须 //  五种输出格式：amd /  es6 / iife / umd / cjs [todo这些什么意思]
//       name, // 当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
//       globals,
  
//       // 额外选项
//       paths,
//       banner,
//       footer,
//       intro,
//       outro,
//       sourcemap, //生成bundle.map.js文件，方便调试
//       sourcemapFile,
//       interop,
  
//       // 高危选项
//       exports,
//       amd,
//       indent
//       strict
//     },
//   };
