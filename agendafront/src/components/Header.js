import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/contacts" className="navbar-brand">AGENDA</a></div>
                </nav>
            </header>
        </div>
    );
}

export default Header;