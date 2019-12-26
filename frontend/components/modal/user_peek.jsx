import React from 'react'
import {connect} from 'react-redux'
import PostPeek from '../posts/post_peek_container'
import {fetchUser} from '../../actions/user_actions'

// User Show Page
class UserPeek extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            peekedUser: null || this.props.peekedUser 
        }
    }


    componentDidMount(){
        if (!this.props.peekedUser){
            this.props.fetchUser(this.props.peekedId)
            .then(this.setState({
                peekedUser: this.props.peekedUser
            }))
        }
    }

    render() {
    if (!this.props.peekedUser){
        return null;
    }
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
    peekedId: peekedId,
    posts: Object.values(state.entities.posts),
    peekedUser: state.entities.users[peekedId]
    }
}

const mdp = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
})
    



export default connect(msp, mdp)(UserPeek);

