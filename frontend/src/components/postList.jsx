import Post from "./post";
const PostList = ({ posts,fetchPosts,isDarkMode}) => {
    return (
      <>
        {posts.map((post) => (
          <Post key={post.id} post={post} fetchPosts={fetchPosts} isDarkMode={isDarkMode} />
        ))}
      </>
    );
  };
  
  export default PostList;
  