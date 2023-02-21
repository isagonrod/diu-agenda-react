import React, {useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {auth} from "../firebase";

const Header = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
            setError("ERROR signing in with password and email!");
            console.error("ERROR signing in with password and email", error);
        });
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
    }

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="/contacts" className="navbar-brand">AGENDA</a>
                    </div>
                    <div>
                        <form>
                            <label htmlFor="userEmail" className="block">EMAIL:</label>
                            <input
                                type="email"
                                className="my-1 p1 w-full"
                                name="userEmail"
                                value={email} placeholder="E.g: prueba@gmail.com"
                                id="userEmail"
                                onChange={(event) => onChangeHandler(event)}/>

                            <label htmlFor="userPassword" className="block">PASSWORD:</label>
                            <input
                                type="password"
                                className="mt-1 mb-3 p-1 w-full"
                                name="userPassword"
                                value={password}
                                placeholder="your password"
                                id="userPassword"
                                onChange={(event) => onChangeHandler(event)}/>
                            <button
                                className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
                                onClick={(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
                                SIGN IN
                            </button>
                        </form>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;