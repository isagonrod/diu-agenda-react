import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserContext} from "../providers/UserProviders";

const Header = () => {

    const user = useContext(UserContext);

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/6313/6313619.png" alt="AGENDA" />
                        <a href="/contacts" className="navbar-brand">AGENDA</a>
                    </div>
                    <div>
                        <form className="form-group">
                            <label className="form-label">EMAIL: </label>
                            <input type="email" placeholder="Enter your email"/>
                            <label className="form-label">PASSWORD: </label>
                            <input type="password" placeholder="Enter your password"/>
                            <button className="btn btn-primary">
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