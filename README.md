# APIRESTcrud + INFORME DE RESULTADOS

Proyecto de ejemplo que implementa una API REST con Node.js, Express y Sequelize.
Incluye operaciones CRUD para las entidades Usuario, Rol, Permiso, Grupo y Sesion
utilizando PostgreSQL como base de datos y Postman para la prueba de la API REST.

## Uso

1. Instalar dependencias (se requiere conexión a internet):
   ```bash
   npm install
   ```
2. Configurar la variable `DB_URI` con la cadena de conexión a PostgreSQL y `JWT_SECRET` para las firmas de tokens.
3. Ejecutar la aplicación:
   ```bash
   node seed.js
   npm start
   ```

La aplicación expone rutas bajo `/api` para cada entidad y una plantilla de inicio en `/`.


# INFORME
[Informe de resultados de API REST.pdf](https://github.com/user-attachments/files/21326942/Informe.de.resultados.de.API.REST.pdf)
