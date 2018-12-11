// Code EyesOnMe Component Here
import React, {Component} from 'react'
 class EyesOnMe extends Component {


handleonFocus = (event) => {
  console.log('Good!');
}

handleonBlur = (event) => {
  console.log('Hey! Eyes on me!');
}

render() {
  return (
    <button onFocus={this.handleonFocus} onBlur={this.handleonBlur}></button>
  )
}
}

export default EyesOnMe
