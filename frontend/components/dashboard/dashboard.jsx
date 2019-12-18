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
		
		
		let posts = this.props.posts;
		let sortedPosts = posts.reverse();
		let showPosts = sortedPosts.map((post, idx)=>(
			<Post key={idx} post={post} />
		))
	
		let featured = (<div></div>);
		
		return (
			<div className="dashboard">
				<PostFormBar />
				<div className ="left-col">{showPosts}</div>
				<div className="right-col">{featured}</div>
			</div>
		);
	}
}

export default Dashboard;