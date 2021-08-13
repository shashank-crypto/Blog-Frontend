import React from 'react';

const Post = ({post}) => {
    return (
        <div className="PostContainer">
            <div className="PostContent">
                <h3>{post.header}</h3>
                <img style={{"height" : "50px" , "borderRadius" : "5px"}} src={post.img.src[0]} alt=""/>
            </div>
            <hr/>
            <div className="PostCredit">
                <div className="Credit">
                    <div><span>Likes :</span>{post.likes}</div>
                    <div><span>Comments :</span>{post.comments.count}</div>
                </div>
                <div className="recognition">
                    <span>Author :</span>{post.author}
                </div>
            </div>
        </div>
    )
}

export default Post;