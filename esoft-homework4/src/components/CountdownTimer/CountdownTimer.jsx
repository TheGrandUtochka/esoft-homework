import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function CountdownTimer({ seconds }) {
    const [countdown, setCountdown] = useState(seconds);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (countdown <= 0) {
            setMessage('Поехали!');
            return;
        }

        const timeout = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [countdown]);

    return (
        <div>
            {countdown === 0 ? (
                <div>{message}</div>
            ) : (
                <div>
                    <div>{countdown}</div>
                </div>
            )}
        </div>
    );
}

CountdownTimer.propTypes = {
    seconds: PropTypes.number.isRequired,
};

export default CountdownTimer;
