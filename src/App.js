import React from "react";
import { AuthProvider } from "./context/authContext";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Navigation from "./components/Navigation";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Navigation/>
        <Switch>
          <Routes />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
