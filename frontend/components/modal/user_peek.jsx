import React from 'react'
// User Show Page
class UserPeek extends React.Component{
    render() {
        return (
            <div>
                <h1>User Info Goes Here</h1>
                <h3>Author Id is {this.props.authorId}</h3>
            </div>
        )
    }
}

export default UserPeek;