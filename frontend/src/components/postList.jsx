import Post from "./post";
const PostList = ({ posts,fetchPosts}) => {
    return (
      <>
        {posts.map((post) => (
          <Post key={post.id} post={post} fetchPosts={fetchPosts} />
        ))}
      </>
    );
  };
  
  export default PostList;
  