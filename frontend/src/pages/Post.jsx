import { FaRegClock } from 'react-icons/fa';
import { Header } from '../components/header';
import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BotonesDelete } from '../components/botonesDelete';
import { useDropzone } from 'react-dropzone';
import { Footer } from '../components/footer';

export function EntradaBlog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [datosUser, setDatosUser] = useState(null); // inicialización segura
  const [editarButton, setEditarButton] = useState(false);
  const [borrar, setBorrar] = useState(false);
  const [nuevaImagen, setNuevaImagen] = useState(null);
  const [refreshComponent, setRefreshComponent] = useState(false);

  const handleBorrarChange = () => setBorrar(true);

  const handleDelete = () => {
    fetch(`https://back-blog-7adl.onrender.com/delete/${id}?imagen=${datosUser?.imagen}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) throw new Error('Error al eliminar el post');
        toast.success('Post eliminado con éxito');
        navigate('/');
      })
      .catch((error) => console.error('Error al eliminar el post:', error));
    setBorrar(false);
  };

  const fetchDatos = useCallback(() => {
    fetch(`https://back-blog-7adl.onrender.com/post/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Error al obtener el post');
        return response.json();
      })
      .then((data) => {
        // DATA puede ser array o objeto
        if (Array.isArray(data)) {
          setDatosUser(data[0] || null);
        } else if (data) {
          setDatosUser(data);
        } else {
          setDatosUser(null);
        }
      })
      .catch((error) => {
        console.error('Error al obtener los datos del post:', error);
        setDatosUser(null); // evita quedarse en "Cargando..."
      });
  }, [id]);

  useEffect(() => {
    fetchDatos();
  }, [fetchDatos]);

  useEffect(() => {
    if (nuevaImagen) fetchDatos();
  }, [nuevaImagen, fetchDatos]);

  const handleEditar = () => setEditarButton(true);

  const handleGuardar = () => {
    if (!datosUser) return; // seguridad adicional

    const formData = new FormData();
    formData.append('titulo', datosUser.titulo);
    formData.append('contenido', datosUser.contenido);

    if (nuevaImagen) {
      formData.append('imagen', nuevaImagen);
      formData.append('imagenAnterior', datosUser.imagen);
    } else {
      formData.append('imagen', datosUser.imagen || '');
      formData.append('imagenAnterior', datosUser.imagen || '');
    }

    if (datosUser.contenido.length > 200) {
      fetch(`https://back-blog-7adl.onrender.com/postEdited/${id}`, {
        method: 'PUT',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            toast.success('Cambios guardados con éxito!');
            setRefreshComponent(true);
            setEditarButton(false);
          } else throw new Error('Error al guardar los cambios del post');
        })
        .catch((error) => {
          console.error('Error al guardar los cambios del post:', error);
          toast.error('Error al guardar los cambios del post');
        });
    } else {
      toast.error('El contenido tiene que tener un mínimo de 200 caracteres');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatosUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) setNuevaImagen(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

  if (refreshComponent) {
    fetchDatos();
    setRefreshComponent(false);
  }

  // ← RENDER CONDICIONAL PARA EVITAR ERRORES
  if (!datosUser) return <p className="text-center mt-10">Cargando...</p>;

  return (
    <>
      <Header />
      <div className="md:w-2/3 w-full mx-auto">
        <div className="text-3xl sm:text-6xl mt-10 mx-auto text-center font-serif p-4">
          <h2 className="dark:text-white/80">
            {editarButton ? (
              <input
                type="text"
                value={datosUser.titulo || ''}
                onChange={handleInputChange}
                maxLength={60}
                className="bg-transparent border-b border-gray-400 focus:outline-none w-full"
                name="titulo"
              />
            ) : (
              datosUser.titulo || ''
            )}
          </h2>
        </div>

        <div className="flex gap-2 items-center text-gray-900 justify-center mt-6 mb-3">
          {datosUser.fecha && (
            <p className="text-opacity-80 text-sm text-gray-500 font-semibold dark:text-white/80">
              {new Date(datosUser.fecha).toLocaleString()}
            </p>
          )}
          <FaRegClock className="text-gray-500 dark:text-white/80" />
        </div>

        <div>
          {editarButton ? (
            <div
              {...getRootProps()}
              className="mx-auto flex justify-center items-center mt-4 border cursor-pointer rounded-sm p-16 w-2/3 border-gray-400"
              style={{ backgroundColor: isDragActive ? '#f8f8f8' : 'transparent' }}
            >
              <input {...getInputProps()} name="imagen" />
              {nuevaImagen ? (
                <img
                  src={URL.createObjectURL(nuevaImagen)}
                  alt="Nueva imagen"
                  className="mx-auto rounded-lg w-full max-w-full p-6"
                />
              ) : datosUser.imagen ? (
                <div className="flex flex-col">
                  <img
                    src={`${process.env.PUBLIC_URL}/imagenes/${datosUser.imagen}`}
                    alt="Imagen original"
                    className="mx-auto rounded-lg w-full max-w-full p-4"
                  />
                  <div className="pt-10 text-sm sm:text-lg text-center font-semibold text-black dark:text-white/80">
                    <p>Arrastra y suelta una imagen aquí o haz clic para seleccionarla</p>
                  </div>
                </div>
              ) : (
                <p className="dark:text-white/80">
                  Arrastra y suelta una imagen aquí o haz clic para seleccionarla
                </p>
              )}
            </div>
          ) : (
            <div className="w-full mx-auto">
              <img
                src={`${process.env.PUBLIC_URL}/imagenes/${datosUser.imagen}`}
                alt="imagen"
                className="mx-auto rounded-lg lg:max-w-2xl max-w-2/3 p-3 px-6"
                style={{ maxHeight: '700px' }}
              />
            </div>
          )}
        </div>

        <div className="mx-auto lg:px-40 px-4 pt-10 whitespace-pre-wrap">
          {editarButton ? (
            <textarea
              className="border border-gray-400 rounded px-4 py-2 w-full dark:bg-cyan-900 dark:text-white/80"
              value={datosUser.contenido || ''}
              name="contenido"
              minLength={200}
              onChange={handleInputChange}
              placeholder="Ingresa el contenido..."
              cols="30"
              rows="10"
            />
          ) : (
            <div className="mx-auto px-5 sm:px-12 text-md sm:text-lg pt-10 pb-10 whitespace-pre-wrap shadow-md bg-slate-50 border border-slate-300 w-3/4vw dark:bg-cyan-900 dark:text-white/80">
              <p>{datosUser.contenido || ''}</p>
            </div>
          )}

          <div className="mb-6 flex gap-4 justify-center">
            <button
              className={`bg-gray-400 hover:shadow-lg text-white font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out w-32 ${
                editarButton ? '' : 'hover:bg-gray-500'
              }`}
              onClick={handleEditar}
              disabled={editarButton}
            >
              Editar
            </button>
            {editarButton && (
              <button
                className="bg-green-600 hover:bg-green-700 hover:shadow-md text-white font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out w-32"
                onClick={handleGuardar}
              >
                Guardar
              </button>
            )}
            <button
              className="bg-gray-600 hover:bg-red-700 hover:shadow-md text-white font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out w-32"
              onClick={handleBorrarChange}
            >
              Borrar
            </button>
          </div>
          <BotonesDelete borrar={borrar} setBorrar={setBorrar} handleDelete={handleDelete} />
        </div>
      </div>
      <Footer />
    </>
  );
}
