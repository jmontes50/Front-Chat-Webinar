import { createContext, useEffect, useState } from "react"
import { firebase, auth } from "../config/Firebase"
import {crearUsuario} from "../services/usuarioService";
import Loading from "../components/Loading"

const proveedorGoogle = new firebase.auth.GoogleAuthProvider()

export const AuthContext = createContext(null)

export const AuthProvider = (props) => {
  const [userState, setUserState] = useState(null)
  const [authPending, setAuthPending] = useState(true)

  const signInWithGoogle = async () => {
    const { user } = await auth.signInWithPopup(proveedorGoogle) //logeo con google

    const data = await crearUsuario(user.email, user.displayName)
  }

  const signOut = () => auth.signOut()

  useEffect(() => {
    return auth.onAuthStateChanged((userAuth) => {
      setUserState(userAuth)
      setAuthPending(false)
    })
  }, [])

  if (authPending) {
    return <Loading />
  }
  
  return (
    <AuthContext.Provider
      value={{
        signInWithGoogle: signInWithGoogle,
        signOut: signOut,
        userState: userState,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}