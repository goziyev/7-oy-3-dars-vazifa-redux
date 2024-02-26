import React, { useState, useRef } from "react";
import "./index.css"; // Agar stil fayli mavjud bo'lsa
import Loader from "../loader";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [loader, setLoader] = useState(false);
  const loginRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const Navigate = useNavigate();
  function validate() {
    if (!loginRef.current.value.trim().length) {
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
    if (!usernameRef.current.value.trim().length) {
      alert("password kiritilishi shart !!!");
      usernameRef.current.focus();
      usernameRef.current.value = "";
      return false;
    }
    return true;
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoader(true);
      const user = {
        username: usernameRef.current.value,
        email: loginRef.current.value,
        password: passwordRef.current.value,
      };
      fetch("https://auth-rg69.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message == "User registered successfully!") {
            Navigate("/login");
          }
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
            <div className="form-signup">
              <span className="desc-form">Not a member</span>
              <h2 className="title-form">Sign up!</h2>
              <form className="signup" onSubmit={handleSignupSubmit}>
                <div className="input-container">
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    autoComplete="off"
                    placeholder="Username"
                    required="required"
                    ref={usernameRef}
                  />
                  <label htmlFor="fullname">Username</label>
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    name="email2"
                    id="email2"
                    placeholder="Email"
                    ref={loginRef}
                  />
                  <label htmlFor="email2">Email</label>
                </div>
                <div className="input-container">
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    autoComplete="new-password"
                    placeholder="Password"
                    required="required"
                    ref={passwordRef}
                  />
                  <label htmlFor="password2">Password</label>
                </div>
                <input className="btn btn-block" name="signup" type="submit" />
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
                Navigate("/login");
              }}
            >
              Sign In page
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
