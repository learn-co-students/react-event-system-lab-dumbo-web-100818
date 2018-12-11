// Code Keypad Component Here
import React from 'react'




  export default class Keypad extends React.Component {

    handleEvent(event){
      console.log('Entering password...')
    }

    render(){
      return(
        <input onKeyUp={this.handleEvent} type="password" />
      )
    }

  }
