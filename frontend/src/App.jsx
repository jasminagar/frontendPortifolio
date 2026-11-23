import { useEffect, useState } from 'react';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Dashboard from './pages/dahsboard/dashboard';
import Import from './pages/dahsboard/importCar';
import { getCarsForUser } from './services/api';
import { Navigate, Route, Routes, useNavigate } from 'react-router';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [cars, setCars] = useState([]);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchCars(){
      if (!username) return;

      const token = localStorage.getItem('token');

      try{
        const data = await getCarsForUser(username, token);
        setCars(data);
      }  catch (error) {
          console.error('Kunne ikke hente biler:', error);
          }
    }

    fetchCars();
  }, [username]);
  

   function handleLogin(data){
    setIsLoggedIn(true);
    setUsername(data.username);
    navigate('/dashboard', { replace: true });
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login onLogin={handleLogin}/>}
      />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          isLoggedIn
            ? <Dashboard onImport={() => navigate('/cars/import')} cars={cars} />
            : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/cars/import"
        element={
          isLoggedIn
            ? <Import />
            : <Navigate to="/login" replace />
        }
      />
      <Route path="/" element={
        <Navigate to={isLoggedIn ? '/dashboard' : '/login'} replace />} />
    </Routes>
  )
}

export default App;
