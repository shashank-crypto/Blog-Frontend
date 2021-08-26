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
        <div className="PostContainer" style={{margin : "2em 1.5em" , borderRadius : "10px"}}>
            <div className="PostContent">
                <h3>{post.header}</h3> {/**A link to go to the full article page */}
                <img style={{"height" : "50px" , "borderRadius" : "5px" , margin : "0 2em"}} src={post.img.src[0]} alt=""/>
            </div>
            <div className="Tags">{post.tags.map(tag => <span>#{tag}</span>)}</div> {/** A link to go to the post with the that tag. */}
            <hr/>
            <div className="PostCredit" style={PostCredit}>
                <div className="Credit" style={{display : "flex"}}>
                    <div>Likes : {post.likes}</div>
                    <div>Comments : {post.comments.count}</div>
                </div>
                <div className="recognition" style={{margin : "0 2em"}}>
                    Author: {post.author} {/*A link to go to the author's profile.*/ }
                </div>
            </div>
        </div>
    )
}

export default Post;