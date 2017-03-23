# relacreact

### How does ReactJS update DOM

* Actual DOM is slow, so ReactJS wrote a representation of it in JS (Virtual DOM)

* When the button is clicked, ReactJS re-create a virtual DOM a 2nd time but in a way that it compares with the previous virtual DOM to see the difference and only re-renders that part that is different

* To see the rendered part, More tools > Rendering, then check Paint Flashing

In Home.js,
```javascript
export class Home extends React.Component {
  constructor(props){
    super()
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLinkName
    }
    //add in this part
    setTimeout(() => {
      this.setState({
        status: 1
      })
    },3000)
  }
```
### Stateless Component
* A component that only has props or may not even have props
* It's simply a function that takes props and spits out HTML
* Good practice to use state carefully as state management can get tricky in more complex application

In Header.js,
```javascript
export const Header = (props) => {
    return(
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li><a href="#">{props.homeLink}</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
```
In index.js,
```javascript
<Header homeLink="Home"/>
```
#### Why use stateless component
* No class needed
* No 'this' keyword
* Easy to test
* Improve performance
* To find out more: https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.uz9b8vvga
