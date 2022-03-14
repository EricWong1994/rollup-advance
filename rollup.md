    global:{
        'jquery':'$' //告诉rollup 全局变量$即是jquery
    },

(!) You have passed an unrecognized option
Unknown input options: global. Allowed options: acorn, acornInjectPlugins, cache, context, experimentalCacheExpiry, external, inlineDynamicImports, input, makeAbsoluteExternalsRelative, manualChunks, maxParallelFileReads, moduleContext, onwarn, perf, plugins, preserveEntrySignatures, preserveModules, preserveSymlinks, shimMissingExports, strictDeprecations, treeshake, watch

rollup.js编译源码中的模块引用默认只支持 ES6+的模块方式import/export。然而大量的npm模块是基于CommonJS模块方式，这就导致了大量 npm 模块不能直接编译使用。所以辅助rollup.js编译支持 npm模块和CommonJS模块方式的插件就应运而生。

作者：jiaHang
链接：https://juejin.cn/post/6956501799327137828
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

rollup-plugin-node-resolve 插件允许我们加载第三方模块
@rollup/plugin-commons 插件将它们转换为ES6版本

lodash不支持require导入
Uncaught ReferenceError: require is not defined





如我们所预料的，控制台输出了`柯森`。

到这里，我们就用`rollup`打包了一个最最简单的`demo`。

可能很多同学看到这里对于上面命令行中的参数不是很明白，我依次说明下：

- `-f`。`-f`参数是`--format`的缩写，它表示生成代码的格式，`amd`表示采用`AMD`标准，`cjs`为`CommonJS`标准，`esm`（或 es）为`ES`模块标准。`-f`的值可以为`amd`、`cjs`、`system`、`esm`（'es’也可以）、`iife`或`umd`中的任何一个。
- `-o`。`-o`指定了输出的路径，这里我们将打包后的文件输出到`dist`目录下的`bundle.js`

其实除了这两个，还有很多其他常用的命令（这里我暂且列举剩下两个也比较常用的，完整的[rollup 命令行参数](https://link.juejin.cn?target=https%3A%2F%2Frollupjs.org%2Fguide%2Fen%2F%23command-line-flags)）：

- `-c`。指定`rollup`的配置文件。
- `-w`。监听源文件是否有改动，如果有改动，重新打包。

### 

```
rollup -c
```


作者：前端森林
链接：https://juejin.cn/post/6869551115420041229
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。