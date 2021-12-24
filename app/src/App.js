import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Mates from "./pages/Mates";
import Family from "./pages/Family";
import { AuthProvider } from "./components/Auth.js";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
// import { withRouter } from "react-router";

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <Switch> */}
        <PrivateRoute path="/" component={<Dashboard />} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        {/* </Switch> */}
      </Router>
    </AuthProvider>
  );
}

export default App;
