import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
// import Container from "react-bootstrap/Container";
import { AuthProvider } from "./context/AuthContext";

import "./App.css";

import HomePage from "./pages/index";
import LoginPage from "./pages/login";
import AdminPage from "./pages/admin";
import DetailPage from "./pages/detail";
import ContactPage from "./pages/contact";

function App() {
  return (
    <AuthProvider>  
      <Router>

          <Navigation />

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            
            <Route exact path="/detail/:id">
              <DetailPage />
            </Route>
            
            <Route path="/contact">
              <ContactPage />
            </Route>

            <Route path="/login">
              <LoginPage />
            </Route>

            <Route path="/admin">
              <AdminPage />
            </Route>

          </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
