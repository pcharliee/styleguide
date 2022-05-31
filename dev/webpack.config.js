const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: '../../styleguide/src/defaults.js',
  devtool: false,
  output: {
    path: path.join(__dirname, '../../../styleguide/src'),
    filename: 'defaults.min.js'
  },
};
