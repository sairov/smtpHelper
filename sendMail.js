//Declaramos las variables con los datos de entrada.

let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let mail = document.getElementById('mail');
let mensaje = document.getElementById('mensaje');

//Guardamos nuestro formulario en una constante

const form = document.getElementById('contacto');

//Invocamos un eventListener (evento en escucha) sobre el formulario y adentro le indicamos que debe hacer
  form.addEventListener('submit', (e) => { // la variable e hace referencia al evento por defecto del tipo submit
    
    // con esta declaración detenemos el evento por defecto del tipo submit
    e.preventDefault(); 
      
      //Invocamos a la función sendMail que declaramos abajo
      sendMail(nombre.value,apellido.value,mail.value,mensaje.value);

      //Blanqueamos los valores de nuestro formulario
      form.reset();
   });


//Declaramos la función para el envio del correo   
function sendMail(nombre, apellido, mail, mensaje) {
  Email.send({
      SecureToken : "tokendeseguridadgeneradopor la web", //Esto es necesario para configurar el acceso con permisos de seguridad del tipo SSL
      To : "correo de destino",
      From : "correo de origen", //tiene que ser el mismo que se usó para generar el secure token
      Subject : `${nombre} ${apellido} envió un mensaje desde la página`,
      Body : `<p>Nombre: <b>${nombre}</b></p>
              <p>Apellido: <b>${apellido}</b></p>
              <p>Email: <b>${mail}</b></p>
              <p>Mensaje: <b>${mensaje}</b></p>
              `
    }).then(
      message => swal("¡Correo enviado con Éxito!", "Gracias por tu consulta, en breve nos pondremos en contato.", "success")
      //utilizamos la libreria sweetAlert para darle un poco de color al mensaje de éxito
    )
    .catch(err => console.log('err: ', err)) //con esta función, en caso de haber un error, se imprime por la consola
  }


