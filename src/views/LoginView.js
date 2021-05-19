import React, { useState, useEffect, useContext, Fragment } from "react";
import { AuthContext } from "../context/authContext";
import { Redirect } from "react-router-dom";
import social from "../static/SocialDistancing.png";

function LoginView() {
  const [redireccionar, setRedireccionar] = useState(null);
  const { userState, signInWithGoogle } = useContext(AuthContext);

  useEffect(() => {
    if (userState) {
      setRedireccionar("/main");
    }
  }, [userState]);

  if (redireccionar) {
    return <Redirect to={redireccionar} />;
  }

  return (
    <Fragment>
      <div className="h-100 d-flex justify-content-center align-items-center">
        <img src={social} className="mt-5" alt="welcome" />
        <div className="d-flex justify-content-center  flex-column">
          <h1 className="poppins semi-bold mb-4">
            Ingresa a <span className="fw-bold">CodiChat</span>
          </h1>
          <button
            className="btn btn-danger btn-lg btn-block d-flex align-items-center justify-content-center poppins"
            onClick={signInWithGoogle}
          >
            <i className="fab fa-google me-2"></i>
            Ingresa con Google
          </button>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="ondas">
      <path fill="#FFB61D" fill-opacity="1" d="M0,96L60,106.7C120,117,240,139,360,170.7C480,203,600,245,720,261.3C840,277,960,267,1080,240C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </Fragment>
  );
}

export default LoginView;
