import React, {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react";
import ContactService from "../services/ContactService";

const AddContact = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthday, setBirthday] = useState('');
    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateContact = (e) => {
        e.preventDefault();

        const contact = {firstName, lastName, email, phoneNumber, birthday};

        if (id) {
            ContactService.updateContact(id, contact).then(() => {
                history.push('/contacts');
            }).catch(error => {
                console.log(error);
            });
        } else {
            ContactService.createContact(contact).then((response) => {
                console.log(response.data);
                history.push('/contacts');
            }).catch(error => {
                console.log(error);
            });
        }
    }

    useEffect(() => {
        ContactService.getContactById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
            setPhoneNumber(response.data.phoneNumber)
            setBirthday(response.data.birthday)
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const title = () => {
        if (id) {
            return <h2 className="text-center">EDIT CONTACT</h2>
        } else {
            return <h2 className="text-center">ADD CONTACT</h2>
        }
    }

    return (
        <div>
            <br/><br/>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        {title()}
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">FIRST NAME: </label>
                                    <input
                                        type="text"
                                        placeholder="Enter First Name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}/>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">LAST NAME: </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">EMAIL: </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Email"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">PHONE NUMBER: </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Phone Number"
                                        name="phoneNumber"
                                        className="form-control"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}/>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">BIRTHDAY: </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Birthday"
                                        name="birthday"
                                        className="form-control"
                                        value={birthday}
                                        onChange={(e) => setBirthday(e.target.value)}/>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-success text-center w-25" onClick={(e) => saveOrUpdateContact(e)}>SAVE</button>
                                    <Link to="/contacts" className="btn btn-danger text-center m1-2 w-25">CANCEL</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddContact;