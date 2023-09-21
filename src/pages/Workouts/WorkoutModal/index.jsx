import { ModalComponent } from '../../../components/Modal';
import { useState } from 'react';
import './index.css';
import { SummaryCard } from './SummaryCard';

export const WorkoutModal = ({ handleSubmit, open, handleClose }) => {
  const [date, setDate] = useState('');
  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  return (
    <ModalComponent open={open} handleClose={handleClose} width={600}>
      <form onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="date" className="whiteBackground">
            Date
          </label>
          <input
            type="text"
            id="date"
            name="date"
            required
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div className="formContainer">
          <div className="formColumn">
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

            <button type="submit" className="confirmButton">
              Add Exercise
            </button>
          </div>
          <div className="formColumn">
            <SummaryCard />
          </div>
        </div>

        <div className="buttonsContainer">
          <button type="submit">Add Workout</button>
        </div>
      </form>
    </ModalComponent>
  );
};
