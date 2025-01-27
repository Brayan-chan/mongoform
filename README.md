## mongoform

Este es un ejemplo de como usar mongodb Atlas para crear una base de datos.

### Dependencias

A continuación se describen las dependencias utilizadas en este proyecto:

- **express**: Express es un servidor web.
- **mongodb**: MongoDB Atlas permite crear bases de datos en la nube.
- **mongoose**: Mongoose permite crear bases de datos en la nube.
- **dotenv**: Dotenv permite configurar variables de entorno.
- **morgan**: Morgan permite registrar las peticiones HTTP.
- **cors**: Cors se utiliza para permitir el acceso desde el navegador.


## Instalación

```bash
npm install --save express mongodb mongoose dotenv morgan cors
```

## Ejemplo

```bash
node app.js
```

## Forma simplificada

En el archivo package.json se puede agregar un script adicional para ejecutar el servidor:

```json
"scripts": {
    "start": "node app.js"
}
```

```bash
npm start
```