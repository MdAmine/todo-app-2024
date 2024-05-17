

import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ authenticated}) =>{
    
    return authenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;

