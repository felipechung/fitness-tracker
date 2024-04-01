import * as yup from 'yup';
import { useFormik } from 'formik';
import { ModalComponent } from '../../../components/Modal';
import { SummaryCard } from './SummaryCard';

import './index.css';
import { useState } from 'react';
import { useAddWorkout } from '../../../hooks/useAddWorkout';
import { useAuth } from '../../../contexts/Auth';
import { CustomizedSnackbar } from '../../../components/Snackbar';

export const WorkoutModal = ({ open, handleClose }) => {
  const [exerciseList, setExerciseList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [snackType, setSnackType] = useState('error');

  const { userInfo } = useAuth();
  const { addWorkout } = useAddWorkout();

  const workoutCategoryList = [
    'Chest',
    'Triceps',
    'Back',
    'Biceps',
    'Leg',
    'Shoulder',
  ];

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      date: '',
      workoutName: '',
      exerciseName: '',
      sets: '',
      reps: '',
      weight: '',
    },
    validationSchema: yup.object({
      date: yup.string().required('Required field'),
      workoutName: yup.string().required('Required field'),
      exerciseName: yup.string().required('Required field'),
      sets: yup.string().required('Required field'),
      reps: yup.string().required('Required field'),
      weight: yup.string().required('Required field'),
    }),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    await addWorkout({
      userId: userInfo.uid,
      date: formik.values.date,
      workoutName: formik.values.workoutName,
      exercises: exerciseList,
      category: selectedCategory,
    });
    setOpenSnack(true);
    setSnackMessage('Workout added!');
    setSnackType('success');
    formik.resetForm();
    setExerciseList([]);
    handleClose();
  };

  const handleAddExercise = () => {
    formik.setTouched({
      workoutName: true,
      date: true,
      exerciseName: true,
      sets: true,
      reps: true,
      weight: true,
    });
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setExerciseList([
          ...exerciseList,
          {
            exerciseName: formik.values.exerciseName,
            sets: formik.values.sets,
            reps: formik.values.reps,
            weight: formik.values.weight,
          },
        ]);

        formik.setValues({
          ...formik.values,
          exerciseName: '',
          sets: '',
          reps: '',
          weight: '',
        });
      } else {
        setSnackType('error');
        setSnackMessage('Missing fields');
        setOpenSnack(true);
      }
    });
  };

  const deleteExercise = (indexToDelete) => {
    setExerciseList((prevExerciseList) => {
      return prevExerciseList.filter((_, index) => index !== indexToDelete);
    });
  };

  return (
    <>
      <ModalComponent open={open} handleClose={handleClose} width={600}>
        <form onSubmit={formik.handleSubmit}>
          <div className="formContainer">
            <div className="dateInputColumn">
              <div className="inputGroup">
                <label htmlFor="date" className="whiteBackground">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.date}
                />
              </div>
            </div>
            <div className="formColumn">
              <div className="inputGroup">
                <label htmlFor="workoutName" className="whiteBackground">
                  Workout Name
                </label>
                <input
                  type="text"
                  id="workoutName"
                  name="workoutName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.workoutName}
                />
              </div>
            </div>
          </div>

          <div className="formContainer">
            <div className="formColumn">
              <div className="inputGroup">
                <label htmlFor="Category" className="whiteBackground">
                  Category
                </label>

                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  {workoutCategoryList.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputGroup">
                <label htmlFor="Exercise Name" className="whiteBackground">
                  Exercise Name
                </label>
                <input
                  type="text"
                  id="exerciseName"
                  name="exerciseName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.exerciseName}
                />
              </div>

              <div className="inputGroup">
                <label htmlFor="sets" className="whiteBackground">
                  # of Sets
                </label>
                <input
                  type="number"
                  id="sets"
                  name="sets"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sets}
                />
              </div>

              <div className="inputGroup">
                <label htmlFor="reps" className="whiteBackground">
                  # of Reps
                </label>
                <input
                  type="number"
                  id="reps"
                  name="reps"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.reps}
                />
              </div>

              <div className="inputGroup">
                <label htmlFor="weight" className="whiteBackground">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.weight}
                />
              </div>

              <button
                type="button"
                className="confirmButton"
                onClick={handleAddExercise}
              >
                Add Exercise
              </button>
            </div>
            {!!exerciseList.length && (
              <div className="formColumn">
                {exerciseList.map((exercise, index) => (
                  <SummaryCard
                    exercise={exercise}
                    key={index}
                    handleDelete={() => deleteExercise(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {!!exerciseList.length && (
            <div className="buttonsContainer">
              <button type="submit" onClick={handleSubmit}>
                Add Workout
              </button>
            </div>
          )}
        </form>
      </ModalComponent>
      <CustomizedSnackbar
        open={openSnack}
        handleClose={handleCloseSnack}
        message={snackMessage}
        type={snackType}
      />
    </>
  );
};
