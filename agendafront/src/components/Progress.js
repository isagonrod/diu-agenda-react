import ProgressBar from "react-bootstrap/ProgressBar";

function Progress() {
    const now = 60;
    const max = 50;
    return <ProgressBar animated now={now} max={max} label={`${now}%`} />;
}

export default Progress;