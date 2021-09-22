const path = require('path');

module.exports = {
    entry:  {
        main: './main.js',
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].bungle.js',
    },
    devServer: {
        port: 3000,
    },
   
    

}