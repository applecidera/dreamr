import React from "react";
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { Link, withRouter } from 'react-router-dom';

class PostDropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
    // this.editThisPost = this.editThisPost.bind(this);
  }

  toggleDropdown() {
    this.setState({ open: !this.state.open });
  }

  // editThisPost(){
  //   let editUrl = "/posts/".concat(this.props.postId).concat("/edit");
  //   // debugger
  //   return () => this.props.history.push(editUrl)
  //   // () => this.props.history.push("/posts/".concat(this.props.postId).concat("/edit"))
  // }

  render() {
    const {postId} = this.props;
    const editUrl = "/edit/".concat(this.props.postId);
    return (
      <button
        onBlur={() => this.toggleDropdown()}
        onFocus={() => this.toggleDropdown()}
        tabIndex="0"
        className="fas fa-cog post-cog-edit-delete"
        >
        {this.state.open && (
          <div className="post-cog-dropdown-container">
            <div 
            className="post-cog-edit-post-button"
            onMouseDown={() => this.props.history.push("/posts/".concat(this.props.postId).concat("/edit"))}
            // to={editUrl}
            // style={{ textDecoration: 'none' }}
            >Edit</div>
            <div 
            className="post-cog-delete-post-button"
            onClick={()=>this.props.openModal("delete-confirmation")}
            id={postId}
            >Delete</div>
          </div>
        )}
      </button>
    );
  }
}

const msp = (state)=>({

});

const mdp = (dispatch)=>({
  openModal: (modal)=>dispatch(openModal(modal))
});

export default withRouter(connect(msp, mdp)(PostDropdown));

