import React from 'react';

//recommend posts : Randomly selecting posts using the tags of recently read articles
//daily reads : Randomly selecting posts using the preferred tags
const Recommend = ({recommendPosts}) => {

    const recommendStyle = {
        // width : "20%",
        borderRadius : "10px",
        margin : "2em 1em",
        backgroundColor : "rgb(218, 180, 131)",
        padding : "2em"
    }

    const recommendation = recommendPosts.map(post => <div>{post.header}<hr/></div>)

    return (
        <div style={recommendStyle}>
            <h3>Recommended Articles</h3><hr/>
            <div style={{display : "flex" , flexDirection : "column"}}>
                {recommendation}
            </div>
        </div>
    )
}

export default Recommend;