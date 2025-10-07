import { Header } from "../components/header";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Footer } from "../components/footer";

export function NuevoPosts() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [imagen, setImagen] = useState(null);
  const handleImagenChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleGuardarFetch = async (e) => {
    e.preventDefault();
  
    if (titulo !== '' && contenido !== '' && contenido.length >= 200 && titulo.length<=60 && imagen !== null) {
      try {
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('contenido', contenido);
        formData.append('imagen', imagen);
  
        const response = await fetch('https://back-blog-7adl.onrender.com/nuevoPost', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          toast.success("Post creado con éxito");
          navigate("/");
        }
      } catch (error) {
        toast.error('Error en la solicitud');
      }
    } else if (titulo === '') {
      toast.error('Titulo vacío');
    }
  
     else if (contenido === '') {
      toast.error('Contenido vacío');
    }

      else if (contenido.length< 200){
        toast.error('El texto tiene que tener mas de 200 caracteres')
      }
     else {
      toast.error("Imagen no insertada");
    }
  };

  
  return (
    <>
      <Header />

      <div className='text-5xl sm:text-6xl mt-10 mx-auto text-center font-serif dark:text-white/80'>
        Nuevo post
      </div>
      <div className="flex justify-center items-center mt-12">
        <div className="w-full max-w-6xl">
          <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-cyan-900' encType="multipart/form-data">
            <div className="mb-4">
              <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white' htmlFor="titulo">
                Titulo*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="titulo"
                type="text"
                placeholder="Inserta un titulo del post (máximo 60 caracteres)"
                required
                maxLength={60}
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white' htmlFor="texto">
                Contenido del post*
              </label>

              <textarea
                name="text"
                id=""
                cols="30"
                rows="10"
                placeholder="Escribe tu post! (mínimo 200 caracteres)"
                className="shadow w-full rounded border text-gray-700 focus:outline-none py-2 px-3"
                required
                value={contenido}
                onChange={(e) => setContenido(e.target.value)}
                minLength={200}
              ></textarea>
            </div>
            <div className="mb-6">
              <label className='block text-gray-700 text-sm font-bold mb-2 dark:text-white' htmlFor="imagen">
                Imagen de portada*
              </label>
              <input
                accept="image/*"
                type="file"
                required
                className='w-full text-md sm:text-lg dark:text-white/70'
                onChange={handleImagenChange}
              />
            </div>
            <div className="flex justify-center gap-2">
              <button
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out w-1/4"
                onClick={handleGuardarFetch}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-20">
      <Footer/>
      </div>
    </>
  );
}
