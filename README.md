# Chat Front

App para la demo de Chat.

## Instalación

Se requiere Node.js para instalar la App, de preferencia en su versión 12 o superior.

```bash
npm install

```

Después de instalar la App, podemos iniciar la aplicación con el comando:

```bash
npm start
```

## Usage
Agregar la configuracion de firebase en config/Firebase.js, o agregar su archivo .en en la raíz

```js
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
```



## License
[MIT](https://choosealicense.com/licenses/mit/)
