import React, { useRef, useState } from "react";
import "./index.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  function validate() {
    if (!emailRef.current.value.trim().length) {
      alert("username kiritilishi shart !!!");
      loginRef.current.focus();
      loginRef.current.value = "";
      return false;
    }
    if (!passwordRef.current.value.trim().length) {
      alert("password kiritilishi shart !!!");
      passwordRef.current.focus();
      passwordRef.current.value = "";
      return false;
    }
    return true;
  }
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      
    }
  };

  return (
    <div className="container">
      <div className="forms">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="form-login">
              <span className="desc-form">I have account</span>
              <h2 className="title-form">Log In!</h2>
              <form className="login" onSubmit={handleLoginSubmit}>
                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Email"
                    required="required"
                    ref={emailRef}
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-container">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="new-password"
                    placeholder="Password"
                    required="required"
                    ref={passwordRef}
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <input className="btn btn-block" name="login" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
