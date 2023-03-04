# diu-agenda-react

El back se ha subido a AWS, utilizando __elastic beanstalk__. Para ello, una vez hemos entrado en el Learner Lab y hemos seleccionado dicha opción, he seguido los siguientes pasos:

1. He seleccionado 'Aplicaciones' de la columna de la izquierda y pulsado sobre 'Crear nueva aplicación'.
2. De plataformas he elegido 'Docker'.
3. En la parte inferior, he seleccionado 'Configurar más opciones'. Y en la nueva ventana, me he ido a 'editar seguridad' donde he seleccionado estas tres opciones (en este orden): LabRole, vockey, LabInstanceProfile.
4. Se pincha sobre 'Crear una aplicación' y se espera a que se cree el nuevo entorno, asociado a dicha aplicación.
5. Por último, se pincha sobre 'Aplicaciones' de nuevo, luego sobre el nombre que se le haya puesto a la aplicación (en este caso _agenda_) y sobre 'Versiones de la aplicación'.
6. Se le da a 'cargar', se selecciona el archivo _docker-compose.yml_ y de nuevo en 'cargar'. O bien se puede hacer directamente desde el entorno, dándole a 'cargar e implementar' y seleccionando el archivo _docker-compose.yml_ igual que antes.

Entonces saldrá algo parecido a la siguiente imagen, con el estado en verde (si está todo OK), en naranja como es mi caso (si hay algún _warning_) o en rojo (si hay algún error).

![image](https://user-images.githubusercontent.com/98974760/222920389-7d3fa542-350c-4bb0-8abd-07bc1bd8710e.png)
