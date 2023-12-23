import { useState, useEffect } from 'react';

import { db } from '../config/firebase.config';
import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { useAuth } from '../contexts/Auth';

export const useGetWorkouts = (filterOptions) => {
  const [workoutList, setWorkoutList] = useState([]);
  const { userInfo } = useAuth();

  const workoutsCollectionRef = collection(db, 'workouts');

  const getWorkoutList = async () => {
    let unsubscribe;
    try {
      let queryWorkouts = query(
        workoutsCollectionRef,
        where('userId', '==', userInfo.uid),
        orderBy('date')
      );

      if (filterOptions.category) {
        queryWorkouts = query(
          queryWorkouts,
          where('category', '==', filterOptions.category)
        );
      }

      if (filterOptions.exerciseName) {
        queryWorkouts = query(
          queryWorkouts,
          where('exerciseName', '==', filterOptions.exerciseName)
        );
      }

      unsubscribe = onSnapshot(queryWorkouts, (snapshot) => {
        let docs = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });
        });

        setWorkoutList(docs);
      });
    } catch (err) {
      console.err;
    }

    return () => unsubscribe();
  };

  useEffect(() => {
    getWorkoutList();
  }, []);
  return { workoutList };
};
