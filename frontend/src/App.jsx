import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router';

import Login from './pages/login/login';
import Register from './pages/register/register';
import Dashboard, { DashboardLayout } from './pages/dahsboard/dashboard';
import Import from './pages/dahsboard/importCar';
import ShowCars from './pages/dahsboard/showCars';

import ProtectedRoute from './components/ProtectedRoutes';
import facade from './services/apiFacade';


function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(facade.loggedIn());
 const [username, setUsername] = useState(null);
 const navigate = useNavigate();

  

 async function handleLogin(username, password){
  await facade.login(username, password);
  setUsername(username);
  setIsLoggedIn(true);
  navigate('/dashboard', { replace: true });
 }

  function handleLogout(){
    facade.logout();
    setIsLoggedIn(false);
    navigate('/login', { replace: true });
  }

   return (
    <Routes>
      <Route
        path="/login"
        element={
          isLoggedIn
            ? <Navigate to="/dashboard" replace />
            : <Login onLogin={handleLogin} />
        }
      />

      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route
            index
            element={
              <Dashboard
                onImport={() => navigate('/dashboard/cars/import')}
                showCars={() => navigate('/dashboard/cars')}
              />
            }
          />

          <Route
            path="cars"
            element={<ShowCars username={username} />}
          />

          <Route
            path="cars/import"
            element={<Import />}
          />
        </Route>
      </Route>

      <Route
        path="/"
        element={
          <Navigate
            to={isLoggedIn ? '/dashboard' : '/login'}
            replace
          />
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
