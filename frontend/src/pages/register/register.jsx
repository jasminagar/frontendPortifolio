import { useState } from 'react';
import { register } from '../../services/api';
import './register.css';
import '../../shared/auth.css';

function Register() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();

    setMessage('');
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords matcher ikke');
      return;
    }

    try {
      setLoading(true);

      const data = await register(username, password);

      console.log('Register succes:', data);

      setMessage('Din bruger er oprettet');

      setUsername('');
      setPassword('');
      setConfirmPassword('');

    } catch (error) {
      setError(error.message);

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="register-container">

      <form className="register-form" onSubmit={handleRegister}>

        <h1>MyGarage</h1>
        <h2>Opret bruger</h2>

        <label>Brugernavn</label>
        <input
          type="text"
          placeholder="Indtast brugernavn"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Indtast password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <label>Bekræft password</label>
        <input
          type="password"
          placeholder="Gentag password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Opretter bruger...' : 'Opret bruger'}
        </button>

        {message && <p className="success">{message}</p>}

        {error && <p className="error">{error}</p>}

      </form>

    </div>
  );
}

export default Register;
