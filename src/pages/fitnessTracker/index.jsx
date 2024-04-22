import { useState } from 'react';
import { useGetWorkouts } from '../../hooks/useGetWorkouts';
import { TotalBars } from '../../components/Charts/TotalBars';

import './index.css';
import BasicCard from '../../components/Card';
import {
  categoryOptions,
  getTotalReps,
  getTotalSets,
  getTotalWeight,
  transformDataToDonutSeries,
} from '../../utils';
import { DonutChart } from '../../components/Charts/DonutChart';
export const FitnessTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const { workoutList, getWorkoutList, weeklyWorkoutsCount } = useGetWorkouts({
    category: selectedCategory,
  });

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    getWorkoutList({ category: event.target.value });
  };

  const totalWeightData = getTotalWeight(workoutList);
  const totalRepsData = getTotalReps(workoutList);
  const totalSetsData = getTotalSets(workoutList);
  const { series, labels } = transformDataToDonutSeries(workoutList);

  console.log(workoutList.length);

  return (
    <div className="mainContainer">
      <div className="cardsContainer">
        <BasicCard
          title="Total workouts"
          value={workoutList.length.toString()}
        />
        <BasicCard
          title="Workouts this month"
          value={weeklyWorkoutsCount.toString()}
        />{' '}
        <BasicCard
          title="Workouts this week"
          value={weeklyWorkoutsCount.toString()}
        />
        <BasicCard
          title="Total weight lifted"
          value={weeklyWorkoutsCount.toString()}
        />
      </div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Total</option>
        {categoryOptions.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <div className="chartContainer">
        <TotalBars
          chartData={totalWeightData}
          title="Total weight"
          verticalLabel={'kg'}
        />

        <TotalBars chartData={totalRepsData} title="Total reps" />

        <TotalBars chartData={totalSetsData} title="Total sets" />
        <DonutChart
          title="Workout distribution"
          chartData={series}
          labels={labels}
        />
      </div>
    </div>
  );
};
