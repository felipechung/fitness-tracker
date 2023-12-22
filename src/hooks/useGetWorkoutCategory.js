import { useState, useEffect } from 'react';

import { db } from '../config/firebase.config';
import { query, collection, onSnapshot } from 'firebase/firestore';

export const useGetWorkoutCategory = () => {
  const [workoutCategoryList, setWorkoutCategoryList] = useState([]);

  const workoutsCollectionRef = collection(db, 'workoutCategory');

  const getWorkoutCategoryList = async () => {
    let unsubscribe;
    try {
      const queryWorkouts = query(workoutsCollectionRef);

      unsubscribe = onSnapshot(queryWorkouts, (snapshot) => {
        let docs = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          docs.push({ id: doc.id, name: data.name });
        });

        setWorkoutCategoryList(docs);
      });
    } catch (err) {
      console.err;
    }

    return () => unsubscribe();
  };

  useEffect(() => {
    getWorkoutCategoryList();
  }, []);

  return { workoutCategoryList };
};
