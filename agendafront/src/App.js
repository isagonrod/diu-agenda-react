import './App.css';
import ListContacts from "./components/ListContacts";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<ListContacts/>}/>
                    <Route path='/contacts' element={<ListContacts/>}/>
                    <Route path='/add-contact' element={<AddContact/>}/>
                    <Route path='/edit-contact/:id' element={<AddContact/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
