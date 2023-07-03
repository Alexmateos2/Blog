-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-07-2023 a las 15:55:53
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blog`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) NOT NULL,
  `titulo` varchar(220) NOT NULL,
  `contenido` text NOT NULL,
  `imagen` varchar(100) NOT NULL DEFAULT 'logo512.png',
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `titulo`, `contenido`, `imagen`, `fecha`) VALUES
(55, 'Cómo hacer tortitas al estilo japonés: una delicia esponjosa', 'Las tortitas al estilo japonés, también conocidas como \"panqueques japoneses\" o \"hotcakes japoneses\", se han vuelto muy populares en todo el mundo debido a su textura increíblemente esponjosa y su sabor delicioso. Si estás buscando sorprender a tus seres queridos con un desayuno o merienda especial, ¡no busques más! A continuación, te enseñaremos cómo hacer estas irresistibles tortitas japonesas en tu propia cocina.\r\n\r\nIngredientes:\r\n\r\n3 huevos\r\n5 cucharadas de azúcar\r\n1/2 taza de leche\r\n1 cucharadita de esencia de vainilla\r\n1 taza de harina de trigo\r\n1 cucharadita de levadura en polvo\r\nAceite vegetal para engrasar la sartén\r\nInstrucciones:\r\n\r\nEn un tazón grande, separa las claras de las yemas de los huevos. Reserva las claras y coloca las yemas en otro recipiente.\r\n\r\nAgrega el azúcar a las yemas y bátelas con un batidor manual o eléctrico hasta obtener una mezcla suave y espumosa.\r\n\r\nIncorpora la leche y la esencia de vainilla a la mezcla de yemas y azúcar. Mezcla bien todos los ingredientes.\r\n\r\nTamiza la harina de trigo y la levadura en polvo sobre la mezcla líquida. Mezcla suavemente con una espátula hasta obtener una masa homogénea. Es importante no batir demasiado la masa para mantenerla ligera y esponjosa.\r\n\r\nEn otro tazón limpio, bate las claras de huevo hasta que se formen picos suaves. Esto se logra cuando las claras se vuelven blancas y espumosas, y al levantar el batidor, se forman picos que se mantienen pero no son demasiado firmes.\r\n\r\nAgrega las claras batidas a la masa de yemas y harina. Dobla suavemente las claras en la masa con movimientos envolventes para incorporarlas sin perder volumen.\r\n\r\nCalienta una sartén antiadherente a fuego medio-bajo y engrásala ligeramente con aceite vegetal. Vierte aproximadamente 1/4 de taza de masa en la sartén caliente para formar cada tortita.\r\n\r\nCocina las tortitas hasta que aparezcan pequeñas burbujas en la superficie y los bordes se vean ligeramente dorados. Luego, con cuidado, dale la vuelta a cada tortita y cocínalas por el otro lado hasta que estén doradas y bien cocidas.\r\n\r\nRetira las tortitas del fuego y colócalas en un plato. Puedes apilarlas una encima de otra para mantenerlas calientes mientras cocinas el resto de la masa.\r\n\r\nSirve las tortitas al estilo japonés calientes, acompañadas de tu elección de sirope, frutas frescas, crema batida o cualquier otro topping que desees.\r\n\r\nEstas tortitas al estilo japonés son una delicia esponjosa que seguramente te encantará!', '1688317361728-tortitas.jpeg', '2023-07-02 19:02:41'),
(56, 'Ideas cozy para decorar tu setup gamer', 'El mundo de los videojuegos es emocionante y lleno de aventuras, y qué mejor manera de sumergirte en él que teniendo un setup gamer acogedor y personalizado. Si quieres convertir tu espacio de juego en un lugar cómodo y agradable, aquí te presentamos algunas ideas para decorar tu setup gamer de estilo cozy.\r\n\r\nIluminación ambiental cálida: Agrega luces LED en tonos cálidos alrededor de tu escritorio o detrás de tu monitor. Esto creará una atmósfera acogedora y relajante, perfecta para largas sesiones de juego.\r\n\r\nAlmohadones y cojines: Añade almohadones y cojines suaves y cómodos a tu silla de juego. Opta por colores y diseños que reflejen tu estilo personal y combinen con la temática de tu setup.\r\n\r\nElementos naturales: Incluye plantas pequeñas en macetas para agregar un toque de naturaleza a tu espacio de juego. Las plantas no solo añaden frescura y color, sino que también ayudan a crear un ambiente relajante.\r\n\r\nAcolchados y mantas: Coloca una manta suave y acogedora sobre tu silla o al alcance de tus manos. Te mantendrá abrigado durante las sesiones de juego y le dará un aspecto más acogedor a tu setup.\r\n\r\nEstantes y organizadores: Utiliza estantes o cajas decorativas para mantener tus accesorios de juego ordenados y al alcance fácil. Esto no solo mejorará la apariencia visual de tu setup, sino que también te ayudará a tener todo organizado.\r\n\r\nDecoración temática: Si tienes un juego favorito o una temática específica, incorpora elementos decorativos relacionados. Pueden ser pósters, figuras de acción, peluches u otros objetos que reflejen tu pasión por ese juego o temática.\r\n\r\nTapetes o alfombras: Coloca un tapete o alfombra cómoda debajo de tu escritorio para agregar calidez y comodidad a tu setup. Además, también puede ayudar a reducir el ruido y proteger el suelo.\r\n\r\nCortinas o paneles: Si es posible, coloca cortinas o paneles decorativos alrededor de tu espacio de juego. Esto no solo le dará un toque acogedor, sino que también ayudará a controlar la iluminación exterior y crear un ambiente más inmersivo.\r\n\r\nRecuerda que la decoración de tu setup gamer debe reflejar tu personalidad y gustos. ¡Diviértete creando tu espacio de juego acogedor y conviértelo en el lugar perfecto para disfrutar de tus videojuegos favoritos!', '1688317617624-setupgamer.jpeg', '2023-07-02 19:06:57'),
(57, 'Consejos para comenzar en el mundo de la programación', 'Si estás interesado en adentrarte en el apasionante mundo de la programación, estás tomando un gran paso hacia el aprendizaje de una habilidad invaluable. Aquí te presentamos algunos consejos para ayudarte a iniciar tu viaje en el mundo de la programación:\r\n\r\nDefine tus metas y motivación: Antes de empezar, establece tus metas y motivación para aprender a programar. ¿Qué te impulsa a querer aprender? ¿Qué tipo de proyectos o aplicaciones te gustaría crear? Tener una visión clara te ayudará a mantenerte enfocado y motivado durante tu proceso de aprendizaje.\r\n\r\nElige un lenguaje de programación: Existen numerosos lenguajes de programación, cada uno con sus propias ventajas y aplicaciones. Investiga y elige un lenguaje que se adapte a tus intereses y objetivos. Algunas opciones populares incluyen Python, JavaScript y Java.\r\n\r\nAprende los conceptos básicos: Comienza por entender los conceptos fundamentales de la programación, como variables, condicionales, bucles y funciones. Familiarízate con la lógica de programación y cómo se estructuran los programas.\r\n\r\nUtiliza recursos de aprendizaje en línea: Hay una gran cantidad de recursos gratuitos en línea, como tutoriales, cursos y documentación, que te ayudarán a aprender a programar. Plataformas como Codecademy, FreeCodeCamp y Udemy son excelentes opciones para comenzar.\r\n\r\nPractica con proyectos pequeños: Una vez que tengas los conceptos básicos, empieza a aplicarlos en proyectos pequeños. Trabaja en ejercicios prácticos y construye aplicaciones simples para fortalecer tus habilidades y comprensión.\r\n\r\nÚnete a comunidades y foros: Participar en comunidades en línea y foros de programación te permitirá conectarte con otros estudiantes y profesionales. Podrás hacer preguntas, obtener consejos y compartir tus experiencias.\r\n\r\nDesarrolla un enfoque de resolución de problemas: La programación se basa en la resolución de problemas. Aprende a descomponer problemas complejos en pasos más pequeños y a abordarlos de manera sistemática. Practicar la resolución de problemas te ayudará a mejorar tus habilidades como programador.\r\n\r\nNo temas cometer errores: Los errores son parte natural del proceso de aprendizaje. No te desanimes cuando enfrentes desafíos o cometas errores. Aprende de ellos, busca soluciones y continúa adelante.\r\n\r\nRecuerda que la programación es un proceso continuo de aprendizaje y práctica. Dedica tiempo regularmente a estudiar y practicar, y verás cómo mejoras con el tiempo. ¡Disfruta de tu viaje en el mundo de la programación y descubre las infinitas posibilidades que te esperan!', '1688317794378-progamador.jpg', '2023-07-02 19:09:54'),
(58, 'Descubre los 10 mejores chiringuitos de playa en Asturias', 'Asturias, conocida por su impresionante belleza natural y sus playas vírgenes, alberga una variedad de chiringuitos que te permitirán disfrutar de deliciosos platos locales mientras te relajas junto al mar. Aquí te presentamos los 10 mejores chiringuitos de playa en Asturias:\r\n\r\nPlaya de San Lorenzo - Sidrería La Galana: Ubicado en la emblemática Playa de San Lorenzo en Gijón, La Galana ofrece una amplia selección de sidras asturianas y platos tradicionales, como la fabada y el cachopo.\r\n\r\nPlaya de Rodiles - Chiringuito El Espartal: Situado en la hermosa Playa de Rodiles, este chiringuito destaca por sus mariscos frescos y su ambiente acogedor. Prueba su pulpo a la brasa y déjate sorprender.\r\n\r\nPlaya de La Griega - Chiringuito El Dorado: Con unas vistas impresionantes al mar Cantábrico, El Dorado ofrece una excelente variedad de pescados y mariscos frescos. No te pierdas su caldereta de mariscos.\r\n\r\nPlaya de Santa Marina - Chiringuito La Ballera: Disfruta de una auténtica experiencia gastronómica asturiana en La Ballera, donde podrás probar platos típicos como la tortilla de bacalao y los chipirones en su tinta.\r\n\r\nPlaya de La Ñora - Chiringuito La Escollera: Con una ubicación privilegiada en la tranquila Playa de La Ñora, La Escollera ofrece una selección de platos caseros y mariscos frescos. Prueba sus centollos y disfruta de la vista.\r\n\r\nPlaya de Aguilar - Chiringuito El Paraíso: Este encantador chiringuito en la Playa de Aguilar te sorprenderá con su ambiente relajado y sus deliciosos platos de marisco. No te pierdas su arroz con bogavante.\r\n\r\nPlaya de La Franca - Chiringuito Bahía: Situado en una de las playas más hermosas de Asturias, el Chiringuito Bahía ofrece una variedad de platos tradicionales, destacando sus pescados a la parrilla y su paella.\r\n\r\nPlaya de Gulpiyuri - Chiringuito Los Toneles: Disfruta de la playa de Gulpiyuri en Llanes y haz una parada en Los Toneles para degustar sus especialidades, como las sardinas a la parrilla y las empanadas caseras.\r\n\r\nPlaya de Toró - Chiringuito La Escalerona: Con vistas panorámicas a la Playa de Toró en Llanes, La Escalerona ofrece una amplia variedad de platos tradicionales asturianos, como la fabada y el pixín (rape) en salsa de sidra.\r\n\r\nPlaya de Peñarronda - Chiringuito Los Caracoles: Enclavado en la hermosa Playa de Peñarronda, Los Caracoles es conocido por sus platos de mariscos frescos y su ambiente relajado. Prueba sus almejas a la marinera y su pulpo a la gallega.\r\n\r\nEstos son solo algunos de los mejores chiringuitos de playa en Asturias. Explora la costa asturiana y déjate deleitar por la gastronomía local mientras disfrutas de las impresionantes vistas al mar. ¡Una experiencia culinaria que no querrás perderte!', '1688317918726-Chiringuito.jpeg', '2023-07-02 19:11:58'),
(59, 'Descubriendo la magia de Italia en coche', '¡Hola viajeros! Hoy quiero compartir con ustedes mi experiencia recorriendo Italia en coche. Italia es un país lleno de historia, cultura y belleza natural, y la mejor manera de explorarlo a fondo es aventurarse en un viaje por carretera. Acompáñenme mientras les cuento sobre algunas de las rutas más impresionantes que recorrí durante mi viaje.\r\n\r\nComencé mi aventura en la hermosa ciudad de Roma. Desde allí, me dirigí hacia el norte, hacia la región de la Toscana. Conducir por las carreteras sinuosas y rodeadas de viñedos fue una experiencia mágica. Hice paradas en ciudades encantadoras como Florencia, donde pude maravillarme con su arquitectura renacentista y disfrutar de su deliciosa gastronomía.\r\n\r\nContinué mi camino hacia la región de la Liguria, famosa por sus pintorescos pueblos costeros conocidos como las Cinque Terre. Recorrer estos pueblos coloridos y disfrutar de las impresionantes vistas al mar Mediterráneo fue simplemente asombroso. No puedo dejar de mencionar la deliciosa comida que probé en cada parada, desde los mariscos frescos hasta la auténtica pasta italiana.\r\n\r\nMi siguiente parada fue la región de la Toscana, donde descubrí paisajes de ensueño. Conducir por los caminos serpenteantes de la región fue como estar inmerso en una postal. Visité ciudades medievales como Siena y San Gimignano, donde pude admirar sus imponentes torres y perderme en sus estrechas calles empedradas.\r\n\r\nEl viaje continuó hacia el norte, hacia la región de los lagos italianos. Los lagos Como, Maggiore y Garda me recibieron con sus aguas cristalinas y entornos naturales exuberantes. Disfruté de un paseo en barco por el Lago Como, visité villas históricas y saboreé la cocina local en encantadores restaurantes junto al agua.\r\n\r\nMi última parada fue la romántica ciudad de Venecia. Aparqué el coche y me sumergí en las estrechas calles y los canales de la ciudad. Navegar en góndola por los canales y explorar los rincones escondidos de Venecia fue una experiencia única.\r\n\r\nMi viaje por Italia en coche fue una aventura inolvidable. Cada región tenía su encanto y su propia historia que contar. Recorrer el país a mi propio ritmo me permitió descubrir lugares fuera de los circuitos turísticos habituales y sumergirme en la auténtica vida italiana.\r\n\r\nSi están pensando en visitar Italia, les recomiendo encarecidamente que consideren hacerlo en coche. La libertad y la flexibilidad que ofrece esta forma de viajar son incomparables. ¡Prepárense para sumergirse en la belleza y la cultura de Italia en cada kilómetro recorrido!\r\n\r\nEspero que este relato haya despertado su curiosidad y los haya transportado a la bella Italia. ¡Hasta la próxima aventura viajera!', '1688318062859-italia.jpeg', '2023-07-02 19:14:22'),
(60, 'Gatos famosos en librerías: Un mundo lleno de ternura', '¿Sabías que hay librerías en el mundo que son famosas por tener gatos como parte de su encanto? Estos adorables felinos han encontrado un hogar entre los estantes de libros, y se han convertido en una atracción para los amantes de los libros y los amantes de los gatos por igual.\r\n\r\nEn Japón, la librería \"Gotokuji Temple\" en Tokio es famosa por sus maneki-nekos, también conocidos como gatos de la suerte. Los clientes son recibidos por una colonia de gatos de cerámica que adornan la entrada, y una vez dentro, son bienvenidos por los gatos reales que deambulan libremente entre los libros.\r\n\r\nLa librería \"El Ateneo Grand Splendid\" en Buenos Aires, Argentin, es otra joya para los amantes de los gatos. Ubicada en un antiguo teatro, esta librería alberga a varios gatos que disfrutan acurrucarse en los rincones de lectura y compartir el amor por los libros con los visitantes.\r\n\r\nEn Estados Unidos, la librería \"Strand Bookstore\" en Nueva York es conocida por sus adorables gatos. Los felinos aquí tienen su propia cuenta de Instagram y son considerados celebridades en el mundo literario de la ciudad.\r\n\r\nEn Escocia, la librería \"Tales on Moon Lane\" en Edimburgo se destaca por su ambiente acogedor y su mascota, un gato amigable que recibe a los visitantes con su cariño.\r\n\r\nEstos son solo algunos ejemplos de las librerías en todo el mundo que han sido conquistadas por la presencia de gatos. Estos adorables compañeros peludos no solo agregan un toque de ternura y calidez al ambiente, sino que también brindan una sensación de calma y tranquilidad que hace que la experiencia de navegar por los libros sea aún más especial.\r\n\r\nSi eres un amante de los libros y los gatos, te animo a que visites alguna de estas librerías y te sumerjas en la magia de la lectura rodeado de la dulce compañía de estos gatos famosos. ¡Es una experiencia que no olvidarás!', '1688350346985-gato libreria.jpeg', '2023-07-02 19:19:08');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;