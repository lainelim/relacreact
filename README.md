# Multiple Components  
Apart from creating individual components and loading them into the DOM, we can also combine components together.

Create 2 new components, header.js which will contain the navbar and home.js which is the main component on our page.

## header.js

```javascript
import React from 'react'
// don't have to import react-dom as header component is not going to be rendered directly into index.html

// add export in front of class so that it can be used in index.js
export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="">Home</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
```
## Home.js
```javascript
import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <p>In a new Component!</p>
            </div>
        );
    }
}
```

## Index.js
```javascript
import React from 'react';
import { render } from 'react-dom';

// import the 2 newly created components
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));
```
## Things to Note
There are 2 ways you can import a file, depending on how you write your export syntax. The first way is stated above.

The other way is when you do your exporting at the end of the script as follows:
```javascript
// In header.js
import React from "react";

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="">Home</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header
```
How you import it in index.js:
```javascript
// Header without the curly braces
import Header from "./components/Header";
```
