
# how can we pass data from parent to child component

lets say we want to pass a function to the home component which is a child of the parent index.js.

index.js under class App

``` javascript
onGreet () {
  window.alert('hello!')
}
```
We want to call this onGreet function in the child component. in order to do this we need to pass the link to the Home child.

```javascript
<Home greet={this.onGreet} />
```

there is no need to do any binding because the key word 'this' is not present in the method.

Then, we switch over to the home component where we will add a button in the rendering
```javascript
<button className='btn btn-primary' onClick={this.props.greet}>
  Greet
</button>
```

this.props.greet refers to the 'greet' method that was passed over from the parent in index.js.

As good practice, we should also include the function in the propTypes

```javascript
greet: React.PropTypes.func
```

# how to pass data which was inputted in an input field

say we want to change the name of our home link in the header component via user interaction in the home component.

on App.js, we have a function to update the name of the homeLink:
```javascript
onChangeLink (newName) {
  this.setState({
    homeLink: newName
  })
}
```
therefore, we also need to include the homeLink in our initial state by adding the constructor:
```javascript
constructor(){
  super()
  this.state={
    homeLink:"home"
  }
}
```
under our header, we also pass this state as a props:
```javascript
<Header homeLink={this.state.homeLink} />
```
since we want to be able to change the link name via home, we have to pass the onChangeLink function to the Home component.
```javascript
<Home
  name={'Max'}
  initialAge={29}
  greet={this.onGreet}
  changeLink={this.onChangeLink.bind(this)}
/>
```
in the Home component we will need to create a function to call the method passed as the props

```javascript
onChangeLink () {
  this.props.changeLink(this.state.homeLink)
}
```
then we create a button to change the link name

```javascript
  <button onClick={this.onChangeLink.bind(this)} className='btn btn-primary'>Change Header Link</button>
```

this.state.homeLink is currently undefined, so we need to add it. Say we want to set it as "changed link"

```javascript
this.state = {
  age: props.initialAge,
  status: 0,
  homeLink: "changed link"
}
```

so by executing the button, we updated the parent homeLink name and this was passed as a prop to the Header component.

# 2 way-binding

what if we wanted to allow users to change the name of the link to whatever they want?

so in the home component, we add a text input field for users. we want to achieve 2 things:
* allow users to see what is the current link name
* to allow users to input what they would like the current link name to be.

first, we need to pass the homeLink value from parent to Home component

```javascript
<Home
  name={'Max'}
  initialAge={29}
  greet={this.onGreet}
  changeLink={this.onChangeLink.bind(this)}
  initialLink={this.state.homeLink}
/>
```
then, we can bind the value of the homeLink to our input and add a onChange listener to set up two way binding -> to do something whenever the input field changes
```javascript
<input type="text" value={this.props.initialLink} onChange={}/>
```
we want to pass a function to the onChange handler to execute on Home.js

```javascript
onHandleChange (event) {
  this.setState({
    homeLink: event.target.value
  })
}
```

with that we can place the object in the onChange handler for execution whenever there is a change in value:

```javascript
<input type='text'
  value={this.props.initialLink}
  onChange={(event) => this.onHandleChange(event)}
/>
```

this does not work because while our handler executes onHandleChange to change the state, the value of the input refers to the property that was passed in from the parent. We need to change the value to:

```javascript
<input type='text'
  value={this.state.homeLink}
  onChange={(event) => this.onHandleChange(event)}
/>
```
at the constructor in Home component, homeLink was hard coded as "changed link", so we will need to change to

```javascript

this.state = {
  age: props.initialAge,
  status: 0,
  homeLink: props.initialLink
}

```





# Component Lifecycle Hooks

so far, we have learnt
1) output data
2) work with the html
3) change state and re-render the ui
4) exchange data between components

Components follow a life cycle for all such tasks

Lifecycle methods are not very complicated. We can think of them as glorified event handlers that get called at various points in a component's life, and just like event handlers, you can write some code to do things at those various points.

<img src="http://i.imgur.com/dDSyhdj.png">

  - componentWillMount (immediately before initial rendering of a component)
  - componentDidMount (immediately after initial rendering)
  - componentWillReceiveProps (whenever component receive new props when state changes)
  - shouldComponentUpdate (before re-rendering, after receiving new props or change (can return false))
  - componentWillUpdate (executed after should component update returns true)
  - componentDidUpdate (after re-rendering of component)
  - componentWillUnmount

in Home.js

```javascript
// Immediately before INITIAL rendering
// If this.setState executed here, will change the initial render
componentWillMount () {
  console.log('Component will mount')
}
// Immediately after initial rendering
componentDidMount () {
  console.log('Component did mount')
}
// When component receives new props
componentWillReceiveProps (nextProps) {
  console.log('Component will receive props', nextProps)
}
// Before rendering, after receiving new props or state. Control if re-render possible!
// return false and it won't render! Can use if/else statement here to control if re-render allowed.
shouldComponentUpdate (nextProps, nextState) {
  console.log('Should component update', nextProps, nextState)
  // if (nextState.status === 1) { // nextState.status is single-handedly blocking the re-render of Home component from occuring upon setTimeout's attempt to switch nextState.status = 1
  //   return false
  // }
  return true
}

// Before rendering, after receiving new props or state
componentWillUpdate (nextProps, nextState) {
  console.log('Component will update', nextProps, nextState)
}

// After component's updates are flushed to DOM.Update already happened, so we don't have the 'nextProps' and 'nextState'
componentDidUpdate (prevProps, prevState) {
  console.log('Component did update', prevProps, prevState)
}

// Immediately before removing component from DOM
componentWillUnmount () {
  console.log('Component will unmount')
}
```
on INDEX.JS

under constructor:
```javascript
homeMounted: true
```

add new function
```javascript
onChangeHomeMounted () {
  this.setState({
    homeMounted: !this.state.homeMounted
  })
}
```

under render():
```javascript
let homeComponent = "";
if (this.state.homeMounted){
    homeComponent = (
      <Home
        name={'Max'}
        initialAge={29}
        greet={this.onGreet}
        changeLink={this.onChangeLink.bind(this)}
        initialLink={this.state.homeLink}
      />
    )
  }  
}
```
under return():

```javascript
<div className='row'>
  <div className='col-xs-10 col-xs-offset-1'>
    {homeComponent}
  </div>
</div>
<hr />
<div className='row'>
  <div className='col-xs-10 col-xs-offset-1'>
    <button onClick={this.onChangeHomeMounted.bind(this)} className='btn btn-primary'>(Un)Mount Home Component</button>
  </div>
</div>
```
Component lifecycle is useful when:
  * You want to do something before or after the component has rendered or mounted
  * You want to avoid a re-render

It gives you control over the stages that a component goes through
