// Code Keypad Component Here
import React from 'react';
//create a REACT  Component
class Keypad extends React.Component {
//When that event fires, use console.log to print out the text 'Entering password...'.
  handleInputPassword = () => console.log('Entering password...')

  render() {
    return (
      <div>
      // render an input with password type
        <input
          type="password"
          //event handler
          onKeyUp={this.handleInputPassword}
        />
      </div>
    )
  }
}

export default Keypad;
