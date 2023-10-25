import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Auth0Login = () => {
  const { user, loginWithRedirect } = useAuth0();
  console.log("user is", user);

  return (
    <>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </>
  );
};
export default Auth0Login;
