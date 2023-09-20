import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase.config';
export const useAddWorkout = () => {
  const workoutsCollectionRef = collection(db, 'workouts');

  const addWorkout = async () => {
    await addDoc(workoutsCollectionRef, {
      date: '',
      exercises: [],
    });
  };
  return { addWorkout };
};
