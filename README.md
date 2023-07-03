# Blocick by Alejandro Mateos
 1  **Introducción**
 
 2  **Guía de uso**
 
 3  **Estructura del proyecto**

 4   **Retos y soluciones**

 5  **Mejoras futuras**

 6 **Conclusión**


  <h1><strong>Introducción</strong></h1>

   **Bienvenidos a Blocick!** Blocick es un blog multitemático sobre temas en los que tengo interés,
   es una página sencilla de usar pero muy agradable para el usuario.

   El diseño de esta página esta inspirado en el minimalismo.

   En esta página podreís crear editar y borrar los posts a vuestro gusto, a continuación os dejo una
   guía de uso.


   <h1><strong>Guía de uso</strong></h1>

   **Blocick** Es una página bastante intuitiva de usar, aqui os detallo las distintas funcionalidades que podréis usar.
   Nada más entrar en el Home os encontrareis con un header que contendra Blocick y el modo oscuro. Blocick os llevará siempre al Home.
   El modo oscuro se guarda entre páginas, podréis escoger a vuestro gusto.

   Debajo del título dispondréis de un boton para añadir post el cual os llevará a la página para crear el Post.
   Teneis que añadir un título (máximo 60 caracteres), un contenido (mínimo 200 caracteres) y una foto.

   Al crearla os llevará otra vez al Home con vuestro post actualizado.
   En el Home teneis todos los posts los cuales podeis acceder clicando la imagen o el título, tambien podréis borrar el post desde Home,os saltará un pop-up de confirmación.

   Al clicar en el Post completo os llevará al propio post, en la página podreís leer el post completo, pero tambíen editarlo e incluso borrarlo si quereís.

   La página esta hecha para que sea accesible y totalmente adaptable a todos los dispositivos, espero que la disfrutéis!



   <h1><strong>Estructura del proyecto</strong></h1>

   El proyecto está hecho mediante create-react-app. Tiene dos carpetas grandes, carpeta frontend y carpeta backend.

   La carpeta **Frontend** tiene los modulos : react-dropzone, react-icons, react-router-dom, react-scripts,react-toastify y Tailwindcss.

   Está organizada de la siguiente manera: 
   
   -En la carpeta public esta tanto la carpeta donde se alojan las imagenes como el index.html donde se renderiza todo.

   -La carpeta src tiene una sub-carpeta components donde se guardan componentes de menor tamaño que luego se integran en los componentes padre de la carpeta Pages.

   Las pages se importan en App donde se establece un ruteo.

   Finalmente App se renderiza en index.js.

   En la base de datos hay una tabla Posts que incluye la id de cada post, el título , el contenido , la ruta de la imagen y la fecha que se genera automáticamente.
   <h1><strong>Retos y soluciones</strong></h1>

   Los principales retos fueron sobretodo problemas al editar datos de los post ya que aveces se borraban en la BBDD o no se renderizaban bien luego. Mediante formData y mucha prueba y error se optimizó todos los fetch para que trajeran los datos a mi gusto.

   Tambien fue un reto usar Tailwind, ya que era mi primera vez, me costó adaptarme y tuve algun problema con los anchos de las imagenes pero, alfinal ha quedado todo ordenado y responsive.

   <h1><strong>Mejoras futuras</strong></h1>

   El proyecto está en constante evolución y soy consciente de que podría ser mucho mejor en un futuro.

   Ideas que tuve para implementar en un futuro son:
   * **Botón de previsualizar** : A la hora de crear post, que te lleve a una página donde veas el post completo.
   * **Mejora de rendimiento** : Sería recomendable crear la app con vite para su mejora de rendimiento y hay código que podria quedar mas simplificado.
   * **Posible mejora de diseño** : Aunque tiene un diseño que me gusta me gustaría que tuviera una foto de fondo que cubriera el header para darle mas personalidad, tambíen un nav mas complejo que incluyera un "about us" que te llevara haciendo un smooth scrolling.
   * **Vista de usuario/admin**  : Poner una vista de usuario en la que no se puedan editar o borrar los posts y sea mas agradable de navegar.

   Seguro que con el paso del tiempo se me ocurren muchas mas ideas que implementar!

   <h1><strong>Conclusión</strong></h1>

  En conclusión, Blocick es un blog multitemático fácil de usar y con un diseño minimalista. La página cuenta con funcionalidades intuitivas, como la posibilidad de crear, editar y borrar posts. El modo oscuro también está disponible y se guarda entre páginas.

   El proyecto está estructurado utilizando create-react-app, con una carpeta frontend y una carpeta backend. El frontend utiliza módulos como react-dropzone, react-icons, react-router-dom, react-scripts, react-toastify y Tailwind CSS. La carpeta src contiene componentes y páginas organizados de manera adecuada.

   Durante el desarrollo, se enfrentaron retos relacionados con la edición de datos de los posts y se solucionaron utilizando formData y optimizando las llamadas fetch. Además, se utilizó Tailwind CSS, lo que implicó una curva de aprendizaje, pero se logró adaptar el diseño y hacerlo responsive.

   En cuanto a mejoras futuras, se plantean implementar un botón de previsualización para ver los posts completos antes de publicarlos, mejorar el rendimiento utilizando Vite y simplificar aún más el código. También se considera añadir una foto de fondo en el header y mejorar el diseño del menú de navegación para incluir una sección "about us" con scroll suave.

   ¡Espero que la disfrutéis mucho!