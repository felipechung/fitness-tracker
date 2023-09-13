import { Routes, Route, Navigate } from 'react-router-dom';
import { Auth } from '../../pages/Auth';
import { SignUp } from '../../pages/SignUp';
import { routes } from '../routes';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path={routes.auth} element={<Auth />} />
      <Route path={routes.signUp} element={<SignUp />} />
      <Route path="*" element={<Navigate to={routes.auth} replace />} />
    </Routes>
  );
};
