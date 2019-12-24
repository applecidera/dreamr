import React from 'react';
import Post from '../posts/post_container';
import PostFormContainer from './post_form_container';

class NewPost extends React.Component{
    constructor(props){
				super(props);
				this.state={
					formType: this.props.location.pathname.split('/')[2].concat("Form")
				}
    }

    componentDidMount(){
        if (this.props.posts.length===0)
            this.props.fetchAllPosts();
    }

    render() {
        let posts = this.props.posts;
		let sortedPosts = posts.reverse();
		let showPosts = sortedPosts.map((post, idx)=>(
			<Post key={idx} post={post} />
		))
	

		let featured = (<div>Featured Posts Go Here</div>);

		return (
                <div className="new-post-background">
                    <div className="post-form-container-from-bar">
                        <PostFormContainer postBarType={this.state.formType} />
                    </div>
                    <div className="disable-filter"></div>
                    <div className ="left-col">{showPosts}</div>
                    <div className="right-col">{featured}</div>
                </div>
		);
    }
}

export default NewPost;




