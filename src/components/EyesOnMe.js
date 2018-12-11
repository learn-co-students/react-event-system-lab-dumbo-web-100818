// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component{

  constructor(props){
    super(props)
  }

  handleOnFocus = (e)=> {
    console.log('Good!')
  }

  handleOnBlur = (e)=>{
    console.log('Hey! Eyes on me!')

  }

  render(){
    return(
      <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}>
      </button>
    )
  }


}
export default EyesOnMe
