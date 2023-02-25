# Base sobre la que se construye la aplicación dentro del contenedor
FROM openjdk:17
EXPOSE 8081

# Copia el .jar que generamos en Docker
ADD target/agendaback-0.0.1.jar agenda.jar

# Provee de valores por defecto a nuestro contenedor
# Podemos definir una serie de comandos que solo se ejecutarán una vez que el contenedor se ha inicializado
ENTRYPOINT ["java", "-jar", "/agenda.jar"]