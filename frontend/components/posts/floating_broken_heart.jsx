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
    let visible;
    visible = (this.props.visible) ? "visible" : "invisible";
    return (
      <div 
      className = "fas fa-heart-broken floating-broken-heart"
      // id={visible}
      >
      </div>
    )
  }
}

export default FloatingHeart;