import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import ContactService from "../services/ContactService";

import 'bootstrap/dist/css/bootstrap.min.css';

export const countContacts = () => {
    let count;

    count = ContactService.getContacts().then((response) => {
        return response.data.length;
    }).catch(error => {
        console.log(error);
    });

    return count;
}

const ListContacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getAllContacts();
    }, []);

    const getAllContacts = () => {
        ContactService.getContacts().then((response) => {
            setContacts(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    const deleteContact = (contactId) => {
        ContactService.deleteContact(contactId).then(() => {
            getAllContacts();
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="container">
            <h2 className="text-center">AGENDA</h2>
            <Link to="/add-contact" className="btn">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWx2r-8LmBxdRNhzemfYjrkDOxjpopbvvcA&usqp=CAU"
                    alt="ADD CONTACT"/>
            </Link>
            <table className="table table-bordered table-striped">
                <thead>
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
                                <td>{contact.firstName}</td>
                                <td>{contact.lastName}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phoneNumber}</td>
                                <td>{contact.birthday}</td>
                                <td>
                                    <Link className="btn" to={`/edit-contact/${contact.id}`}>
                                        <img
                                            src="https://www.graphicsfuel.com/wp-content/uploads/2012/07/pencil-icon-512.png"
                                            alt="EDIT"/>
                                    </Link>
                                    <button className="btn" onClick={() => deleteContact(contact.id)}>
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/3221/3221845.png"
                                            alt="DELETE" />
                                    </button>
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
