Movie Fricks
Introducción
    Movie Fricks es una página web que se realizó con el objetivo de que la personas puedan ver y comentar sobre las películas que han visto, dejando su reseña y su punto de vista sobre la cinematográfica. Actualmente Movie Fricks no cuenta con la reproducción de películas, pero deja un trailer de la misma y la posibilidad de hacer reseñas.  Una de las ideas futuras sobre esta aplicación es agregar la posibilidad de ver las películas en la plataforma.

Herramientas:
    Para la realización de la app se utilizó React, Redux, Tailwind, CSS, Framer  y Firebase(base de datos). 
    Sobre la parte realizada en React se utilizó sobre todo ,el hook que brinda el framework, Use Context y createContext. Este contexto se usó de forma global para toda la aplicación y la gran mayoría de la funcionalidad se colocó ahí para poder usarla en cualquier sección que se necesitará.
    Con Redux se utilizó la función de reducer que es una función que recibe dos parámetros, el estado inicial y una acción y dependiendo del tipo de acción realizará una operación u otra en el estado. Estos reducers se colocan en un Store que es un objeto que mantiene el árbol de estado de la aplicación(Al igual que el Contexto de React). La utilización de redux nos facilitó tanto el acceso a la base de datos realizada en Firebase(sea para tomar datos o crearlos ), como para la autenticación de usuarios y registro.
    Luego la parte visual y estética de la aplicación se hizo en mayor parte con Tailwind, un framework de CSS que nos permite aplicar estilos sobre el código de una manera ágil y rápida. También se utilizó CSS para algunas cosas a los mismo que Framer para algunas animaciones.

Modo de Uso de Movie Fricks

Página de Inicio:
    Al ingresar a la aplicación se encuentra la página de inicio donde se puede ver un navegador con tres buscadores, uno por categorías , otro por nombre y finalmente otro por año. Cualquiera de estos tres mostrarán las películas que cumplan con las condiciones que se implementan en cada filtro. Luego se verá a la derecha de los buscadores, un botón de login, mediante el cual se puede ingresar a la sección de login. En la página principal se puede realizar click sobre las cartas de las películas y estas desplegará la información de esa película en otra sección.Sin embargo solo se dará acceso a la información a las personas que estén registradas, en el caso de no estar registrada saldrá una mensaje en forma de Alert() que dirá “Por favor registrate o logueate para ver más datos de la Película” y lo redireccionará a la página de login. 

Login y Registro:
    Una vez en la página de login el usuario puede ingresar a la aplicación si ya tiene un usuario y contraseña, de lo contrario tendrá que registrarse, esta opción estará disponible en la parte inferior del formulario con un link al registro. Dentro del registro habrá un formulario idéntico al del ingreso pero este tiene la función de guardar el usuario y su contraseña en la base de datos en Firebase. 
    Una vez registrado o logueado, la barra de navegación quitara el botón de login y desplegará otros dos, uno con el mail de usuario y el otro para salir cerrar sesión.
    Otra funcionalidad que se encuentra en esta sección es la de reconocer si el usuario es administrador de la aplicación en cuyo caso se mostrará un tercer botón/link que nos llevará a un menú de edición que nos permitirá borrar y crear películas.

Menú de Edición:
    Dentro de este menú se puede  observar a la izquierda, las mismas opciones de películas que se observaron en la pagina principal, pero con una diferencia tienen un botón en la parte inferior para eliminarlos, este tomaría esta película por su id y la eliminaría de la base de datos en firebase.
    Por otro lado a la derecha se tiene un formulario para crear películas que tiene distintos inputs como nombre, descripción, id, duración, año, URL de la imagen, género y trailer. Estos datos al dar click en “Guardar Película” se guardarán en la base de datos de Firebase como una nueva película.

Sección donde se muestra la película seleccionada:
    Cuando damos click  sobre una película en la página principal esta no lleva a otra ruta donde se puede ver la información de la película como el nombre, el género, la descripción, la duración de la película  y rating. Luego más abajo se podrá encontrar el trailer de la película y finalmente al final una sección de comentarios donde el usuario logueado puede dejar una reseña  de la película y una puntuación en estrellas de 1 a 5. Esta última sección toma el mensaje y la puntuación ingresada y la coloca en la base de datos dentro de la misma ubicación de la película para que sea guardada junto a esta.
    Luego de ingresar la reseña y la puntuación los mensajes se imprimen abajo mostrando quien escribió la reseña , la reseña y la puntuación. La puntuación se guarda en una array y luego se suman para hacer un promedio de todas las puntuaciones de todos los usuarios para lograr tener un ranking exacto de la película.

Responsive Design:
Esta página es totalmente responsive teniendo en cuenta las siguientes medidas de wide 360px(mobile),640px,768px,1024px,1280px y 1536px
