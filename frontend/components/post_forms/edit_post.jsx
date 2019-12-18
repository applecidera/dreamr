import React from 'react';
import Post from '../posts/post_container';
import EditPostFormContainer from './edit_post_form_container';

class EditPost extends React.Component{
    constructor(props){
				super(props);
				this.state={
                    post: this.props.post
				}
    }

    componentDidMount(){
        const that = this;
        if (!this.state.post){
            // debugger
            this.props.fetchAllPosts().then(
                that.setState({post: this.props.post}));
        }
    }

    // componentDidUpdate(oldProps, oldState){
    //     debugger
    // }

    render() {
        // debugger
        if (!this.state.post) return null;

        const pivot = 0;
        let beforePosts;
        let afterPosts;
        // debugger
        let posts = this.props.posts;
        let sortedPosts = posts.reverse();
		let showPosts = sortedPosts.map((post, idx)=>(
            <Post key={idx} post={post} />
        ))
	

		let featured = (<div>Featured Posts Go Here</div>);

		return (
                <div className="edit-form-background">
                    <div className="edit-form-container">
                        <EditPostFormContainer post={this.props.post} />
                    </div>
                    <div className="disable-filter"></div>
                    <div className ="left-col">{showPosts}</div>
                    <div className="right-col">{featured}</div>
                </div>
		);
    }
}

export default EditPost;




