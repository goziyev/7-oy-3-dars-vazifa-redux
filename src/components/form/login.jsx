import React, { useRef, useState } from "react";
import "./index.css";
import Loader from "../loader";
import { json, useNavigate } from "react-router-dom";
import GoogleSignIn from "../GoogleSignIn";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const Navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  function validate() {
    if (!usernameRef.current.value.trim().length) {
      alert("username kiritilishi shart !!!");
      usernameRef.current.focus();
      usernameRef.current.value = "";
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
      setLoader(true);
      const user = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      };
      fetch("https://auth-rg69.onrender.com/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem("token", data.accessToken);
          passwordRef.current.value = "";
          usernameRef.current.value = "";
          Navigate("/");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoader(false);
        });
    }
  };

  return (
    <div className="container">
      {loader && <Loader loading={loader} />}

      <div className="forms">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="form-login">
              <span className="desc-form">I have account</span>
              <h2 className="title-form">Log In!</h2>
              <form className="login" onSubmit={handleLoginSubmit}>
                <div className="input-container">
                  <input
                    type="text"
                    id="email"
                    autoComplete="off"
                    placeholder="Username"
                    required="required"
                    ref={usernameRef}
                  />
                  <label htmlFor="email">Username</label>
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
                <GoogleSignIn />
              </form>
            </div>
            <span
              style={{
                cursor: "pointer",
                textAlign: "center",
                display: "block",
                color: "blue",
                fontWeight: "600",
              }}
              onClick={() => {
                Navigate("/signup");
              }}
            >
              Sign Up page
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
