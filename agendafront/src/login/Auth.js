import React, {useContext, useState} from "react";
import "firebase/auth";
import {auth} from "../config/firebase";
import {UserContext} from "../providers/UserProvider";
import {doc, setDoc} from "firebase/firestore";

const Auth = () => {

    const [isRegistry, setIsRegistry] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const user = useContext(UserContext);

    const signIn = async () => {
        await auth.signInWithEmailAndPassword(email, password);
    }

    const signUp = async (email, password, role) => {
        const infoUser = await auth.createUserWithEmailAndPassword(email, password)
            .then((firebaseUser) => {
            return firebaseUser;
        });
        const docRef = doc(firestore, )
    }

    const logout = async () => {
        await auth.signOut();
    }

    function submitHandler(e) {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const role = e.target.elements.role.value;

        if (isRegistry) {
            signIn();
        } else {
            signUp(email, password, role)
                .then();
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="email">
                    EMAIL:
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                </label>

                <label htmlFor="password">
                    PASSWORD:
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                </label>

                <label htmlFor="rol">
                    ROL:
                    <select id="rol">
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </label>

                <input type="submit" value={isRegistry ? "SIGN IN" : "SIGN UP"}/>
                {/*{*/}
                {/*    isRegistry ?*/}
                {/*        <button className="btn btn-primary" onClick={signIn}>SIGN IN</button>*/}
                {/*        :*/}
                {/*        <button className="btn btn-secondary" onClick={signUp}>SIGN UP</button>*/}
                {/*}*/}
                <button onClick={() => setIsRegistry(isRegistry)}>{isRegistry ? "Log in" : "Register me"}</button>
            </form>
        </div>
    )
}

export default Auth;
