
import { useState } from 'react';
import { login } from '../../services/api';
import '../../shared/auth.css';

function Login({onLogin}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const data = await login(username, password);
      localStorage.setItem('token', data.token)

      console.log('Login successful:', data);
      onLogin();
      setMessage('Du er logget ind');

    } catch (error) {
      setMessage(error.message);
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
