import React, { useState, useEffect, useContext } from "react";
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
    <div className="container">
      {userState === null ? null : (
        <Chat
          mensajes={mensajes}
          actualUser={userState.email}
          mandarMensaje={mandarMensaje}
        />
      )}
    </div>
  );
}

export default MainView;
