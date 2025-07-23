import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import FlightDetail from './components/FlightDetail';

function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/auth/me', {
      credentials: 'include',
    })
      .then(res => res.ok ? res.json() : null)
      .then(data => setUser(data));
  }, []);

  const handleLogin = (user) => {
    setUser(user);
    setMessage('Logged in successfully.');
  };

  const handleLogout = async () => {
    await fetch('http://localhost:4000/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    setUser(null);
    setMessage('Logged out.');
  };

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />

      {message && (
        <div>
          {message}
        </div>
      )}

      <Routes>
        <Route
          path="/signup"
          element={<Signup onAuth={handleLogin} setMessage={setMessage} />}
        />
        <Route
          path="/login"
          element={<Login onAuth={handleLogin} setMessage={setMessage} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />

        <Route
          path="/flights/:id"
          element={user ? <FlightDetail /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
