import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../CSS/SignupForm.css';

import firebase from '../../utils/firebase';
import { Link } from 'react-router-dom';

const SignupForm = (props) => {
    const history = useHistory();

    // Declare a new state variable, which we'll call "count"
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Signup = (evt) => {
        const db = firebase.firestore();
        evt.preventDefault();

        if (email && username && password) {
            console.log(`Submitting Email ${email}`);
            console.log(`Submitting Username ${username}`);
            console.log(`Submitting Password ${password}`);

            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Add a new document with a generated id.
                    db.collection('users')
                        .add({
                            avatar: '',
                            description: '',
                            tags: [],
                            type: 'user',
                            username: username,
                        })
                        .then((docRef) => {
                            console.log(
                                'Document written with ID: ',
                                docRef.id
                            );

                            firebase.auth().onAuthStateChanged(function (user) {
                                if (user) {
                                    // User is signed in.
                                    console.log(user);
                                    user.updateProfile({
                                        displayName: username,
                                    })
                                        .then(function () {
                                            // Update successful.
                                            // Signed in

                                            console.log(userCredential);
                                            // ...
                                            history.replace('/');
                                        })
                                        .catch(function (error) {
                                            // An error happened.
                                        });
                                } else {
                                    // No user is signed in.
                                }
                            });
                        })
                        .catch((error) => {
                            console.error('Error adding document: ', error);
                        });
                })
                .catch((error) => console.log(error));
        } else {
            //Validations
            alert('Invalid credentials, please ensure all fields are filled');
        }
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
                <div className="field ">
                    <p className="control has-icons-left has-icons-right">
                        <input
                            className="input"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                        <button className="button is-success" onClick={Signup}>
                            Sign Up
                        </button>
                    </p>

                    <div className="signup">
                        <p>Already have an account?</p>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
