import React from "react";
import "firebase/auth";

export default (props) => {
    return (
        <div>
            <form>
                <label htmlFor="email">EMAIL: </label>
                <input type="email" id="email"/>
                <label htmlFor="password">PASSWORD: </label>
                <input type="password" id="password"/>
                <button className="btn btn-primary">SIGN IN</button>
            </form>
        </div>
    )
}