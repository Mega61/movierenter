# MovieRent-WebApp
Prueba técnica para el proceso de selección del GrupoMok

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




