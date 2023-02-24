import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Progress from "./Progress";

const Footer = () => {
    return (
        <div>
            <footer className="footer navbar-dark bg-dark">
                <span className="text-muted">&copy; 2023 Isa González</span>
                <Progress/>
            </footer>
        </div>
    );
}

export default Footer;