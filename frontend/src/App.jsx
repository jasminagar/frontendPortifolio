import { useState } from 'react';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return (
    <div className="auth-container">
      <Login onLogin={() => setIsLoggedIn(true)} />
      <Register />
    </div>
  );
}

export default App;