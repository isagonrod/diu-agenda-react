# AGENDA DE ISA GONZÁLEZ

## ÍNDICE
1. [Casos de uso expuestos en el enunciado](https://github.com/isagonrod/diu-agenda-react/edit/main/README.md#casos-de-uso)
2. [URLs de los servicios](https://github.com/isagonrod/diu-agenda-react/edit/main/README.md#urls-de-los-servicios)
3. [Front-End](https://github.com/isagonrod/diu-agenda-react/edit/main/README.md#front-end)
4. [Back-End](https://github.com/isagonrod/diu-agenda-react/edit/main/README.md#back-end)
5. [Pruebas con Postman](https://github.com/isagonrod/diu-agenda-react/edit/main/README.md#pruebas-con-postman)
6. [Pruebas con Jenkins](https://github.com/isagonrod/diu-agenda-react/edit/main/README.md#pruebas-con-jenkings)

![image](https://cdn-icons-png.flaticon.com/512/6313/6313619.png)


## CASOS DE USO
1. La aplicación debe incluir un apartado de login para administradores. Sólo el administrador podrá modificar la agenda (añadir, editar y/o eliminar). El resto de usuarios (no logueados) sólo podrán consultar. Incluir también una opción de 'logout'. Mientras el usuario no haga el logout la aplicación debe mantener la sesión. Es decir, si se cierra el navegador y se vuelve a abrir, si el usuario estaba logueado, deberá seguir estándolo. Cuando un administrador esté logueado, tanto su nombre de usuario como su foto de perfil deberán ser visibles en todo momento, en alguna parte de la página.
2. En la pantalla principal tendrá una barra de progreso indicando el numero de contactos totales, sobre 50. Esto será gestionado desde el cliente.
3. Se deben comprobar los campos de los formularios, es decir, si se pide un número, debemos asegurarnos de que el usuario introduce un número.


## URLs DE LOS SERVICIOS
- [Front-end](https://agenda-isagonzalez.web.app)
- [Back-end](http://agenda.us-east-1.elasticbeanstalk.com/contact)


## FRONT-END

El __FRONT__ de la AGENDA se ha subido a Firebase, tanto para poder acceder a la aplicación desde cualquier dispositivo sin necesidad de disponer del código fuente y hacer el ``npm install`` o el ``npm start`` para usarla en local, como para hacer uno de una de las funcionalidades que ofrece la plataforma. Dicha funcionalidad es la de implimentar una base de datos de usuarios que puedan acceder al contenido o a algunas funcionalidades de la aplicación, también llamada 'atenticación' o 'login'.

Una vez implementado el formulario de 'login' en la barra de navegación, el cual servirá para que, cuando un usuario no esté logueado solo pueda ver la lista de contactos de la agenda, y cuando inicie sesión, además de ver la lista de contactos, pueda añadir más, editar los existentes o incluso borrarlos.

En cuanto al aspecto visual de la aplicación, antes de iniciar sesión, solo se ve la barra de navegación superior con el logo y el botón __Agenda__ (que hace las veces de 'HOME'), en la parte central de la página se ve la lista de contactos guardados en la base de datos, y en la parte inferior (el _footer_) se ve el pie de página y una barra de progreso que marca cuánto de llena está la agenda, teniendo en cuenta que el número máximo de contactos el 50. 

Una vez iniciada la sesión dicho aspecto visual será parecido al anterior, pero como algunas variaciones:
- En la barra de navegación ya no aparece un formulario sino un saludo al usuario conectado junto con su avatar y un botón para cerrar sesión.
- En la parte central, la tabla de contactos se amplía con una nueva columna donde aparecen dos botones por contacto: uno para editar el contacto y otro para borrarlo.
- El _footer_ es lo único que se mantiene sin cambios.

![image](https://user-images.githubusercontent.com/98974760/222920925-0d1a4b82-b172-4ee3-942d-e9d52aa5cfaa.png)


## BACK-END

El __BACK__ de la AGENDA se ha subido a AWS, utilizando __elastic beanstalk__. Para ello, una vez hemos entrado en el Learner Lab y hemos seleccionado dicha opción, he seguido los siguientes pasos:

1. He seleccionado 'Aplicaciones' de la columna de la izquierda y pulsado sobre 'Crear nueva aplicación'.
2. De plataformas he elegido 'Docker'.
3. En la parte inferior, he seleccionado 'Configurar más opciones'. Y en la nueva ventana, me he ido a 'editar seguridad' donde he seleccionado estas tres opciones (en este orden): LabRole, vockey, LabInstanceProfile.
4. Se pincha sobre 'Crear una aplicación' y se espera a que se cree el nuevo entorno, asociado a dicha aplicación.
5. Por último, se pincha sobre 'Aplicaciones' de nuevo, luego sobre el nombre que se le haya puesto a la aplicación (en este caso _agenda_) y sobre 'Versiones de la aplicación'.
6. Se le da a 'cargar', se selecciona el archivo _docker-compose.yml_ y de nuevo en 'cargar'. O bien se puede hacer directamente desde el entorno, dándole a 'cargar e implementar' y seleccionando el archivo _docker-compose.yml_ igual que antes.

Entonces saldrá algo parecido a la siguiente imagen, con el estado en verde (si está todo OK), en naranja como es mi caso (si hay algún _warning_) o en rojo (si hay algún error).

![image](https://user-images.githubusercontent.com/98974760/222920389-7d3fa542-350c-4bb0-8abd-07bc1bd8710e.png)

Existe un problema con desplegar el back en esta plataforma, y es que si no está activo el servidor, el back no va a estar en funcionamiento y la aplicación de agenda no va a funcionar. En este caso solo funcionará el login, ya que está implementado en Firebase directamente, pero el resto de funcionalidades no estarán disponibles. Para que vuelva a funcionar, hay que volver a iniciar el servidor de Amazon y reiniciar el entorno, con el problema de que se resetea todo (incluyendo la base de datos y no guarda ningún contacto).

## PRUEBAS CON POSTMAN
A continuación se muestra una serie de pantallazos con las pruebas unitarias realizadas en __Postman__ de todas las funciones implementadas en el back de la agenda, una vez subido el microservicio a AWS. En local funcionan de igual forma, solo que en la URL habría que poner _localhost_ en lugar de la url generada por Amazon.

### Crear nuevo contacto
![image](https://user-images.githubusercontent.com/98974760/222924927-dc141059-b3af-4839-be52-d18d7e5f2f13.png)

### Listar todos los contactos
![image](https://user-images.githubusercontent.com/98974760/222924976-c49a5d1b-7163-4edc-9bd7-4b9e0f0463a0.png)

### Encontrar un contacto por ID
![image](https://user-images.githubusercontent.com/98974760/222924998-41079f79-39d8-4f78-8eac-b0b2e9ace06f.png)

### Editar un contacto por ID
![image](https://user-images.githubusercontent.com/98974760/222925041-fc97d1e3-30cc-4b5d-b3c1-6a1094e67259.png)

### Eliminar un contacto por ID
![image](https://user-images.githubusercontent.com/98974760/222925054-d61c1f16-3c27-4e4b-b7c7-f4c5df09a138.png)


## PRUEBAS CON JENKINGS
