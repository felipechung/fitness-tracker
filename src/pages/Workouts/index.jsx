import { useState } from 'react';
import './index.css';
import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';
import { WorkoutModal } from './WorkoutModal';

export const Workouts = () => {
  const [open, setOpen] = useState(false);

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
