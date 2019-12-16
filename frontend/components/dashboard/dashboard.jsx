import React from 'react';
import Post from '../posts/post_container';
import PostFormBar from '../post_forms/post_form_bar_container';

class Dashboard extends React.Component {

	componentDidMount(){
		this.props.fetchAllPosts();
	}

	componentDidUpdate(prevProps){
		if (prevProps.posts.length != this.props.posts.length){
			this.props.fetchAllPosts();
		}
	}

	render() {
		
		// let postFormBar = (<div>Post Form Bar Goes Here</div>);
		// let posts = (<div>Posts Go Here</div>);
		let posts = this.props.posts.map((post, idx)=>(
			<Post key={idx} post={post} />
		))
	

		let featured = (<div>Featured Posts Go Here</div>);
		
		return (
			<div className="dashboard">
				<PostFormBar />
				{/* <div className = "post-form-bar">{postFormBar}</div> */}
				<div className ="left-col">{posts}</div>
				<div className="right-col">{featured}</div>
			</div>
		);
	}
}

export default Dashboard;