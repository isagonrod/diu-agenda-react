import React, {useContext, useState} from "react";
import "firebase/auth";
import {auth, generateUserDocument} from "../config/firebase";
import {UserContext} from "../providers/UserProvider";

const Auth = () => {

    const user = useContext(UserContext);
    const [email, setEmail] = useState(sessionStorage.getItem("email"));
    const [password, setPassword] = useState('');
    const [photoURL, setPhotoURL] = useState(sessionStorage.getItem("photoURL"));
    const [error, setError] = useState(null);

    const signIn = (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
            setError("Error signing in with password and email");
            if (error.code === "auth/user-not-found") {
                signUp(event).then(r => console.log(r));
            }
        });
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("photoURL", photoURL);
    }

    const signUp = async (event) => {
        event.preventDefault();
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await generateUserDocument(user, {photoURL});
        } catch (error) {
            setError("Error signing up with email and password");
            console.error(error);
        }
    }

    const logout = async () => {
        await auth.signOut();
        sessionStorage.setItem("email", '');
        sessionStorage.setItem("photoURL", 'https://as1.ftcdn.net/v2/jpg/01/21/93/74/1000_F_121937450_E3o8jRG3mKbMaAFprSuNOlyrLraSVVua.jpg');
    }

    return (
        <div>

            {!user ?

                <form>
                    <label htmlFor="email">EMAIL:</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>

                    <label htmlFor="password">PASSWORD:</label>
                    <input type="password" id="password" placeholder="Enter 6 characters" onChange={(e) => setPassword(e.target.value)}/>

                    <label htmlFor="photo">AVATAR:</label>
                    <select id="photo" onChange={(e) => {setPhotoURL(e.target.value)}}>
                        <option
                            value="https://as1.ftcdn.net/v2/jpg/01/21/93/74/1000_F_121937450_E3o8jRG3mKbMaAFprSuNOlyrLraSVVua.jpg">
                            HER
                        </option>
                        <option
                            value="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg">
                            HIM
                        </option>
                    </select>

                    <input
                        type="submit"
                        className="btn btn-primary"
                        value="ENTER"
                        onClick={(event) => {signIn(event, email, password)}}
                    />
                </form>

                    :

                <div>
                    <p>HELLO, {email}</p>
                    <img src={photoURL} alt="avatar"/>
                    <input type="submit" className="btn btn-danger" value="LOG OUT" onClick={logout}/>
                </div>
            }

        </div>
    )
}

export default Auth;
