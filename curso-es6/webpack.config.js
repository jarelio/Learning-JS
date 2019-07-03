module.exports = {
    entry: {
        main: './src/main.js',
        // module2: './exercicios-modulo2/main.js',
    },
    output: {
        filename: 'bundle.js',
        
        path: __dirname + '/public',
        //path: __dirname + '/exercicios-modulo2/',
        
    },
    devServer:{
        contentBase: __dirname + '/public'
        // contentBase: __dirname + '/exercicios-modulo2',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
              
        ],
    }
}; 