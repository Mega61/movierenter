# MovieRent-WebApp
Prueba técnica para el proceso de selección del GrupoMok

Para la prueba en cuestión se planteo una solución utilizando 2 herramientas utilizadas en el ámbito profesional: **ReactJS y Spring Boot**
El front END de la aplicación se modelo en Adobe XD y fue transcrito en componentes de ReactJS utilizando JSX
![image](https://user-images.githubusercontent.com/73146750/125344706-3ce30600-e31d-11eb-8d2a-a3f8722a27f3.png)

Para el BackEnd se decicidió hacer una **API REST** con el framework de Spring Boot 

Para la Base de Datos se utilizó CLEAR-DB como servicio gratuito de host para hacer la base de datos accesible a cualquiera que descargará el proyecto

# Modelado de la base de datos
![Modelo E-R](https://user-images.githubusercontent.com/73146750/124999197-3c8ff580-e013-11eb-8ee3-d7abb0670f23.png)

Después de plantear el modelo Entidad-Relación se plantea el modelo Relaciónal:

**CLIENTE** (`id_cliente`, nombre, correo, contrasegna)

**PELÍCULA** (`id_pelicula`, titulo, descripción, categoria_única, disponibilidad)

**CLIENTE_RENTA_PELÍCULA** (`id_cliente`, `id_pelicula`, fecha_alquiler, fecha_devolución, precio)

=======================================================

## Normalización

**Primera Forma Normal**
:heavy_check_mark:

**Segunda Forma Normal**
Se hace el cambio del atributo *precio* a que dependa únicamente de la *llave primaria* de la relación **PELÍCULA**

**CLIENTE** (`id_cliente`, nombre, correo, contrasegna)

**PELÍCULA** (`id_pelicula`, titulo, descripción, categoria_única, disponibilidad, precio)

**CLIENTE_RENTA_PELÍCULA** (`id_cliente`, `id_pelicula`, fecha_alquiler, fecha_devolución)

**Tercera Forma Normal**
:heavy_check_mark:

=======================================================

## Tablas finales

| id_cliente    | nombre        | correo| contrasegna |
| ------------- |:-------------:| -----:| -----------:|

| id_película   | titulo        | descripción | categoria | disponibilidad | precio | 
| ------------- |:-------------:| ------------|----------:| --------------:| ------:|

| id_cliente    | id_pelicula   | fecha_alquiler | fecha_devolución |
| ------------- |:-------------:| --------------:| ----------------:|


##Ejecución

Para poder ejecutar este proyecto de forma local se debe abrir el proyecto en un IDE compatible con el framework de Spring Boot (STS, VS code, Eclipse, IntelliJ) y tener descargado node.js para poder ejecutar los comandos de *npm* o *yarn* 

Con el proyecto en un IDE se puede utilizar el comando *npm start* para iniciar el servicio de RactJs que se ejecutará en el http://localhost:3000/ y luego se puede ejecutar la API REST con el comando *mvn spring-boot:run* o directamente desde el IDE

La conexión con la base de datos se hace a partir del usuario y la contraseña maestra del ClearBD la cual esta montada en una pipeline de Heroku




