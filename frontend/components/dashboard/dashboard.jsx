import React from 'react';
import Post from '../posts/post_container';
import FeaturedPost from '../featured/featured_post';
import PostFormBar from '../post_forms/post_form_bar_container';


class Dashboard extends React.Component {
	constructor(props){
		super(props);
		this.state={
			featured: (this.props.posts) 
			? this.props.posts[Math.floor(Math.random() * this.props.posts.length)]
			: null
		}
	}

	componentDidMount(){
		if (this.props.posts.length < 2)
			this.props.fetchAllPosts();
	}

	componentDidUpdate(prevProps){
		if (prevProps.posts.length != this.props.posts.length){
			this.props.fetchAllPosts()
		}
	}

	render() {
		let featured = (<div></div>);
		// if (!this.state.featured && this.props.posts){
		// 	this.setState({featured: this.props.posts[Math.floor(Math.random() * this.props.posts.length)]})
		// 	featured = (<FeaturedPost post={this.state.featured}/>);
		// } 
		// debugger
		
		// let postFormBar = (<div>Post Form Bar Goes Here</div>);
		// let posts = (<div>Posts Go Here</div>);
		
		
		let posts = this.props.posts;
		let sortedPosts = posts.reverse();
		let showPosts = sortedPosts.map((post, idx)=>(
			<Post key={idx} post={post} />
		))
	
		
		
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