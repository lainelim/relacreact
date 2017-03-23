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

Try: {2+2;
        5; },
Try variables defined inside render()
 let content=''
          if (true)
          {
            content = <p>Something</p>
          }
        return(
          <div>
            <p> In a new Component </p>
              {content}
            </div>
Try: {console.log("hello")}
Try: {(5===2)? "True":"False"}
Any javascript expression can be written and its result will be displayed

  ```

In Index.js:
```javascript


  import React from 'react'
  import {render} from 'react-dom'

  import {Header} from './components/Header'
  import {Home} from './components/Home'

  class App extends React.Component {
    render(){
      var user={
        name: "Anna",
          hobbies: ["Sports"]
      }
      return (  // Return what should be rendered
        // Note only one parent is allowed! You can nest as many as you like
        <div className='container'>
          <div className='row'>
            <div className='col-xs-10 col-xs-offset-1'>
              <Header />
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-10 col-xs-offset-1'>
              <Home name={"Max"} age={27} user={user}/>
            </div>
          </div>
        </div>
      )
    }
  }

  render(<App />, document.getElementById('app'))

In Home.js;

import React from "react";
export class Home extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div>
        <p> In a new Component </p>
        <p> Your name is {this.props.name}, your age is {this.props.age}</p>
        <p> User Object => Name: {this.props.user.name} </p>
        <div>
          <h4>Hobbies</h4>
          <ul>
            {this.props.user.hobbies.map((hobby) => <li>{hobby}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

Let us add "sports" as a hobby in hobbies[] and also add key for each <li> element in Home.js
{this.props.user.hobbies.map((hobby, i) =>  <li key={i}>{hobby}</li>)}

Concept of Children of Home:
In Index.js;

  import React from 'react'
  import {render} from 'react-dom'

  import {Header} from './components/Header'
  import {Home} from './components/Home'

  class App extends React.Component {
    render(){
      var user={
        name: "Anna",
          hobbies: ["Sports", "Reading"]
      }
      return (  // Return what should be rendered
        // Note only one parent is allowed! You can nest as many as you like
        <div className='container'>
          <div className='row'>
            <div className='col-xs-10 col-xs-offset-1'>
              <Header />
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-10 col-xs-offset-1'>
              <Home name={"Max"} age={27} user={user}>
              <p>This is a paragraph</p>
              </Home>
            </div>
          </div>
        </div>
      )
    }
  }

render(<App />, document.getElementById('app'))

In Home.js;

  import React from "react";
  export class Home extends React.Component{
    render(){
      var text = "Something"
      console.log(this.props)
      return(
        <div>
          <p> In a new Component </p>
          <p> Your name is {this.props.name}, your age is {this.props.age}</p>
          <p> User Object => Name: {this.props.user.name} </p>
          <div>
            <h4>Hobbies</h4>
            <ul>
              {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
            </ul>
          </div>
          <hr/>
          {this.props.children}
        </div>
      );
    }
  }

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  user: React.PropTypes.object,
  children: React.PropTypes.element.isRequired
};
```
