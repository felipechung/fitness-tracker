import * as yup from 'yup';
import { useFormik } from 'formik';
import { ModalComponent } from '../../../components/Modal';
import { SummaryCard } from './SummaryCard';

import './index.css';
import { useState } from 'react';
import { useAddWorkout } from '../../../hooks/useAddWorkout';
import { useAuth } from '../../../contexts/Auth';

export const WorkoutModal = ({ open, handleClose }) => {
  const [exerciseList, setExerciseList] = useState([]);
  const { userInfo } = useAuth();

  const { addWorkout } = useAddWorkout();

  const handleSubmit = (event) => {
    event.preventDefault();
    addWorkout({
      userId: userInfo.uid,
      date: '2023/09/20',
      workoutName: '',
      exercises: [
        {
          exerciseName: '',
          sets: '',
          reps: '',
          weight: '',
        },
      ],
    });
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
      date: yup.string().required('Campo obrigatório'),
      workoutName: yup.string().required('Campo obrigatório'),
      exerciseName: yup.string().required('Campo obrigatório'),
      sets: yup.string().required('Campo obrigatório'),
      reps: yup.string().required('Campo obrigatório'),
      weight: yup.string().required('Campo obrigatório'),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
      handleClose();
    },
  });

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
      }
    });
  };

  const deleteExercise = (indexToDelete) => {
    setExerciseList((prevExerciseList) => {
      return prevExerciseList.filter((_, index) => index !== indexToDelete);
    });
  };

  return (
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
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
              />
              {formik.touched.date && formik.errors.date && (
                <div className="errorMessage">Campo obrigatório</div>
              )}
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
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.workoutName}
              />
            </div>
            {formik.touched.workoutName && formik.errors.workoutName && (
              <div className="errorMessage">Campo obrigatório</div>
            )}
          </div>
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.exerciseName}
              />
              {formik.touched.exerciseName && formik.errors.exerciseName && (
                <div className="errorMessage">Campo obrigatório</div>
              )}
            </div>

            <div className="inputGroup">
              <label htmlFor="sets" className="whiteBackground">
                # of Sets
              </label>
              <input
                type="number"
                id="sets"
                name="sets"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sets}
              />
              {formik.touched.sets && formik.errors.sets && (
                <div className="errorMessage">Campo obrigatório</div>
              )}
            </div>

            <div className="inputGroup">
              <label htmlFor="reps" className="whiteBackground">
                # of Reps
              </label>
              <input
                type="number"
                id="reps"
                name="reps"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.reps}
              />
              {formik.touched.reps && formik.errors.reps && (
                <div className="errorMessage">Campo obrigatório</div>
              )}
            </div>

            <div className="inputGroup">
              <label htmlFor="weight" className="whiteBackground">
                Weight
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.weight}
              />
              {formik.touched.weight && formik.errors.weight && (
                <div className="errorMessage">Campo obrigatório</div>
              )}
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

        <div className="buttonsContainer">
          <button type="submit">Add Workout</button>
        </div>
      </form>
    </ModalComponent>
  );
};
