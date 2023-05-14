import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const SocialLogin = () => {
  const { googleSignIn, githubSignIn } = useContext(AuthContext);

  const handleGoogleSign = () => {
    googleSignIn()
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch(error => {
        const errorMessage = error.message;
      });
  };

  const handleGithubSigIn = () => {
    githubSignIn()
      .then(result => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div className="divider">Or</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSign}
          className="btn btn-circle btn-outline"
        >
          G
        </button>
        <button className="btn btn-circle btn-outline mx-4">F</button>
        <button
          onClick={handleGithubSigIn}
          className="btn btn-circle btn-outline"
        >
          G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
