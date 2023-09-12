import { PrivateBase } from "../../components/privateBase";
import { Route, Navigate, Routes } from "react-router-dom";
import { FitnessTracker } from "../../pages/fitnessTracker";

export const PrivateRoutes = () => {
  return (
    <PrivateBase>
      <Routes>
        <Route path="/fitness-tracker" element={<FitnessTracker />} />
        <Route
          path="*"
          element={<Navigate to={"/fitness-tracker"} replace />}
        />
      </Routes>
    </PrivateBase>
  );
};
