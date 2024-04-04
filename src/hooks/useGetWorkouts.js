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

export const useGetWorkouts = () => {
  const [workoutList, setWorkoutList] = useState([]);
  const [weeklyWorkoutsCount, setWeeklyWorkoutsCount] = useState('');
  const { userInfo } = useAuth();

  const workoutsCollectionRef = collection(db, 'workouts');

  const getWorkoutList = async (filterOptions) => {
    let unsubscribe;
    try {
      let queryWorkouts = query(
        workoutsCollectionRef,
        where('userId', '==', userInfo.uid),
        orderBy('date')
      );

      if (filterOptions?.category) {
        queryWorkouts = query(
          queryWorkouts,
          where('category', '==', filterOptions.category)
        );
      }

      if (filterOptions?.exerciseName) {
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

  const getWeeklyWorkoutsCount = async () => {
    const startDate = new Date();
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 7);

    const startDateStr = startDate.toISOString().split('T')[0];
    const endDateStr = endDate.toISOString().split('T')[0];

    console.log(startDate, endDate);

    const queryWorkouts = query(
      workoutsCollectionRef,
      where('userId', '==', userInfo.uid),
      where('date', '>=', startDateStr),
      where('date', '<=', endDateStr),
      orderBy('date')
    );

    const unsubscribe = onSnapshot(queryWorkouts, (snapshot) => {
      setWeeklyWorkoutsCount(snapshot.size);
    });

    return () => unsubscribe();
  };

  useEffect(() => {
    getWorkoutList();
    getWeeklyWorkoutsCount();
  }, []);
  return {
    workoutList,
    getWorkoutList,
    weeklyWorkoutsCount,
  };
};
