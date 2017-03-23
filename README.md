# First Component
## Index.js
import React from 'react';  
import { render } from 'react-dom';

class App extends React.Component {

    render() {
        return (
          *JSX here*
          *JS mixed with HTML*
          *similar to document.createElement("div")*
          *have to use className instead of class, even though it looks like HTML code, it is JS*
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Hello!</h1>
                    </div>
                </div>
            </div>
          *there can only be one root element (one div), okay to have nested elements, but cannot have sibling div*
        );
    }
}

*(call the render method from React-DOM)*   
*(first argument is the component to be rendered, second argument is where you want to render it in your view)*    
render(<App />, window.document.getElementById('app'));  
*(tell reactjs to render the App component in the div with id 'app')*

# Multiple Components  
*create Components folder in src/app*   
*create 'Home' component (Home.js) which is the main page component*  
*create 'Header' component (Header.js) which is the top of the page, or navbar*
## Header.js
import React from "react";
*don't need to import render from React-DOM here because we are not rendering anything*

export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Home</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
## Home.js
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
## Index.js
import React from 'react';  
import { render } from 'react-dom';

import { Header } from "./components/Header";    
import { Home } from "./components/Home";

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                        *Header tag above is to tell reactjs to include the {Header} component which we imported here*
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
