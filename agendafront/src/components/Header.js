import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import firebaseApp from "../config/firebase";
import Auth from "../login/Auth";

const Header = () => {

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/6313/6313619.png" alt="AGENDA" />
                        <a href="/contacts" className="navbar-brand">AGENDA</a>
                    </div>
                    <Auth/>
                    {/* FORM */}
                    {/*<div>*/}
                    {/*    <form className="form-group">*/}
                    {/*        <label htmlFor="email" className="form-label">EMAIL: </label>*/}
                    {/*        <input type="email" placeholder="Enter your email"/>*/}
                    {/*        <label htmlFor="password" className="form-label">PASSWORD: </label>*/}
                    {/*        <input type="password" placeholder="Enter your password"/>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                    {/* BUTTONS */}
                    {/*<div>*/}
                    {/*    <button className="btn btn-primary">*/}
                    {/*        SIGN IN*/}
                    {/*    </button>*/}
                    {/*    <button className="btn btn-success">*/}
                    {/*        LOG OUT*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </nav>
            </header>
        </div>
    );
}

export default Header;