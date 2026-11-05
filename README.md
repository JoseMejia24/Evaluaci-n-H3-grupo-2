# Sistema de Renta de Videos - MongoDB

Este repositorio contiene la entrega de la actividad práctica para la gestión y consulta de un sistema de renta de videos utilizando **MongoDB**.

## Estructura del Proyecto

El repositorio está organizado de la siguiente manera:
* `seed.js`: Script de inicialización que limpia bases de datos previas, genera la estructura de colecciones e inserta registros de prueba.
* `queries.js`: Script automatizado con las consultas requeridas por la actividad.
* `assets/`: Carpeta que almacena las evidencias gráficas del funcionamiento del sistema.

---
# Sistema de Renta de Videos - MongoDB

Este repositorio contiene la entrega de la actividad práctica para la gestión y consulta de un sistema de renta de videos utilizando **MongoDB**.

## Estructura del Proyecto

El repositorio está organizado de la siguiente manera:
* `seed.js`: Script de inicialización que limpia bases de datos previas, genera la estructura de colecciones e inserta registros de prueba.
* `queries.js`: Script automatizado con las consultas requeridas por la actividad.
* `assets/`: Carpeta que almacena las evidencias gráficas del funcionamiento del sistema.

---
## Evidencias de Funcionamiento
### 1. Creación e Inserción de Datos Iniciales
A continuación se muestra el resultado tras la ejecución del script `seed.js`, poblando exitosamente la base de datos `ddbb_renta_de_videos`:

![Evidencia de Creación de Datos](assets/Captura%20de%20pantalla%20(135).png)

### 2. Ejecución de Consultas Requeridas
Resultados obtenidos en la consola de MongoDB al correr el script `queries.js` (Búsqueda de categorías específicas y estados de renta activos):

![Evidencia de Consultas Realizadas](assets/Captura%20de%20pantalla%20(136).png)
---
## Instrucciones de Uso

Para replicar este entorno de manera local, ejecute los siguientes comandos en su terminal con `mongosh` activo:

1. Poblar la base de datos:
   ```bash
   mongosh < seed.js
   ```
2. Ejecutar las consultas analíticas:
   ```bash
   mongosh < queries.js
   ```
---
## Instrucciones de Uso

Para replicar este entorno de manera local, ejecute los siguientes comandos en su terminal con `mongosh` activo:

1. Poblar la base de datos:
   ```bash
   mongosh < seed.js
   ```
2. Ejecutar las consultas analíticas:
   ```bash
   mongosh < queries.js
   ```
