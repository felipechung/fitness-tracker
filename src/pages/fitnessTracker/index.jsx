import { useState } from 'react';
import { useGetWorkouts } from '../../hooks/useGetWorkouts';
import { TotalBars } from '../../components/Charts/TotalBars';

import MenuItem from '@mui/material/MenuItem';

import './index.css';
import BasicCard from '../../components/Card';
import {
  categoryOptions,
  getTotalReps,
  getTotalSets,
  getTotalWeight,
  sumTotalWeight,
  transformDataToDonutSeries,
} from '../../utils';
import { DonutChart } from '../../components/Charts/DonutChart';
import { CustomSelect } from '../../components/CustomSelect';
export const FitnessTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState('Chest');

  const {
    workoutList,
    getWorkoutList,
    weeklyWorkoutsCount,
    monthlyWorkoutsCount,
  } = useGetWorkouts({
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

  const totalWeightCount = sumTotalWeight(workoutList);

  return (
    <div className="mainContainer">
      <div className="cardsContainer">
        <BasicCard
          title="Total workouts"
          value={workoutList.length.toString()}
        />
        <BasicCard
          title="Workouts this month"
          value={monthlyWorkoutsCount.toString()}
        />{' '}
        <BasicCard
          title="Workouts this week"
          value={weeklyWorkoutsCount.toString()}
        />
        <BasicCard
          title="Total weight lifted"
          value={totalWeightCount}
          unity="kg"
        />
      </div>

      <CustomSelect
        selectedOption={selectedCategory}
        handleChange={handleCategoryChange}
      >
        {categoryOptions.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </CustomSelect>

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
