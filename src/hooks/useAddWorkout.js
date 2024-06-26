import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase.config';

export const useAddWorkout = () => {
  const workoutsCollectionRef = collection(db, 'workouts');

  const addWorkout = async ({
    userId,
    date,
    exercises,
    workoutName,
    category,
  }) => {
    await addDoc(workoutsCollectionRef, {
      userId,
      date,
      workoutName,
      exercises,
      category,
    });
  };
  return { addWorkout };
};
