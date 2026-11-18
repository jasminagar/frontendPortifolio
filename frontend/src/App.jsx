import { useState } from 'react';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Dashboard from './pages/dahsboard/dashboard';
import Import from './pages/dahsboard/importCar';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showImport, setShowImport] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="auth-container">
        <Login onLogin={() => setIsLoggedIn(true)} />
        <Register />
      </div>
    );
  }

  if (showImport) {
    return <Import />;
  }

  return <Dashboard onImport={() => setShowImport(true)} />;
}

export default App;