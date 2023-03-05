import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import ContactService from "../services/ContactService";

import 'bootstrap/dist/css/bootstrap.min.css';

const AddContact = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthday, setBirthday] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateContact = (e) => {
        e.preventDefault();

        const patternEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!patternEmail.test(email) || phoneNumber.length < 9) {
            return;
        }

        const contact = {firstName, lastName, email, phoneNumber, birthday};

        if (id) {
            ContactService.updateContact(id, contact).then(() => {
                navigate('/contacts');
            }).catch(error => {
                console.log(error);
            });
        } else {
            ContactService.createContact(contact).then((response) => {
                console.log(response.data);
                navigate('/contacts');
            }).catch(error => {
                console.log(error);
            });
        }
    }

    useEffect(() => {
        if (typeof (id) != "undefined") {
            ContactService.getContactById(id).then((response) => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
                setPhoneNumber(response.data.phoneNumber)
                setBirthday(response.data.birthday)
            }).catch(error => {
                console.log(error);
            });
        }
    }, []);

    const title = () => {
        if (id) {
            return <h2 className="text-center">EDITAR CONTACTO</h2>
        } else {
            return <h2 className="text-center">AÑADIR CONTACTO</h2>
        }
    }

    const onHandleChangedPhoneNumber = (e) => {
        const valuePhone = e.target.value;
        if (isNaN(valuePhone)) {
            return;
        }
        setPhoneNumber(valuePhone);
    }

    return (
        <div>
            <br/><br/>
            <div className="container container-min-height">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        {title()}
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">NOMBRE: </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}/>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">APELLIDOS: </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">EMAIL: </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">TELÉFONO: </label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        maxLength="9"
                                        className="form-control"
                                        value={phoneNumber}
                                        onChange={onHandleChangedPhoneNumber}/>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">CUMPLEAÑOS: </label>
                                    <input
                                        type="date"
                                        name="birthday"
                                        className="form-control"
                                        value={birthday}
                                        onChange={(e) => setBirthday(e.target.value)}/>
                                </div>
                                <div className="text-center">
                                    <button className="btn" onClick={(e) => saveOrUpdateContact(e)}>
                                        <img
                                            src="https://www.freeiconspng.com/uploads/save-download-icon-10.png"
                                            alt="SAVE"
                                            title="Guardar"/>
                                    </button>
                                    <Link to="/contacts" className="btn">
                                        <img
                                            src="https://www.freeiconspng.com/thumbs/remove-icon-png/remove-icon-png-8.png"
                                            alt="CANCEL"
                                            title="Cancelar"/>
                                    </Link>
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