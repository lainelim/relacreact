# relacreact
# Intro to React
Reactjs is a Javascript Web Framework that was developed by Jordan Walke a software engineer at Facebook. It was released in March 2013.

# Feature of React
* ### JSX
 JSX is a Javascript extension which allow using HTML tag syntax to render the web page.
 JSX generated code run faster than a similar code written in Vanilla JS

* ### Virtual DOM
 Virtual DOM is the most unique feature for React. React create an in-memory cache that will compute the resulting difference against DOM and update the displayed DOM with the updated changes

# Setup for React demo
* import all the node components require(react react-dom) and the webpack and babel

package.json
```Javascript
{
  "name": "relacreact",
  "version": "1.0.0",
  "description": "React Tutorial",
  "main": "index.js",
  "scripts": {
    "start": "npm run build",
    "build": "webpack -d && cp src/index.html dist/index.html && webpack-dev-server --content-base src/ --inline --hot",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/lainelim/relacreact.git"
  },
  "author": "RelacJS",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/lainelim/relacreact/issues"
  },
  "homepage": "https://github.com/lainelim/relacreact#readme",
  "dependencies": {
    "react": "^15.4.2",
    "react-dom": "^15.4.2"
  },
  "devDependencies": {
    "babel-core": "^6.24.0",
    "babel-loader": "^6.4.1",
    "babel-preset-es2015": "^6.24.0",
    "babel-preset-react": "^6.23.0",
    "webpack": "^2.3.0",
    "webpack-dev-server": "^2.4.2"
  }
}
```
Configure Webpack.config.js
``` Javascript
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
```
index.html
```Javascript
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>ReactJS Basics</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  </head>
  <body>
    <div id="app"></div>
    <script src="/app/bundle.js"></script>
  </body>
</html>
```
index.js
```Javascript
import React from 'react'
import {render} from 'react-dom'

import {Header} from './components/Header'
import Home from './components/Home'

class App extends React.Component {
  constructor(){
    super()

  }

    return (  // Return what should be rendered
      // Note only one parent is allowed! You can nest as many as you like
      <div className='container'>
        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>
            <h1> Hello Word!!!</h1>
          </div>
        </div>
        </div>
    )
  }

}

render(<App />, document.getElementById('app'))  // 1st arg is what to render,i.e., the class App. 2nd arg is where to render
```
