import React from "react";
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

class PostDropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
  }

  toggleDropdown() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const {postId} = this.props;
    return (
      <button
        onBlur={() => this.toggleDropdown()}
        onFocus={() => this.toggleDropdown()}
        tabIndex="0"
        className="fas fa-cog post-cog-edit-delete"
        >
        {this.state.open && (
          <div className="post-cog-dropdown-container">
            <div className="post-cog-edit-post-button">Edit</div>
            <div 
            className="post-cog-delete-post-button"
            onClick={()=>this.props.openModal("delete-confirmation")}
            id={postId}>Delete</div>
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

export default connect(msp, mdp)(PostDropdown);

