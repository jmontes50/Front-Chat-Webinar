import React, { useState, useEffect, useContext, Fragment } from "react";
import io from "socket.io-client";
import { AuthContext } from "../context/authContext";
import Chat from "../components/Chat";
import { ordenarMensajes } from "../utils/utilsMensajes";
import { Redirect } from "react-router-dom";

const ENDPOINT = process.env.REACT_APP_ENDPOINT;
let socket;

function MainView() {
  const [mensajes, setMensajes] = useState([]);
  const [redireccionar, setRedireccionar] = useState(null);
  const { userState } = useContext(AuthContext);

  const iniciarConexionSockets = () => {
    if (userState !== null) {
      socket = io(ENDPOINT);
      socket.emit("login", { usuario_correo: userState.email });
      mandarMensaje(`${userState.displayName} se ha unido!`);
    }
  };

  const mandarMensaje = (mensaje) => {
    socket.emit("crear-mensaje", {
      usuario_correo: userState.email,
      mensaje: mensaje,
      room: mensaje,
    });
  };

  useEffect(() => {
    if (!userState) {
      setRedireccionar("/");
    }
  }, [userState]);

  useEffect(() => {
    iniciarConexionSockets();
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on("emitir-mensajes", ({ usuarios }) => {
      let mensajesOrdenados = ordenarMensajes(usuarios);
      setMensajes(mensajesOrdenados);
    });

    // socket.on("emitir-usuarios", (user) => {
    //   console.log({ user });
    // });
  }, []);

  if (redireccionar) {
    return <Redirect to={redireccionar} />;
  }

  return (
    <Fragment>
      <div className="container main">
        {userState === null ? null : (
          <Chat
            mensajes={mensajes}
            actualUser={userState.email}
            mandarMensaje={mandarMensaje}
          />
        )}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="ondas"
      >
        <path
          fill="#FFB61D"
          fill-opacity="1"
          d="M0,96L60,106.7C120,117,240,139,360,170.7C480,203,600,245,720,261.3C840,277,960,267,1080,240C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </Fragment>
  );
}

export default MainView;
