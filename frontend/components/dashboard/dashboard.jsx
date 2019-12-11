import React from 'react';

class Dashboard extends React.Component {

	componentDidMount(){
		this.props.fetchAllPosts();
	}

	render() {
		// debugger
		let postFormBar = (<div>Post Form Bar Goes Here</div>);
		let posts = (<div>Posts Go Here</div>);
		let featured = (<div>Featured Posts Go Here</div>);
		
		return (
			<div className="dashboard">
				<div className = "post-form-bar">{postFormBar}</div>
				<div className ="left-col">{posts}</div>
				<div className="right-col">{featured}</div>
			</div>
		);
	}
}

export default Dashboard;