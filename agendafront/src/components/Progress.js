import ProgressBar from "react-bootstrap/ProgressBar";
import {countContacts} from "./ListContacts";
import {useEffect, useState} from "react";

function Progress() {
    const [contactAmount, setContactAmount] = useState([]);

    useEffect(() => {
        countContacts()
            .then(contactAmount => setContactAmount(contactAmount))
            .catch(error => {
                // handle any error state, rejected promises, etc..
            });
    }, []);

    const now = countContacts();
    const max = 50;
    console.log(now);
    return <ProgressBar animated now={now} max={max} label={`${now}%`} />;
}

export default Progress;
