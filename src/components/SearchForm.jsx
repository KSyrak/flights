import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function SearchForm() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            navigate(`/results?from=${from}&to=${to}`);
            setLoading(false);
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                From:
                <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} required />
            </label>
            <br />
            <label>
                To:
                <input type="text" value={to} onChange={(e) => setTo(e.target.value)} required />
            </label>
            <br />
            <button type="submit" disabled={loading}>
                {loading ? 'Loading...' : 'Search Flights'}
            </button>

        </form>
    );
}