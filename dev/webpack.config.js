const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: '../src/defaults.js',
  devtool: false,
  output: {
    path: path.join(__dirname, '../../../src'),
    filename: 'defaults.min.js'
  },
};
