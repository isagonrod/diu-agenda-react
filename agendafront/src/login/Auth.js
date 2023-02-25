import React, {useContext, useState} from "react";
import "firebase/auth";
import {auth} from "../config/firebase";
import {UserContext} from "../providers/UserProvider";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useContext(UserContext);

    const signIn = async () => {
        await auth.signInWithEmailAndPassword(email, password);
    }

    const signUp = async () => {
        await auth.createUserWithEmailAndPassword(email, password);
    }

    const logout = async () => {
        await auth.signOut();
    }

    return (
        <div>
            {
                user ?
                    <form>
                        <label htmlFor="email">EMAIL: </label>
                        <input type="email" id="email" value={email}/>
                        <button className="btn btn-primary" onClick={logout}>LOGOUT</button>
                    </form>
                :
                    <form>
                        <label htmlFor="email">EMAIL: </label>
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="password">PASSWORD: </label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                        <button className="btn btn-secondary" onClick={signUp}>SIGN UP</button>
                        <button className="btn btn-primary" onClick={signIn}>SIGN IN</button>
                    </form>
            }
        </div>
    )
}

export default Auth;
