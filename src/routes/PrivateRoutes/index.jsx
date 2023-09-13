import { PrivateBase } from '../../components/privateBase';
import { Route, Navigate, Routes } from 'react-router-dom';
import { FitnessTracker } from '../../pages/FitnessTracker';
import { routes } from '../routes';

export const PrivateRoutes = () => {
  return (
    <PrivateBase>
      <Routes>
        <Route path={routes.dashboard} element={<FitnessTracker />} />
        <Route path={routes.workouts} element={<FitnessTracker />} />
        <Route path={routes.trainingPlan} element={<FitnessTracker />} />
        <Route path={routes.settings} element={<FitnessTracker />} />
        <Route path="*" element={<Navigate to={routes.dashboard} replace />} />
      </Routes>
    </PrivateBase>
  );
};
