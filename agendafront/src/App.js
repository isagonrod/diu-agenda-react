import './App.css';
import ListContacts from "./components/ListContacts";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route exact path = '/' component = {ListContacts} />
                        <Route path = '/contacts' component = {ListContacts} />
                        <Route path = '/add-contact' component = {AddContact} />
                        <Route path = '/edit-contact/:id' component = {AddContact} />
                    </Routes>
                </div>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;