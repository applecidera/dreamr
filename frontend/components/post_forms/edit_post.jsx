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
        // debugger
        if (!this.state.post)
            this.props.fetchAllPosts();
    }

    componentDidUpdate(oldProps, oldState){
        
        if (oldProps.post && !oldState.post){
            this.setState({
                post: this.props.post
            })
        }
    }

    render() {
        // debugger
        if (!this.state.post) return (<div>Borked</div>);

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




