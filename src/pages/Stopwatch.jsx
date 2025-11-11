import { useState, useRef, useEffect } from "react";

export default function Stopwatch() {
    const [trackcount, setTrackcount] = useState(0); // accumulated elapsed ms when paused
    const [time, setTime] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const interval = useRef(null);
    const spanElem = useRef(null);

    function handleStart() {
        if (interval.current) return; // already running
        // set startTime so that elapsed = now - startTime includes previously accumulated time
        setStartTime(Date.now() - trackcount);
        setTime(Date.now());
        interval.current = setInterval(() => {
            setTime(Date.now());
        }, 60);
    }

    function handleStop() {
        if (interval.current) {
            // store accumulated elapsed time so we can resume later
            if (startTime !== null) {
                setTrackcount(Date.now() - startTime);
            }
            clearInterval(interval.current);
            interval.current = null;
            setStartTime(null);
            setTime(Date.now());
        }
    }
    function clearTime() {
        if (interval.current) {
            clearInterval(interval.current);
            interval.current = 0;
        }
        setTrackcount(0);
        setTime(0);
        setStartTime(0);
    }

    useEffect(() => {
        return () => {
            if (interval.current) {
                clearInterval(interval.current);
                interval.current = null;
            }
        };
    }, []);

    function formatElapsed(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds) / 60);
        const seconds = totalSeconds % 60;
        const msc = ms % 1000;

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(msc).padStart(3, "0")}`;
    }

    return (
        <div className="flex flex-col gap-4">
            <h1>
                Time Passed: <span ref={spanElem}>{formatElapsed(startTime !== null && time !== null ? time - startTime : trackcount)}</span>
            </h1>
            <div className="flex gap-2">
                <button className="bg-blue-500 text-white text-2xl p-8 w-16 h-16 rounded-full mr-2 fa fa-solid fa-play" onClick={handleStart}></button>
                <button className="bg-red-500 text-white text-2xl p-8 w-16 h-16 rounded-full mr-2 fa fa-solid fa-stop" onClick={handleStop}></button>
                <button className="bg-yellow-500 text-white text-2xl p-8 w-20 h-16 rounded-xl mr-2" onClick={clearTime}>Clear Time</button>
            </div>
        </div>
    );
}
