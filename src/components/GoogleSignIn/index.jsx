import React from "react";
import { GoogleLogin } from "react-google-login";

const GoogleSignIn = () => {
  const responseGoogle = (response) => {};

  return (
    <div>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default GoogleSignIn;
