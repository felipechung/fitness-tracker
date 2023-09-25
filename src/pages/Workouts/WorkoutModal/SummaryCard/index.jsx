import './index.css';
import ClearIcon from '@mui/icons-material/Clear';
export const SummaryCard = ({ exercise, handleDelete }) => {
  return (
    <div className="summaryCard">
      <span>
        {exercise.exerciseName} - {exercise.sets} sets - {exercise.reps} reps -{' '}
        {exercise.weight} kg
      </span>{' '}
      <ClearIcon
        color="danger"
        style={{ cursor: 'pointer' }}
        onClick={handleDelete}
      />
    </div>
  );
};
