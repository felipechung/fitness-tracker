export const getTotalWeight = (workoutList) => {
  const chartData = workoutList.map((workout) => ({
    x: workout.date,
    y: workout.exercises.reduce(
      (totalWeight, exercise) => totalWeight + (exercise.weight || 0),
      0
    ),
  }));
  return chartData;
};

export const getTotalReps = (workoutList) => {
  const chartData = workoutList.map((workout) => ({
    x: workout.date,
    y: workout.exercises.reduce(
      (totalReps, exercise) => totalReps + (exercise.reps || 0),
      0
    ),
  }));

  return chartData;
};

export const getTotalSets = (workoutList) => {
  const chartData = workoutList.map((workout) => ({
    x: workout.date,
    y: workout.exercises.reduce(
      (totalSets, exercise) => totalSets + (exercise.sets || 0),
      0
    ),
  }));

  return chartData;
};

export const transformDataToDonutSeries = (workouts) => {
  const categoryCounts = workouts.reduce((acc, workout) => {
    const { category } = workout;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const series = Object.values(categoryCounts);

  const labels = Object.keys(categoryCounts);

  return { series, labels };
};

export const categoryOptions = [
  'Chest',
  'Back',
  'Biceps',
  'Triceps',
  'Shoulder',
  'Leg',
];
