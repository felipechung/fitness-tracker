import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase.config';

export const useAddExercise = () => {
  const workoutsCollectionRef = collection(db, 'exercise');

  const addExercise = async ({ userId, exerciseName }) => {
    await addDoc(workoutsCollectionRef, {
      userId,
      exerciseName,
    });
  };
  return { addExercise };
};
