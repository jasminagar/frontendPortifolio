
import { Navigate, Outlet } from 'react-router';
import facade from '../services/apiFacade';

function ProtectedRoute() {
  if (!facade.loggedIn()) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
