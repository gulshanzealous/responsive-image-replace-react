import React, { Component } from 'react';
import './App.css';
import macScreen from './res/mac-screen.png'
import macDesk from './res/mac-desk.jpeg'


class App extends Component {

  state = {
    showScreen: false
  }

  onShowScreen = () => {
    this.setState({
      showScreen: true
    })
    this.initiateTimer(this)
  }

  initiateTimer = (self) => {
    setTimeout((self)=>{
      self.setState({
        showScreen:false
      })
    },1000,self)
  }

  render() {
    return (
      <div className="App">
        <div className='Container'>

        {/* header */}
        <div className='Header'  >
          Testright
        </div>

        <div className='Desk'>
          <img src={macDesk} className='Desk-image' />
        </div>

        <div className='Screen'>
          {
            this.state.showScreen?
            <img src={macScreen} className='Screen-image' />
            :
              <div className='Main-Button' onClick={this.onShowScreen} >
                Show
              </div>
          }
        </div>

        


        </div>
      </div>
    );
  }
}

export default App;
