# TP Final: Criptografia y Seguridad Informatica

## Integrantes (Grupo 9)

- Bellaera, Leonardo
- Penna, Sebastian
- Torraca, Facundo

## Como correr el proyecto

1. Instalar el gestor de dependencias de node `npm` (en Ubuntu hacerlo corriendo en la terminal `sudo apt update && sudo apt install nodejs && sudo apt install npm)`.
2. Instale las dependencias del proyecto corriendo `npm i` en el directorio raiz del proyecto.
3. Correr `cd ./src && cp .env.dist .env` en el directorio raiz del proyecto.
4. El paso anterior nos generara un archivo `.env` en nuestro directorio `src`. En ese archivo debemos editar los campos `CLIENT_ID` y `CLIENT_SECRET` con las credenciales obtenidas mediante el registro de nuestra app en GitHub. Para obtener nuestras credenciales de GitHub OAuth; ingresando a https://github.com/settings/developers podemos registrar facilmente nuestra app:
	1. Completar el campo `Application Name` del formulario con el nombre deseado para registrar nuestra app.
	2. Completar el campo `Homepage URL` con la URL `http://localhost:<PORT>` (En caso de no haber modificado la variable de entorno PORT en el archivo `env`, reemplazar `<PORT>` por `8083`).
	3. Completar el campo `Authorization callback URL` con la URL `http://localhost:<PORT>/oauth/redirect` (En caso de no haber modificado la variable de entorno PORT en el archivo `env`, reemplazar `<PORT>` por `8083`).
5. Correr `cd .. && npm start`
6. Por ultimo, ingresar a la URL `http:localhost:<PORT>/login` (En caso de no haber modificado la variable de entorno PORT en el archivo `env`, reemplazar `<PORT>` por `8083`).
