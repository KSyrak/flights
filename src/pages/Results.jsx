import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function Results() {
    const [searchParams] = useSearchParams();
    const from = searchParams.get('from');
    const to = searchParams.get('to');
    const [flights, setFlights] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('/src/data/flights.json')
            .then((res) => res.json())
            .then((data) => {
                const results = data.filter(
                    (flight) =>
                        flight.from.toLowerCase() === from.toLowerCase() &&
                        flight.to.toLowerCase() === to.toLowerCase()
                );
                setFlights(results);
                setIsLoading(false);
            });
    }, [from, to]);
    if (isLoading) return <p>Loading flights...</p>;
    if (flights.length === 0) return <p>No flights found from {from} to {to}.</p>;
    return (
        <div>
            <h2>Flights from {from} to {to}</h2>
            <ul>
                {flights.map((flight) => (
                    <li key={flight.id}>
                        {flight.airline} - ${flight.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}