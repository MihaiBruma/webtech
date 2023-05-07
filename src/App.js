import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user data exists in localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users'));

    if (storedUsers) {
      setUsers(storedUsers);
    } else {
      // Create mock users
      const mockUsers = [
        { id: 1, username: 'user1', password: 'pass1' },
        { id: 2, username: 'user2', password: 'pass2' },
        { id: 3, username: 'user3', password: 'pass3' },
      ];

      // Store mock users in localStorage
      localStorage.setItem('users', JSON.stringify(mockUsers));

      // Set state with mock users
      setUsers(mockUsers);
    }
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    // Find user with given username
    const user = users.find((user) => user.username === username);

    if (user && user.password === password) {
      // Successful authentication
      setLoggedIn(true);
    } else {
      // Authentication error
      alert('(!) ERROR. Invalid LOGIN ...');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', borderRadius: '10px' }}>
        <h1 style={{ backgroundColor: '#f2f2f2', padding: '1rem', borderRadius: '10px 10px 0 0' }}>You are logged in!</h1>
        <button style={{ marginTop: '1rem', backgroundColor: '#f2f2f2', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }} onClick={handleLogout}>
          Log out
        </button>
      </div>
    );
  }

  return (
    <form style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', borderRadius: '10px' }} onSubmit={handleLogin}>
      <label style={{ display: 'block', marginTop: '1rem' }}>
        Username:
        <input
          type="text"
          style={{ marginLeft: '1rem', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label style={{ display: 'block', marginTop: '1rem' }}>
        Password:
        <input
          type="password"
          style={{ marginLeft: '1rem', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button style={{ marginTop: '1rem', backgroundColor: '#f2f2f2', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }} type="submit">
        Log in
      </button>
    </form>
  );
}

export default App;
