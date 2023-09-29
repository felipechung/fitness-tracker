import ClearIcon from '@mui/icons-material/Clear';
import './index.css';
import { useState } from 'react';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useRemoveWorkout } from '../../../hooks/useRemoveWorkout';
import AlertDialog from '../../../components/Dialog';

const ExpandMore = styled((props) => {
  // eslint-disable-next-line no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(() => ({
  borderRadius: '4px',
}));

export const WorkoutCard = ({ workout }) => {
  const [expanded, setExpanded] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);
  const { removeWorkout } = useRemoveWorkout();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const exercisesToShow = expanded
    ? workout.exercises
    : workout.exercises.slice(0, 3);

  const handleRemoveWorkout = async () => {
    await removeWorkout(workout.id);
  };

  return (
    <>
      <div className="cardContainer">
        <div className="cardHeader">
          <span className="cardTitle">
            {workout.workoutName} -{' '}
            <span className="date"> {workout.date}</span>
          </span>
          <ClearIcon
            color="danger"
            style={{ cursor: 'pointer' }}
            onClick={() => setOpenDialog(true)}
          />
        </div>
        <div className="cardBody">
          {exercisesToShow.map((exercise, index) => (
            <div key={index} className="exerciseRow">
              <span>{exercise.exerciseName}</span>
              <span>{exercise.sets} sets</span>
              <span>{exercise.reps} reps</span>
              <span>{exercise.weight} kg</span>
            </div>
          ))}
        </div>

        {workout.exercises.length > 3 && (
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            {expanded ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}
          </ExpandMore>
        )}
      </div>
      <AlertDialog
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        handleConfirm={handleRemoveWorkout}
        title={'Remove workout'}
        message={
          'Are you sure you want to remove this workout? This action is irreversible'
        }
      />
    </>
  );
};
