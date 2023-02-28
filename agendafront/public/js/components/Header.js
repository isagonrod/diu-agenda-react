import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from "../login/Auth";

const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/6313/6313619.png" alt="AGENDA"/>
                        <a href="/contacts" className="navbar-brand" title="Contact list">
                            AGENDA
                        </a>
                    </div>
                    <Auth/>
                </nav>
            </header>
        </div>
    );
}

export default Header;
