import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import "../../CSS/LoginForm.css";

import firebase from "../../utils/firebase";

const EventForm = (props) => {
  const history = useHistory();

  // Declare a new state variable, which we'll call "count"
  const [eventName, setEventName] = useState("");
  const [submitData, handleSubmit] = useState("");

  const onSubmit = (evt) => {
    //   evt.preventDefault();
      console.log(evt);
      alert(`Submitting Name ${eventName}`)
  }

//   const SignIn = (evt) => {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in
//         var user = userCredential.user;
//         // ...

//         history.push("/");
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//       });
//   };

  return (
    <div className="loginForm-cont container">
      <form className="field" onSubmit={onSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />

          <input type="submit" value="Submit" className="button is-success" />

      </form>
    </div>
  );
};

export default EventForm;
