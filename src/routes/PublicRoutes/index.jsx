import { Routes, Route, Navigate } from 'react-router-dom';
import { Auth } from '../../pages/Auth/index.jsx';
import { SignUp } from '../../pages/SignUp/index.jsx';
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
