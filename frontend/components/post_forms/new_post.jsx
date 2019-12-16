import React from 'react';
import { connect } from 'react-redux';
import Post from '../posts/post';
import PostFormContainer from './post_form_container';
import { fetchAllPosts } from '../../actions/post_actions';

class NewPost extends React.Component{
    constructor(props){
				super(props);
				this.state={
					formType: this.props.location.pathname.split('/')[2].concat("Form")
				}
    }

    componentDidMount(){
        this.props.fetchAllPosts();
    }

    render() {
        // debugger
        const {currentUser} = this.props;
        let posts = this.props.posts.map((post, idx)=>(
			<Post key={idx} post={post} currentUser={currentUser}/>
		))
	

		let featured = (<div>Featured Posts Go Here</div>);

		return (
                <div className="new-post-background">
                    <div className="post-form-container-from-bar">
                        <PostFormContainer postBarType={this.state.formType} currentUser={currentUser}/>
                    </div>
                    <div className="disable-filter"></div>
                    <div className ="left-col">{posts}</div>
                    <div className="right-col">{featured}</div>
                </div>
		);
    }
}

const msp = (state) => {
	return {
        posts: Object.values(state.entities.posts),
        currentUser: state.session.currentUser
	}
};

const mdp = (dispatch) => ({
	fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(msp, mdp)(NewPost);




