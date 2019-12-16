import React from 'react';
import { connect } from 'react-redux';
import Post from '../posts/post';
import PostFormContainer from './post_form_container';
import { fetchAllPosts } from '../../actions/post_actions';

class NewText extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllPosts();
    }

    render() {
        // debugger
        const {currentUser} = this.props;
        let posts = this.props.posts.map((post, idx)=>(
			<Post key={idx} post={post} currentUser={currentUser} bringMeDown="yes"/>
		))
	

		let featured = (<div>Featured Posts Go Here</div>);
		
		return (
            <div className="disable-filter">
                <div className="new-post-background">
                    <div className="post-form-container-from-bar">
                        <PostFormContainer postBarType="textForm" currentUser={currentUser}/>
                    </div>
                    <div className ="left-col">{posts}</div>
                    <div className="right-col">{featured}</div>
                </div>
            </div>
		);
    }
}

const msp = (state) => {
	return {
        posts: Object.values(state.posts),
        currentUser: state.session.currentUser
	}
};

const mdp = (dispatch) => ({
	fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(msp, mdp)(NewText);




