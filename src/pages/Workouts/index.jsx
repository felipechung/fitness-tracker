import { useState } from 'react';
import './index.css';
import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';
import { WorkoutModal } from './WorkoutModal';
import { useGetWorkouts } from '../../hooks/useGetWorkouts';
import { WorkoutCard } from './WorkoutCard';

export const Workouts = () => {
  const [open, setOpen] = useState(false);

  const { workoutList } = useGetWorkouts();

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
      <WorkoutModal open={open} handleClose={() => setOpen(false)} />
      {!workoutList && (
        <div className="imgContainer">
          <img
            src="/training.svg"
            alt="Woman working out"
            width="300"
            height="320"
          />
          <span className="emptyMessage">Ready to work out?</span>
          <span className="emptyMessage">
            Begin by adding your first workout!
          </span>
        </div>
      )}
      <div className="workoutCardsContainer">
        {workoutList.map((workout) => {
          return <WorkoutCard key={workout.id} workout={workout} />;
        })}
      </div>
    </div>
  );
};
