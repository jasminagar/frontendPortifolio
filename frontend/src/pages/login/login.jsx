
import { useState } from 'react';
import '../../shared/auth.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    setMessage('');

    try {
      await onLogin(username, password);
    } catch (error) {
      setMessage('Login mislykkedes. Kontrollér dine oplysninger.');
    }
  }

  return (
    <div>
      <h1>MyGarage</h1>
      <h2>Log ind</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Brugernavn"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          Log ind
        </button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default Login;
