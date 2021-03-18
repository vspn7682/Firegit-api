import React, { useState, useContext } from "react";
import { toast } from 'react-toastify'

import UserContext from '../Context/UserContext'
import { Redirect } from 'react-router-dom'

import firebase from 'firebase/app'

const Login = () => {

  const context = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleForm = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res)
        context.setUser({
          email: res.user.email,
          uid: res.user.uid
        })
      })
      .catch(error => {
        return toast(error.message, { type: 'error' })
      })
  }

  const submitForm = (e) => {
    e.preventDefault();
    handleForm();
  }

  if (context.user?.uid) {
    return <Redirect to='/home' />
  }

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-lg-4 mx-auto">
          <form onSubmit={submitForm} className="my-5 border p-4 rounded">
            <h1 className="mb-4">Sign In</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
