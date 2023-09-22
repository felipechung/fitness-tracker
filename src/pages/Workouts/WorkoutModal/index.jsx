import * as yup from 'yup';
import { useFormik } from 'formik';
import { ModalComponent } from '../../../components/Modal';
import { SummaryCard } from './SummaryCard';

import './index.css';

export const WorkoutModal = ({ handleSubmit, open, handleClose }) => {
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
    },
  });

  console.log(formik.values);

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
