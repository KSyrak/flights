export default function FlightCard({ flight }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
            <p><strong>{flight.airline}</strong></p>
            <p>From: {flight.from} → To: {flight.to}</p>
            <p>Price: ${flight.price}</p>
        </div>
    );
}