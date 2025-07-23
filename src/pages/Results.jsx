import { useSearchParams, Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import FlightList from '../components/FlightList';
import NoResults from '../components/NoResults';

const GET_FLIGHTS = gql`
  query GetFlights($from: String, $to: String) {
    flights(from: $from, to: $to) {
      id
      from
      to
      price
      airline
      departureTime
    }
  }
`;

export default function Results() {
    const [searchParams] = useSearchParams();
    const from = searchParams.get('from');
    const to = searchParams.get('to');

    if (!from || !to) {
        return <p>Waiting for search parameters...</p>;
    }

    const { loading, error, data } = useQuery(GET_FLIGHTS, {
        variables: { from, to },
    });

    if (loading) return <p>Loading flights...</p>;
    if (error) return <p>Error loading flights.</p>;

    const flights = data?.flights || [];

    if (flights.length === 0) {
        return <NoResults from={from} to={to} />;
    }

    return (
        <div>
            <Link to="/">
                <button>Back to Search</button>
            </Link>
            <h2>Flights from {from} to {to}</h2>
            <FlightList flights={flights} />
        </div>
    );
}
