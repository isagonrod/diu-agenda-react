import React, {useEffect, useState} from "react";
import './App.css';
import ListContacts, {countContacts} from "./components/ListContacts";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from "react-bootstrap/ProgressBar";

function App() {

    const [contactAmount, setContactAmount] = useState(0);

    useEffect(() => {
        countContacts()
            .then(contactAmount => {
                setContactAmount(contactAmount);
            })
            .catch(error => {
                console.log(error);
            });
    });

    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<ListContacts stateChanger={setContactAmount}/>}/>
                    <Route path='/contacts' element={<ListContacts stateChanger={setContactAmount}/>}/>
                    <Route path='/add-contact' element={<AddContact stateChanger={setContactAmount}/>}/>
                    <Route path='/edit-contact/:id' element={<AddContact/>}/>
                </Routes>
            </BrowserRouter>
            <div>
                <footer className="footer navbar-dark bg-dark">
                    <span className="text-muted">&copy; 2023 Isa González</span>
                    <ProgressBar animated now={contactAmount * 2} max={50} label={`${contactAmount * 100 / 50} %`} />
                </footer>
            </div>
        </div>
    );
}

export default App;
