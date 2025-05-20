import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function SearchForm() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/results?from=${from}&to=${to}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                From:
                <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
            </label>
            <br />
            <label>
                To:
                <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
            </label>
            <br />
            <button type="submit">Search Flights</button>
        </form>
    );
}