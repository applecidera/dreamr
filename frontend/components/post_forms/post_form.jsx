import React from 'react'

class PostForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      postType: "text",
      title: "",
      text: "",
      contentUrl: "",
      tags: ""
    }
  }


  render() {
    // debugger;
    return (
      <form className="post-form-container">
        
      </form >
    )
  }
}