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
  const [monthlyWorkoutsCount, setMonthlyWorkoutsCount] = useState('');
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
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const startDate = new Date(now);
    if (now.getDay() === 0) {
      startDate.setDate(now.getDate() - 6);
    } else {
      startDate.setDate(now.getDate() - now.getDay() + 1);
    }
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6);

    const startDateStr = startDate.toISOString().split('T')[0];
    const endDateStr = endDate.toISOString().split('T')[0];

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

  const getMonthlyWorkoutsCount = async () => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const startDate = new Date(now.getFullYear(), now.getMonth(), 1);

    const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    const startDateStr = startDate.toISOString().split('T')[0];
    const endDateStr = endDate.toISOString().split('T')[0];

    const queryWorkouts = query(
      workoutsCollectionRef,
      where('userId', '==', userInfo.uid),
      where('date', '>=', startDateStr),
      where('date', '<=', endDateStr),
      orderBy('date')
    );

    const unsubscribe = onSnapshot(queryWorkouts, (snapshot) => {
      setMonthlyWorkoutsCount(snapshot.size);
    });

    return () => unsubscribe();
  };

  useEffect(() => {
    getWorkoutList();
    getWeeklyWorkoutsCount();
    getMonthlyWorkoutsCount();
  }, []);
  return {
    workoutList,
    getWorkoutList,
    weeklyWorkoutsCount,
    monthlyWorkoutsCount,
  };
};
