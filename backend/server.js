const express = require('express');
const server = express();
const cors = require('cors');
const path = require("path")
const fs = require('fs');
const port = 3001;
server.use(express.json());
server.use(cors());
const mysql = require('mysql2');
const multer = require('multer');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'blog'
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../frontend/public/imagenes');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});

const upload = multer({ storage: storage });

server.get('/posts', (req, res) => {
  const query = 'SELECT * FROM posts  ORDER BY posts.fecha DESC';
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).send('Error en la base de datos');
    }
    if (results.length > 0) {
      const datos = results;
      res.json(datos);
    } else {
      return res.status(400).send('Error 400');
    }
  });
});

server.post('/nuevoPost', upload.single('imagen'), (req, res) => {
  const titulo = req.body.titulo;
  const contenido = req.body.contenido;
  const imagen = req.file; // Información del archivo de imagen subido

  if (!titulo || !contenido || !imagen) {
    res.status(400).json({ message: 'Faltan datos obligatorios' });
    return;
  }

  const query = "INSERT INTO posts (titulo, contenido, imagen) VALUES (?, ?, ?)";
  const values = [titulo, contenido, imagen.filename];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error al insertar el nuevo post:', error);
      res.status(500).json({ message: 'Error en el servidor' });
    } else {
      console.log('Nuevo post insertado con éxito');
      res.json({ message: 'Publicación realizada' });
    }
  });
});

server.get('/post/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM posts WHERE id = '${id}'`;
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).send('Error en la base de datos');
    }
    if (results.length > 0) {
      const datos = results;
      res.json(datos);
    } else {
      return res.status(400).send('Post eliminado o no existente');
    }
  });
});

server.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  const imagen = req.query.imagen;

 

  const deleteQuery = `DELETE FROM posts WHERE id = '${id}'`;
  connection.query(deleteQuery, (error, results) => {
    if (error) {
      return res.status(500).send('Error en la base de datos');
    } else {
      
      if (imagen) {
        const imagePath = path.join(__dirname, '../frontend/public/imagenes', imagen);
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.error('Error al eliminar la imagen:', err);
          }
        });
      }
      return res.send('Post borrado');
    }
  });
});

server.put('/postEdited/:id', upload.single('imagen'), (req, res) => {
  const id = req.params.id;
  const { titulo, contenido, imagenAnterior } = req.body;
  let imagen = req.file ? req.file.filename : imagenAnterior;

  const query = 'UPDATE posts SET titulo = ?, contenido = ?, imagen = ? WHERE id = ?';
  const values = [titulo, contenido, imagen, id];
  const getImagenAnteriorQuery = 'SELECT imagen FROM posts WHERE id = ?';
  connection.query(getImagenAnteriorQuery, id, (error, results) => {
    if (error) {
      console.error('Error al obtener la imagen anterior:', error);
      return res.status(500).json({ error: 'Error al obtener la imagen anterior' });
    }

    const imagenAnterior = results[0]?.imagen;

    connection.query(query, values, (error, results) => {
      if (error) {
        console.error('Error al actualizar el post:', error);
        return res.status(500).json({ error: 'Error al actualizar el post' });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'Post no encontrado' });
      }
      if (req.file && imagenAnterior) {
        const imagePath = path.join(__dirname, '../frontend/public/imagenes', imagenAnterior);
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.error('Error al eliminar la imagen anterior:', err);
          }
        });
      }

      return res.json({ message: 'Post actualizado con éxito' });
    });
  });
});
server.listen(port, () => console.log('Servidor iniciado en el puerto 3001'));
