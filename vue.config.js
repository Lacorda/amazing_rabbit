const projectName = process.argv[3];
const isDev = process.env.NODE_ENV === 'development';

console.log('✅  项目名称:', projectName);
console.log(isDev ? '✅  开发环境' : '');

const path = require('path');
function resolve(dir) {
    return path.join(__dirname, './', dir);
}

const pages = {
    demo: {
        // demo页
        entry: 'src/demo/main.js', // 应用入口配置
        template: 'public/demo.html', // 应用的模版
        filename: 'demo.html', // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
    },
    blog: {
        // 博客入口页
        entry: 'src/blog/main.js',
        template: 'public/blog.html',
        filename: 'index.html',
    },
};

function genPage() {
    if (isDev || !projectName) {
        return pages;
    }
    return { [projectName]: pages[projectName] };
}

module.exports = {
    publicPath: './',
    // 输出文件目录
    outputDir: (isDev || !projectName) ? 'dist' : `dist-${projectName}`,
    // 多页配置
    pages: genPage(),
    // webpack-dev-server 相关配置
    devServer: {
        open: true,
        openPage: '/demo.html',
        // 本地端口
        port: 9001,
        // 代理
        proxy: {
            '/template': {
                // 服务地址，即你要访问的服务器地址
                target: 'http://cloudprint.cainiao.com',
                changeOrigin: true,
                onProxyReq: (proxyReq) => {
                    proxyReq.setHeader('Cookie', 'SL_GWPT_Show_Hide_tmp=1; x-hng="lang=zh"; lang=zh; l=eBMaR0MHjspuJ_QxB91CPurza779m_AjOyygaNbMiIErmOCnwPYNSrWXAow6dIiHqNKO7t5UUb-uRI7QdYLn6nOkwxl2BeYB4rsxXZ96-e1..; tfstk=c8CVIPxCxSF2KZR_pIOaGucRyomDsO1ct1ny5KX-9qOrJYqUeB7ViAo9rv26UpNnuKf..');
                },
            }
        },
        // eslint-loader警告配置
        overlay: {
            warnings: true,
            errors: true,
        },
    },
    // webpack相关配置
    configureWebpack: {
        devtool: 'source-map',
        resolve: {
            alias: { // 别名
                '@components': '@/components',
                '@stylesheet': '@/stylesheet',
                '@assets': '@/assets',
                '@services': '@/services',
                '@utils': '@/utils',
                '@mixins': '@/mixins',
            },
            extensions: ['.js', '.vue', '.json'],
        },
        module: {
            rules: [
                {
                    test: /\.worker\.js$/,
                    use: {
                        loader: 'worker-loader',
                        options: { inline: 'fallback' },
                    },
                },
            ],
        },
    },
    chainWebpack: config => {
        const svgRule = config.module.rule('svg'); // 找到svg-loader
        svgRule.uses.clear(); // 清除已有的loader, 如果不这样做会添加在此loader之后
        svgRule.exclude.add(/node_modules/); // 正则匹配排除node_modules目录
        svgRule // 添加svg新的loader处理
            .test(/\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            });

        // 修改images loader 添加svg处理
        // const imagesRule = config.module.rule('images');
        // imagesRule.exclude.add(resolve('src/icons'));
        // config.module
        //     .rule('images')
        //     .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
    },
    // 全局绑定scss样式
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import \'~@stylesheet/var.scss\';'
            }
        }
    },
    // 是否为 Babel 或 TypeScript 使用 thread-loader。
    // 该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
    parallel: false,
};
