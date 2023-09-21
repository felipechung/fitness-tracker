import { useState } from 'react';
import { useAuth } from '../../contexts/Auth';
import './index.css';
import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';
import { useAddWorkout } from '../../hooks/useAddWorkout';
import { WorkoutModal } from './WorkoutModal';

export const Workouts = () => {
  const [open, setOpen] = useState(false);

  const { userInfo } = useAuth();

  const { addWorkout } = useAddWorkout();

  const handleSubmit = (event) => {
    event.preventDefault();
    addWorkout({
      userId: userInfo.uid,
      date: '2023/09/20',
      exercises: [],
    });
  };
  return (
    <div className="workoutPage">
      <div className="header">
        <h1>Workouts</h1>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setOpen(true)}
          style={{ width: '100px', height: '37px' }}
        >
          <AddIcon />
          <span>Add</span>
        </Button>
      </div>
      <WorkoutModal
        open={open}
        handleSubmit={handleSubmit}
        handleClose={() => setOpen(false)}
      />
      <div className="imgContainer">
        <img
          src="/training.svg"
          alt="Woman working out"
          width="350"
          height="450"
        />
      </div>
    </div>
  );
};
