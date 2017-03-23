import React from 'react'
// import render method
import {render} from 'react-dom'

import {Header} from './components/Header'
import {Home} from './components/Home'

class App extends React.Component {

  constructor () {
    super()
    // declare initial state with this.state
    this.state = {
      homeLink: 'Home',
      homeMounted: true
    }
  }

  onGreet () {
    window.alert('hello!')
  }

  onChangeLink (newName) {
    this.setState({
      homeLink: newName
    })
  }

  onChangeHomeMounted () {
    this.setState({
      homeMounted: !this.state.homeMounted
    })
  }

  render () {
  // This method called by reactjs whenever reactjs thinks it needs to render a component

    let homeComponent = ''
    if (this.state.homeMounted) {
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
    return (  // Return what should be rendered
      // Note only one parent is allowed! You can nest as many as you like
      <div className='container'>
        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>
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
      </div>
    )
  }

}
render(<App />, document.getElementById('app'))  // 1st arg is what to render,i.e., the class App. 2nd arg is where to render
