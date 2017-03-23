# relacreact

While dealing with multiple components within a project, its always a good practice to store our components in a folder.

We want to create:
* A Home component
* A Header component (at the top)

Create Header.js and Home.js inside the components folder.

Inside Header.js:

``` javascript
import React from "react";
export class Header extends React.Component{
  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><a href="#">Home</a></li>
          </ul>
        </div>
      </nav>
      )
    }}


    Inside Home.js,

    import React from "react";
    export class Home extends React.Component{
      render(){
        return(
          <div>
            <p> In a new Component </p>
          </div>
        );
      }
    }

  Inside index.js,
  import {Header} from "./components/Header"
  import {Home} from "./components/Home"

  create html tag <Home /> and <Header/> in row divs.

    ```

  If we want to render dynamic data, for example,

  ```javascript

  import React from "react";
  export class Home extends React.Component{
    render(){
      return(
        <div>
          <p> In a new Component </p>
          { 2+ 2 }
        </div>
      );
    }
  }

Try: {2+2
        5 },
    {console.log("hello")}
Any javascript code can be written and its result will be displayed

  ```
