import React from 'react'

export class Home extends React.Component {

  constructor (props) {
    super() // execute parent constructor,i.e. inherit from React.Component
    // this.age = props.age
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLink
    }

    setTimeout(this.onChangeState.bind(this), 3000)

    console.log('Constructor')
  }

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

  // console.log(this.state.age)
  onMakeOlder () {
    this.setState({
      age: this.state.age + 3
    })
  }

  onChangeState () {
    // console.log("this.state.status is " +this.state.status)
    this.setState({
      status: this.state.status + 1
    })
  }

  onChangeLink () {
    this.props.changeLink(this.state.homeLink)
  }

  onHandleChange (event) {
    this.setState({
      homeLink: event.target.value
    })
  }

  render () {
    // console.log(this.props)
    return (
      <div>
        <p> In a new Component!</p>
        <p> Your name is {this.props.name}, your age is {this.state.age}</p>
        <p> Status: {this.state.status }</p>
        <hr />
        <button onClick={() => this.onMakeOlder()} className='btn btn-primary'>
          Make me older!
        </button>
        <hr />
        <button className='btn btn-primary' onClick={this.props.greet}>
          Greet
        </button>
        <hr />
        <input type='text'
          value={this.state.homeLink}
          onChange={(event) => this.onHandleChange(event)}
        />
        <button onClick={this.onChangeLink.bind(this)} className='btn btn-primary'>Change Header Link</button>
      </div>
    )
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number,
  greet: React.PropTypes.func,
  initialLink: React.PropTypes.string
}
