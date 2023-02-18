import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import ContactService from "../services/ContactService";
import Button from "bootstrap/js/src/button";

const ListContacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getAllContacts();
    }, []);

    const getAllContacts = () => {
        ContactService.getContacts().then((response) => {
            setContacts(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    const deleteContact = (contactId) => {
        ContactService.deleteContact(contactId).then((response) => {
            getAllContacts();
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="container">
            <h2 className="text-center">AGENDA</h2>
            <Link to="/add-contact" className="btn btn-primary mb-2">ADD CONTACT</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>ID</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE NUMBER</th>
                    <th>BIRTHDAY</th>
                    <th>ACTIONS</th>
                </thead>
                <tbody>
                {
                    contacts.map(
                        contact =>
                            <tr key = {contact.id}>
                                <td>{contact.id}</td>
                                <td>{contact.firstName}</td>
                                <td>{contact.lastName}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phoneNumber}</td>
                                <td>{contact.birthday}</td>
                                <td>
                                    <Link className="btn btn-info" to={'/edit-contact/${contact.id}'}>EDIT</Link>
                                    <button className="btn btn-danger m1-2" onClick={() => deleteContact(contact.id)}>DELETE</button>
                                </td>
                            </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default ListContacts;