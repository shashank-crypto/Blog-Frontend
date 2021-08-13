import React from 'react';
// import '../App.css'

const PostCredit  = {
    display : "flex",
    justifyContent : "space-between",
    alignItems: "center",
    paddingBottom: "10px"
}


const Post = ({post}) => {
    return (
        <div className="PostContainer" style={{margin : "2em auto" , borderRadius : "10px"}}>
            <div className="PostContent">
                <h3>{post.header}</h3>
                <img style={{"height" : "50px" , "borderRadius" : "5px" , margin : "0 2em"}} src={post.img.src[0]} alt=""/>
            </div>
            <hr/>
            <div className="PostCredit" style={PostCredit}>
                <div className="Credit" style={{display : "flex"}}>
                    <div>Likes : {post.likes}</div>
                    <div>Comments : {post.comments.count}</div>
                </div>
                <div className="recognition" style={{margin : "0 2em"}}>
                    Author: {post.author}
                </div>
            </div>
        </div>
    )
}

export default Post;