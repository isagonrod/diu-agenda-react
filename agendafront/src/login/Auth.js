import React, {useContext, useState} from "react";
import "firebase/auth";
import {auth} from "../config/firebase";
import {UserContext} from "../providers/UserProvider";

const Auth = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');
    const user = useContext(UserContext);

    const signIn = async () => {
        await auth.signInWithEmailAndPassword(email, password);
    }

    const signUp = async () => {
        await auth.createUserWithEmailAndPassword(email, password);
        setPhoto(photo.target.value);
    }

    const logout = async () => {
        await auth.signOut();
    }

    return (
        <div>
            <form>
                <label htmlFor="email">
                    EMAIL:
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                </label>

                <label htmlFor="password">
                    PASSWORD:
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                </label>

                <label htmlFor="photo">
                    AVATAR:
                    <select id="photo">
                        <option value="https://as1.ftcdn.net/v2/jpg/01/21/93/74/1000_F_121937450_E3o8jRG3mKbMaAFprSuNOlyrLraSVVua.jpg">
                            HER
                        </option>
                        <option value="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg">
                            HIM
                        </option>
                    </select>
                </label>

                <input type="submit" className="btn btn-primary" value="SIGN IN" onClick={signIn}/>
                <input type="submit" className="btn btn-success" value="SIGN UP" onClick={signUp}/>
                <input type="submit" className="btn btn-danger" value="LOG OUT" onClick={logout}/>
            </form>
        </div>
    )
}

export default Auth;
