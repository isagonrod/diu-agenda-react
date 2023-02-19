import axios from "axios";

const CONTACT_API_BASE_URL = "http://localhost:8081/contact";

class ContactService {
    getContacts() {
        return axios.get(CONTACT_API_BASE_URL);
    }

    getContactById(contactId) {
        return axios.get(CONTACT_API_BASE_URL + '/' + contactId);
    }

    createContact(contact) {
        return axios.post(CONTACT_API_BASE_URL, contact);
    }

    updateContact(contactId, contact) {
        return axios.put(CONTACT_API_BASE_URL + '/' + contactId, contact);
    }

    deleteContact(contactId) {
        return axios.delete(CONTACT_API_BASE_URL + '/' + contactId);
    }
}

export default new ContactService();
