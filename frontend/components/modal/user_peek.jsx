import React from 'react'
import {connect} from 'react-redux'
import PostPeek from '../posts/post_peek_container'

// User Show Page
class UserPeek extends React.Component{

    render() {

    let posts = this.props.posts;
    let myPosts = [];
    const authorId = this.props.authorId;
    posts.forEach((post)=>{
        if (post.authorId === parseInt(authorId)){
            myPosts.push(post)
        }
    })
    let avatar = (this.props.peekedUser.avatar === "cloud") ? window.avatar : this.props.peekedUser.avatar;
    let sortedPosts = myPosts.reverse();
    let showPosts = sortedPosts.map((post, idx)=>(
        <PostPeek key={idx} post={post} />
    ))
    
        return (<>
            <div className="user-peek-top">
                <img src={avatar}/>
                <div className="side-peek-username">{this.props.peekedUser.username}</div>
                {/* <h3>Author Id is {this.props.authorId}</h3> */}
            </div>
            <div>{showPosts}</div>
            </>
        )
    }
}

const msp = (state, ownProps) => {
    let peekedId = ownProps.authorId;
    return {
    posts: Object.values(state.entities.posts),
    peekedUser: state.entities.users[peekedId]
}
}


export default connect(msp)(UserPeek);

