// Code Keypad Component Here
import React, {Component} from 'react';

export default class Keypad extends Component{



  onKeyUp = () => console.log('Entering password...')

  render(){
    return(
      <input type="password" name="password" onKeyUp={this.onKeyUp} value=""/>
    )
  }

}
