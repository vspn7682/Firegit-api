import React, { useState, useContext } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Switch } from "react-router-dom";

import firebase from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from './Configurations/firebaseConfig'

import UserContext from './Context/UserContext'

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import PageNotFound from './Components/PageNotFound';

firebase.initializeApp(firebaseConfig)

function App() {

  const context = useContext(UserContext)
  const [user, setUser] = useState(null)

  return (
    <>
      <ToastContainer position='top-center'></ToastContainer>

      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route exact path='/home'>
            <Navbar />
            <Home />
          </Route>
          <Route exact path='/'>
            <Navbar />
            <Login />
          </Route>
          <Route exact path='/register'>
            <Navbar />
            <Register />
          </Route>
          <Route exact path='*'>
            <PageNotFound />
          </Route>

        </Switch>
      </UserContext.Provider>

    </>
  );
}

export default App;
