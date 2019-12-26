module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.baseUrl = './';
        } else {
            // 为开发环境修改配置...
            config.devServer = {
                port: 8000,
                host: '0.0.0.0', //设置这个的好处 我们可以通过localhost,或者内网ip进行访问；如果设置成localhost,通过ip是访问不了的。
                overlay: { //在webpack编译过程中,如果有任何错误,都让它显示到网页上面
                    errors: true
                },
                historyApiFallback: {
                    // index: '/public/index.html' // output.publicPath = 'public' 这里就得加 /public
                    index: '/public/index.html'
                },
                //open: true, //webpack-dev-server 启动的时候默认帮我们打开浏览器
                hot: true, //修改代码,只重新渲染这个组件,不会让整个页面都重新渲染
            }
            // config.module.rules.push(
            //     {
            //         test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            //         use: [
            //             {
            //                 loader: 'url-loader',
            //                 options: {
            //                     limit: 8192,
            //                 },
            //             },
            //         ],
            //     }
            // )
        }
    },
    chainWebpack: config => {
        const imagesRule = config.module.rule('images');
        imagesRule.uses.clear();
        imagesRule.test(/\.(png|jpg|gif)$/i)
            .use('url-loader')
            .loader('url-loader')
            .options("{limit: 8192,name: 'images/[name].[hash:8].[ext]'}");
    }
}

