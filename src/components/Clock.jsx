import { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString();
    };

    return (
        <div className="clock-container">
            <div className="clock">
                {formatTime(time)}
            </div>
        </div>
        
    );
};

export default Clock;
