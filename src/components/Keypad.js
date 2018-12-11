// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {

  handleKeyUp = (event)=>{
    console.log('Entering password...')
  }


  render(){
    console.log("PROPS", this.props);
    return (
        <input type="password" onKeyUp={this.handleKeyUp}></input>
      )
  }
}

export default Keypad
