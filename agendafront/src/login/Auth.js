import React, {useContext, useState} from "react";
import "firebase/auth";
import {auth, generateUserDocument} from "../config/firebase";
import {UserContext} from "../providers/UserProvider";

const Auth = () => {

    const user = useContext(UserContext);
    const [email, setEmail] = useState(sessionStorage.getItem("email"));
    const [password, setPassword] = useState('');
    const [photoURL, setPhotoURL] = useState(sessionStorage.getItem("photoURL"));
    const [setError] = useState(null);

    const signIn = (event, email, password) => {
        event.preventDefault();

        const patternEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!patternEmail.test(email) || password.length < 6) {
            return;
        }

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
        sessionStorage.setItem("photoURL", 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png');
    }

    return (
        <div>

            {!user ?

                <form>
                    <label htmlFor="email">EMAIL:</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>

                    <label htmlFor="password">CONTRASEÑA:</label>
                    <input type="password" id="password" minLength="6" placeholder="Enter 6 chars"
                           onChange={(e) => setPassword(e.target.value)}/>

                    <label htmlFor="photo">AVATAR:</label>
                    <select id="photo" onChange={(e) => {
                        setPhotoURL(e.target.value)
                    }}>
                        <option
                            value="https://cdn-icons-png.flaticon.com/512/4140/4140047.png">
                            AVATAR 1 - FEMENINO
                        </option>
                        <option
                            value="https://cdn-icons-png.flaticon.com/512/4140/4140048.png">
                            AVATAR 2 - MASCULINO
                        </option>
                        <option
                            value="https://cdn-icons-png.flaticon.com/512/4139/4139993.png">
                            AVATAR 3 - CALVO
                        </option>
                    </select>

                    <input
                        type="submit"
                        className="btn btn-primary"
                        value="ENTRAR"
                        onClick={(event) => {
                            signIn(event, email, password)
                        }}
                    />
                </form>

                :

                <div>
                    <p>WELCOME {email.split('@')[0].toUpperCase()}</p>
                    <img src={
                        photoURL === null ?
                            "https://cdn-icons-png.flaticon.com/512/4139/4139993.png"
                            : photoURL} alt="avatar"/>
                    <input type="submit" className="btn btn-danger" value="SALIR" onClick={logout}/>
                </div>
            }

        </div>
    )
}

export default Auth;
