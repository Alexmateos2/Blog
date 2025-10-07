import { useState } from "react";
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { toast } from "react-toastify";
import { BotonesDelete } from "./botonesDelete";
const Post = ({ post,fetchPosts }) => {
  const [borrar,setBorrar] =useState(false);
   const handleBorrarChange = ()=> { 
    setBorrar(true);
   }
   const handleDelete = () => {
    fetch(`https://back-blog-7adl.onrender.com/delete/${post.id}?imagen=${post.imagen}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al eliminar el post");
        }
        toast.success("Post eliminado con éxito!");
        fetchPosts()
      })
      .catch((error) => {
        console.error("Error al eliminar el post:", error);
      });

    setBorrar(false);
  };
  const contenido = post.contenido.substring(0, 150);
  return (
  
    <article className='bg-white rounded-2xl p-4 dark:bg-cyan-900 dark:text-white/80'>
      <div className="h-full flex flex-col">
    <div>
      <div className="h-32 flex justify-center items-center">
        <Link to={`/post/${post.id}`}>
          <h2 className="font-bold text-center text-2xl md:text-3xl lg:text-4xl transition duration-300 ease-in-out transform hover:scale-110">{post.titulo}</h2>
        </Link>
      </div>

      <div className="flex gap-2 items-center justify-center mt-2 sm:mt-0 p-4 ">
        <p className='text-opacity-50 text-sm text-gray-500 font-semibold dark:text-white/60'>{new Date(post.fecha).toLocaleString()}</p>
        <FaRegClock className='text-gray-500 dark:text-white/60'/>
      </div>

      <div className="pt-4 w-full max-h-300">
  <Link to={`/post/${post.id}`}>
  <div className="mx-auto rounded-xl overflow-hidden pb-[100%] relative">
      <img
        src={`${process.env.PUBLIC_URL}/imagenes/${post.imagen}`}
        alt="imagen"
        className="absolute h-full w-full object-cover transition duration-300 ease-in-out transform hover:scale-110"
        loading="lazy"
      />
    </div>
  </Link>
</div>
      <p className="text-justify mt-4 p-5">
        {contenido}...
      </p>
    </div>

    <div className="mt-auto text-center">
      <button className="bg-transparent rounded-lg py-2 px-4 mt-10 transition duration-300 ease-in-out transform hover:scale-125 hover:text-red-500" onClick={handleBorrarChange}>
        <FaRegTrashAlt className="text-3xl" />
      </button>
    </div>
  </div>
    <BotonesDelete borrar={borrar} setBorrar={setBorrar} handleDelete={handleDelete}/>
  </article>
  );
};

export default Post;