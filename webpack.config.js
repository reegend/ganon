const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        //flight_info: './src/flight_info.js',
        index:  './src/index.js',
        table: './src/table.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: true
};