import { Route, Navigate, Routes } from 'react-router-dom';
import { PrivateBase } from '../../components/PrivateBase';
import { routes } from '../routes';
import { FitnessTracker } from '../../pages/FitnessTracker/index.jsx';
import { Workouts } from '../../pages/Workouts/index.jsx';

export const PrivateRoutes = () => {
  return (
    <PrivateBase>
      <Routes>
        <Route path={routes.dashboard} element={<FitnessTracker />} />
        <Route path={routes.workouts} element={<Workouts />} />
        <Route path={routes.trainingPlan} element={<FitnessTracker />} />
        <Route path={routes.settings} element={<FitnessTracker />} />
        <Route path="*" element={<Navigate to={routes.dashboard} replace />} />
      </Routes>
    </PrivateBase>
  );
};
