import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let timer;
        if (running) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 10);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [running]);

    const handleStartStop = () => {
        setRunning(!running);
    };

    const handleLap = () => {
        if (running) {
            setLaps([...laps, time]);
        }
    };

    const handleReset = () => {
        setRunning(false);
        setTime(0);
        setLaps([]);
    };

    const formatTime = (t) => {
        const minutes = Math.floor(t / 6000);
        const seconds = Math.floor((t % 6000) / 100);
        const milliseconds = t % 100;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milliseconds < 10 ? '0' : ''}${milliseconds}`;
    };

    return (
        <div className="p-4 max-w-md mx-auto text-center bg-gray-800 text-white rounded-lg shadow-md">
            <h1 className="text-3xl mb-4">Stopwatch</h1>
            <p className="text-2xl font-mono mb-4">{formatTime(time)}</p>
            <div className="mb-4">
                <button onClick={handleStartStop} className="px-4 py-2 mx-2 bg-blue-500 rounded">{running ? 'Stop' : 'Start'}</button>
                <button onClick={handleLap} className="px-4 py-2 mx-2 bg-green-500 rounded">Lap</button>
                <button onClick={handleReset} className="px-4 py-2 mx-2 bg-red-500 rounded">Reset</button>
            </div>
            <ul className="text-left">
                {laps.map((lap, index) => (
                    <li key={index} className="border-b border-gray-700 py-1">Lap {index + 1}: {formatTime(lap)}</li>
                ))}
            </ul>
        </div>
    );
};

export default Stopwatch;
