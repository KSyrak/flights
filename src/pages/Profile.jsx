import { useEffect, useState } from 'react';

function Profile() {
    const [user, setUser] = useState(null);
    const api = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch('${api}/api/auth/me', {
            credentials: 'include', 
        })
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => {
                console.error('Failed to fetch user profile:', err);
            });
    }, []);

    if (!user) return <p>Loading profile...</p>;

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
            <h2>User Profile</h2>
            <div style={{
                border: '1px solid #ccc',
                padding: '1rem',
                borderRadius: '6px'
            }}>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Account Created:</strong> {new Date(user.createdAt).toLocaleString()}</p>
            </div>
        </div>
    );
}

export default Profile;
