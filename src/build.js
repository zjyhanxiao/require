({
    appDir: './',   //项目根目录
    dir: './dist',  //输出目录，全部文件打包后要放入的文件夹（如果没有会自动新建的）
    optimize: 'none',  //optimize(none/uglify/colsure)，指定是否压缩，默认为uglify
    baseUrl: './js/pages',   //相对于appDir，代表要查找js文件的起始文件夹，下文所有文件路径的定义都是基于这个baseUrl的

    modules: [                      //要优化的模块
        {name: 'index'}, {name: 'reg'}     //说白了就是各页面的入口文件，相对baseUrl的路径，也是省略后缀“.js”
    ],

    fileExclusionRegExp: /^(r|build)\.js|.*\.scss$/,    //过滤，匹配到的文件将不会被输出到输出目录去

    optimizeCss: 'standard',//RequireJS Optimizer会自动优化应用程序下的CSS文件。这个参数控制CSS最优化设置。允许的值： “none”, “standard”, “standard.keepLines”, “standard.keepComments”, “standard.keepComments.keepLines”。

    removeCombined: true,   //如果为true，将从输出目录中删除已合并的文件

    paths: {    //相对baseUrl的路径
        myA: '../common/aa',
        myB: '../common/bb',
        myC: '../common/cc',
        jquery: '../common/jq'
    }
//     ,shim:{ .....}
});