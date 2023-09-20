import { useState } from 'react';
import { useAuth } from '../../contexts/Auth';
import './index.css';
import { ModalComponent } from '../../components/Modal';
import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';
import { useAddWorkout } from '../../hooks/useAddWorkout';
export const Workouts = () => {
  const [open, setOpen] = useState(false);
  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const { userInfo } = useAuth();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          onClick={handleOpen}
          style={{ width: '100px', height: '37px' }}
        >
          <AddIcon />
          <span>Add</span>
        </Button>
      </div>
      <ModalComponent open={open} handleClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="Exercise Name" className="whiteBackground">
              Exercise Name
            </label>
            <input
              type="text"
              id="exerciseName"
              name="exerciseName"
              required
              value={exerciseName}
              onChange={(event) => setExerciseName(event.target.value)}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="sets" className="whiteBackground">
              # of Sets
            </label>
            <input
              type="text"
              id="sets"
              name="sets"
              required
              value={sets}
              onChange={(event) => setSets(event.target.value)}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="reps" className="whiteBackground">
              # of Reps
            </label>
            <input
              type="text"
              id="reps"
              name="reps"
              required
              value={reps}
              onChange={(event) => setReps(event.target.value)}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="weight" className="whiteBackground">
              Weight
            </label>
            <input
              type="text"
              id="weight"
              name="weight"
              required
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div className="buttonsContainer">
            <button type="submit">Add Workout</button>
          </div>
        </form>
      </ModalComponent>
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
