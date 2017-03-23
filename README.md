# how can we pass data from parent to child component

lets say we want to pass a function to the home component which is a child of the parent index.js.

index.js under class App

onGreet () {
  window.alert('hello!')
}

We want to call this onGreet function in the child component. in order to do this we need to pass the link to the Home child.

<Home greet={this.onGreet} />

there is no need to do any binding because the key word 'this' is not present in the method.

Then, we switch over to the home component where we will add a button in the rendering

<button className='btn btn-primary' onClick={this.props.greet}>
  Greet
</button>

this.props.greet refers to the 'greet' method that was passed over from the parent in index.js.

As good practice, we should also include the function in the propTypes

greet: React.PropTypes.func

# how to pass data which was inputted in an input field

say we want to change the name of our home link in the 




















so far, we have learnt
1) output data
2) work with the html
3) change state and re-render the ui
4) exchange data between components

Components follow a life cycle for all such tasks

Lifecycle methods are not very complicated. We can think of them as glorified event handlers that get called at various points in a component's life, and just like event handlers, you can write some code to do things at those various points.

  - componentWillMount (immediately before initial rendering of a component)
  - componentDidMount (immediately after initial rendering)
  - componentWillReceiveProps (whenever component receive new props when state changes)
  - shouldComponentUpdate (before re-rendering, after receiving new props or change (can return false))
  - componentWillUpdate (executed after should component update returns true)
  - componentDidUpdate (after re-rendering of component)
  - componentWillUnmount

in Home.js

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

on INDEX.JS

under constructor:
homeMounted: true


add new function
onChangeHomeMounted () {
  this.setState({
    homeMounted: !this.state.homeMounted
  })
}

under render()
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

under return()

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
