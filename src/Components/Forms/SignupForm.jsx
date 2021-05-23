import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../CSS/SignupForm.css";

import firebase from "../../utils/firebase";

const SignupForm = (props) => {
  const history = useHistory();

  // Declare a new state variable, which we'll call "count"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Submitting Email ${email}`);
    console.log(`Submitting Password ${password}`);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("You have successfully registered.");
        // Signed in
        var user = userCredential.user;
        // ...
        history.push("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <div className="signupForm-cont">
        <div className="field ">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success" onClick={handleSubmit}>
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
