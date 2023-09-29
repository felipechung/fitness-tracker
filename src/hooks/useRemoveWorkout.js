import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase.config';

export const useRemoveWorkout = () => {
  const removeWorkout = async (workoutId) => {
    const workoutDocRef = doc(db, 'workouts', workoutId);
    await deleteDoc(workoutDocRef);
  };

  return { removeWorkout };
};
