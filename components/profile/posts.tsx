import Post from "./posts/post";
import Comment from "./posts/comment";
//todo - gather data from user profile
//     - conditionally render posts and comments based off of users latest activity

const Posts = () => {
    return(
        <div className="posts">
            <Post />
            <Comment />
        </div>
    )
}

export default Posts;