import React from 'react'

class FloatingHeart extends React.Component{
  constructor(props){
    super(props);
    this.state={
      class: this.props.class
    }
  }

  componentDidUpdate(oldState){

  }

  render() {
    return (
      <div className = {this.state.class}>
      </div>
    )
  }
}

export default FloatingHeart;