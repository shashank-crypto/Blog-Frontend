import React from 'react';
import '../App.css'

const Profile = ({user}) => {

    const profileStyling = {
        display : "flex",
        width : "90%",
        padding : "2em",
        backgroundColor : "rgb(190, 224, 157)",
        margin: " 2em auto"
    }

    return (
        <div className="Profile" style={profileStyling}>
            <img style={{"width" : "20%"}} src={user.img} alt=""/>
            <div style={{"width" : "80%"}}>
                <div className="ProfileInfo" style={{"display" : "flex", "justifyContent" : "space-between"}}>
                    <div style={{"lineHeight":"0.1em","padding" : "2em"}}>
                        <h3>{user.fname+" "+user.lname}</h3>
                        <h4 style={{"color":"rgb(88, 81, 145)"}}>@{user.username}</h4>
                    </div>
                    <div style={{padding :"2em"}}>
                        <h4>Followers: {user.follows.follower.count}</h4>
                        <h4>Following: {user.follows.following.count}</h4>
                    </div>
                </div>
                <hr/>
                <div className="ProfilePostInfo" style={{"lineHeight" : "0.1em" , "padding" : "0 2em"}}>
                    <h2>Posts: {user.posts.count}</h2>
                    <h3>Total Views: {user.posts.viewsTotal}</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile;