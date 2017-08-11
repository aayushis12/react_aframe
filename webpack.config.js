var webpack = require('webpack');
var path = require('path');

var node_dir = __dirname + '/node_modules',
    lib_dir = __dirname + '/public/libraries';

var config = {
    // The resolve.alias object takes require expressions 
    // (require('react')) as keys and filepath to actual
    // module as values
    resolve: {
        alias: {
            react: lib_dir + '/react',
            "react-dom": lib_dir + '/react-dom',
            "jquery": lib_dir + '/jquery-3.2.1.js'
        },
        extensions:['.js','.jsx','.json']
    },
    plugins: [

        new webpack.optimize.CommonsChunkPlugin({ // 
            name: 'vendors',
            filename: 'build/vendors.bundle.js',
            minChunks: 2,
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    entry: {
        virtual: ['./public/js/app.js', 'webpack/hot/only-dev-server'],
        vendors: ['react', 'react-dom', 'jquery','react-donut-chart','webpack/hot/only-dev-server']
    },

    output: {
        path: path.join(__dirname, "public"),
        filename: 'build/[name].bundle.js',
        libraryTarget: "umd"
    },

    module: {
      
        noParse: [
            new RegExp(lib_dir + './react.js'), 
            new RegExp(lib_dir + './react-dom.js')
        ],
        rules: [
             {
                test: /\.js?$/,

                loaders: ['react-hot-loader/webpack', 'babel-loader'],
                include: path.join(__dirname, 'public')

            }, 
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                include: path.join(__dirname, 'public')
            }
        ]
    }
}

module.exports = config;