import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';

function ProtectedRoute() {
  const firebase = useFirebase();

  // Assuming useFirebase returns an object with an isLoggedIn property
  const { isLoggedIn } = firebase;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
