import { useEffect, useState } from "react"

const start = Date.parse('2025-03-02T16:00:00.000+01:00');

export default function Timer() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            let diff = start-Date.now();

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            diff -= days * (1000 * 60 * 60 * 24);

            const hours = Math.floor(diff / (1000 * 60 * 60));
            diff -= hours * (1000 * 60 * 60);

            const mins = Math.floor(diff / (1000 *60));
            diff -= mins * (1000 * 60);

            const seconds = Math.floor(diff / 1000);

            setTime(days + " Days, " + String(hours).padStart(2, '0') + ":" + String(mins).padStart(2, '0') + ":" + String(seconds).padStart(2, '0'));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    })

    return <span>
        {time}
    </span>
}