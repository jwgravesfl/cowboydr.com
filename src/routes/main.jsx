import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import { Login, AuthButton, PrivateRoute} from '../login/Login'
import NavBar from '../navbar/NavBar'
import { Public } from '../pages/home/Home'
import ContactForm from '../pages/contactForm/ContactForm'

const Main = () => (
  <Router>
    <div>
      <AuthButton />
      <NavBar />
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/contactform" component={ContactForm} />
    </div>
  </Router>
);

export default Main;