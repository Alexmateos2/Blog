import { FaRegClock } from 'react-icons/fa';
import { Header } from '../components/header';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BotonesDelete } from '../components/botonesDelete';
import { useDropzone } from 'react-dropzone';

export function EntradaBlog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [datosUser, setDatosUser] = useState({});
  const [editarButton, setEditarButton] = useState(false);
  const [borrar, setBorrar] = useState(false);
  const [nuevaImagen, setNuevaImagen] = useState(null);
  const [refreshComponent, setRefreshComponent] = useState(false);

  const handleBorrarChange = () => {
    setBorrar(true);
  };

  const handleDelete = () => {
    fetch(`http://localhost:3000/delete/${id}?imagen=${datosUser.imagen}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al eliminar el post');
        }
        toast.success('Post eliminado con éxito');
        navigate('/');
      })
      .catch((error) => {
        console.error('Error al eliminar el post:', error);
      });

    setBorrar(false);
  };

  const fetchDatos = () => {
    fetch(`http://localhost:3000/post/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDatosUser(data[0]);
      })
      .catch((error) => {
        console.error('Error al obtener los datos del post:', error);
      });
  };

  useEffect(() => {
    fetchDatos();
  }, [id]);

  useEffect(() => {
    if (nuevaImagen) {
      fetchDatos();
    }
  }, [nuevaImagen]);

  const handleEditar = () => {
    setEditarButton(true);
  };

  const handleGuardar = () => {
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
    if(datosUser.contenido.length>200){
    fetch(`http://localhost:3000/postEdited/${id}`, {
      method: 'PUT',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          toast.success('Cambios guardados con éxito!');
          setRefreshComponent(true);
          setEditarButton(false);
        } else {
          throw new Error('Error al guardar los cambios del post');
        }
      })
      .catch((error) => {
        console.error('Error al guardar los cambios del post:', error);
        toast.error('Error al guardar los cambios del post');
      });
  }
  else{
    toast.error('El contenido tiene que un mínimo de 200 caracteres')
  }
}

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatosUser((prevDatosUser) => ({
      ...prevDatosUser,
      [name]: value,
    }));
  };

  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setNuevaImagen(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

  if (refreshComponent) {
    fetchDatos()
    setRefreshComponent(false)
  }
  return (
    <>
      <Header />
      <div className="text-4xl sm:text-6xl mt-10 mx-auto text-center font-serif p-4">
       
        <h2>
          {editarButton ? (
            <input
              type="text"
              value={datosUser.titulo || ''}
              onChange={handleInputChange}
              maxLength={60}
              className="bg-transparent border-b border-gray-400 focus:outline-none"
              name="titulo"
            />
          ) : (
            datosUser.titulo || ''
          )}
        </h2>
      </div>

      <div className="flex gap-2 items-center justify-center mt-6 mb-3">
        {datosUser.fecha && (
          <p className="text-opacity-50 text-gray-500 font-semibold">
            {new Date(datosUser.fecha).toLocaleString()}
          </p>
        )}
        <FaRegClock className="text-gray-500" />
      </div>

      <div>
      {editarButton ? (
  <div
    {...getRootProps()}
    className="mx-auto flex justify-center items-center mt-4 border  cursor-pointer rounded-sm p-16 w-2/3 border-gray-400"
    style={{
      backgroundColor: isDragActive ? '#f8f8f8' : 'transparent',
    }}
  >
    <input {...getInputProps()} name="imagen" />
    {nuevaImagen ? (
      <img
        src={URL.createObjectURL(nuevaImagen)}
        alt="Nueva imagen"
        className="mx-auto rounded-lg lg:max-w-2xl max-w-full p-6"
      />
    ) : datosUser.imagen ? (
      <div className='flex flex-col'>
      <img
        src={`${process.env.PUBLIC_URL}/imagenes/${datosUser.imagen}`}
        alt="Imagen original"
        className="mx-auto rounded-lg  lg:max-w-2xl max-w-2/3 p4"
      />
      <div className='pt-10 text-lg text-center font-semibold'><p>Arrastra y suelta una imagen aquí o haz clic para seleccionarla</p></div>
      </div>
    ) : (
      <p>Arrastra y suelta una imagen aquí o haz clic para seleccionarla</p>
    )}
  </div>
) : (
  <div className="w-full mx-auto">
  <img
    src={`${process.env.PUBLIC_URL}/imagenes/${datosUser.imagen}`}
    alt="imagen"
    className="mx-auto rounded-lg lg:max-w-2xl max-w-sm sm:max-w-md px-4 max-h-[700px]"
  />
</div>
)}
      </div>

      <div className="mx-auto lg:pl-32 lg:pr-32 pl-2 pr-2 pt-10  whitespace-pre-wrap ">
        {editarButton ? (
          <textarea
            className="border border-gray-400 rounded px-4 py-2 w-full"
            value={datosUser.contenido || ''}
            name="contenido"
            minLength={200}
            onChange={handleInputChange}
            placeholder="Ingresa el contenido..."
            cols="30"
            rows="10"
          />
        ) : (
          <div className="mx-auto pl-8 pr-8 text-md sm:text-lg pt-10 pb-10 whitespace-pre-wrap shadow-md bg-slate-50 border border-slate-300 w-full sm:w-3/4">
            <p>{datosUser.contenido || ''}</p>
          </div>
        )}
      </div>

      <div className="mb-6 flex gap-4 justify-center">
        <button
          className={`bg-gray-400 text-white font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out w-32 ${
            editarButton ? '' : 'hover:bg-gray-500'
          }`}
          onClick={handleEditar}
          disabled={editarButton}
        >
          Editar
        </button>
        {editarButton && (
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out w-32"
            onClick={handleGuardar}
          >
            Guardar
          </button>
        )}
        <button
          className="bg-gray-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out w-32"
          onClick={handleBorrarChange}
        >
          Borrar
        </button>
      </div>
      <BotonesDelete borrar={borrar} setBorrar={setBorrar} handleDelete={handleDelete} />
    </>
  );
}
