import React, {useState} from "react";
import { useUser } from "reactfire";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";

const Auth = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = useUser();
    const auth = getAuth();

    const signIn = async () => {
        await auth.signInWithEmailAndPassword(email, password);
    }

    const signUp = async () => {
        await auth.createUserWithEmailAndPassword(email, password);
        // console.log(email, password);
    }

    const logout = async () => {
        await auth.signOut();
    }

    return (
        <div>
            {
                !user &&
                <form>
                    <label htmlFor="email">EMAIL: </label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="password">PASSWORD: </label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button className="btn btn-secondary" onClick={signUp}>SIGN UP</button>
                    <button className="btn btn-primary" onClick={signIn}>SIGN IN</button>
                </form>
            }
            {
                user &&
                <form>
                    <label htmlFor="email">EMAIL: </label>
                    <input type="email" id="email" value={email}/>
                    <button className="btn btn-primary" onClick={logout}>LOGOUT</button>
                </form>
            }
        </div>
    )
}

export default Auth;