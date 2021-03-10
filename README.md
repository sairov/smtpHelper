# smtpHelper

Configuración básica para envio de correo mendiante libreria SMTP.js

## Estructura de ejemplo sobre como configurar el envío de correos eléctronicos a través de formularios mediante la libreria SMTP.js

### Ventajas:

- SMTP JS está basado enteramente en Javascript lo cual evita tener que agregar tecnologías como PHP únicamente para contar con la función de mailer bajo el protocolo SMTP.
- Es una librería liviana y simple de implementar.
- No es necesario contectar a una Base de Datos, aunque si es posible hacerlo en caso de querer guardar la información recibida.
- Cuenta con una opción para generar un Token con las claves de acceso al correo y así abstraer la información personal (Recomendado)

### Consideraciones

Como fuera comentado en las ventajas, se recomienda configurar las claves de acceso generando un TOKEN específico a fin de no exponer la información personal del correo remitente.

Adicionalmente, se puede guardar el Token en una variable de entorno y de esta manera cubrir las brechas de seguridad sobre la exposición de la información en su totalidad.

Finalmente, esta libreria no evitar tener que realizar las validaciones de formulario correspondientes, lo cual es altamente recomendado sobre todo si los datos recibidos seran guardados en una Base de Datos.

