import PostList from "../components/postList";
import { Link } from "react-router-dom";
import { Header } from "../components/header";
import { useEffect,useState } from "react";
export function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <>
      <Header/>
      <main>
        <section>
          <div className="text-5xl sm:text-6xl mt-10 mx-auto text-center font-serif">
           <h1> Bienvenido a Blocick.</h1>
          </div>
          <nav className="flex items-center justify-center mx-auto">
              <Link to ='/new'>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out">
                  Añadir post
              </button>
            </Link>
          </nav>
          <div className="max-w-7xl mx-auto mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 p-4">
              <PostList posts={posts} fetchPosts={fetchPosts}/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}