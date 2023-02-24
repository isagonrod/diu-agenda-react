import ProgressBar from "react-bootstrap/ProgressBar";
import {countContacts} from "./ListContacts";
import {useEffect, useState} from "react";

function Progress() {
    const [contactAmount, setContactAmount] = useState([]);

    useEffect(() => {
        countContacts()
            .then(contactAmount => setContactAmount(contactAmount))
            .catch(error => {
                console.log(error);
            });
    }, []);

    const now = parseInt(countContacts());
    console.log(now);
    return <ProgressBar animated now={now} label={`${now} contacts - ${now * 2} %`} />;
}

export default Progress;
