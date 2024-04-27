import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CountdownTimer from '../CountdownTimer/CountdownTimer.jsx';
import UserList from '../UserList/UserList.jsx';
import WindowSize from '../WindowSize/WindowSize.jsx';

function ComponentBtn() {
    const [page, setPage] = useState(null);

    const mountCountdownTimer = () => {
        setPage(<CountdownTimer seconds={10} />);
    }

    const mountUserList = () => {
        setPage(<UserList />);
    }

    const mountWindowSize = () => {
        setPage(<WindowSize />);
    }

    return (
        <div>
            <Button onClick={mountCountdownTimer}>Countdown Timer</Button>
            <Button onClick={mountUserList}>User List</Button>
            <Button onClick={mountWindowSize}>Window Size</Button>
            {page}
        </div>
    )
}

export default ComponentBtn;
