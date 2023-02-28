import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserProvider from "./providers/UserProvider";
import {firebaseConfig} from "./config/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <UserProvider firebaseConfig={firebaseConfig}>
            <App/>
        </UserProvider>
    </React.StrictMode>
);

reportWebVitals();
