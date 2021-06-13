import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../CSS/LoginForm.css';
import { Link } from 'react-router-dom';

import firebase from '../../utils/firebase';

const ResetPasswordForm = (props) => {
    const history = useHistory();

    // Declare a new state variable, which we'll call "count"
    const [email, setEmail] = useState('');

    const resetPassword = () => {
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                // Password reset email sent!
                // ..
                console.log('Password reset email sent!');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    };

    return (
        <div className="loginForm-cont container">
            <div className="field">
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
                <p className="control">
                    <button
                        className="button is-success"
                        onClick={resetPassword}
                    >
                        Reset Password
                    </button>
                </p>
            </div>
        </div>
    );
};

export default ResetPasswordForm;
