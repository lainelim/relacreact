var path = require('path')

var SRC_DIR = path.resolve(__dirname, 'src') // To tell webpack where is the entrance for source code
var DIST_DIR = path.resolve(__dirname, 'dist')  // Distribution or target directory

var config = {
  // determine which file is first file to start transpiling and bundling journey
  entry: SRC_DIR + '/app/index.js',
  // tell webpack where to output everything
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {// For transforming ES6 to ES5, some modules need to be loaded
    loaders: [
      {
        test: /\.js?/, // regex to look at all .js files
        include: SRC_DIR,  // Look into src directory to find all .js files
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']  // Presets for babel as per package.json
        }
      }
    ]
  }

}
module.exports = config
