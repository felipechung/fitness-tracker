import './index.css';
import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';
export const Workouts = () => {
  return (
    <div className="workoutPage">
      <div className="header">
        <h1>Workouts</h1>
        <Button
          color="primary"
          variant="contained"
          onClick={() => console.log('test')}
          style={{ width: '100px', height: '37px' }}
        >
          <AddIcon />
          <span>Add</span>
        </Button>
      </div>
      <div>
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
