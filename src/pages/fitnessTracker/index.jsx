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
} from '../../utils';
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

  // const donutData = {
  //   series: [44, 55, 41, 17, 15],
  //   options: {
  //     chart: {
  //       type: 'donut',
  //     },
  //     title: {
  //       text: 'Teste',
  //       align: 'left',
  //       margin: 10,
  //       offsetX: 0,
  //       offsetY: 0,
  //       floating: false,
  //       style: {
  //         fontSize: '14px',
  //         fontWeight: 'bold',
  //         fontFamily: undefined,
  //         color: '#263238',
  //       },
  //     },
  //     responsive: [
  //       {
  //         breakpoint: 480,
  //         options: {
  //           chart: {
  //             width: 200,
  //           },
  //           legend: {
  //             position: 'bottom',
  //           },
  //         },
  //       },
  //     ],
  //   },
  // };
  return (
    <div className="mainContainer">
      <BasicCard
        title="Workouts this week"
        value={weeklyWorkoutsCount.toString()}
      />
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

        {/* <Chart
        options={donutData.options}
        series={donutData.series}
        type="donut"
      /> */}
      </div>
    </div>
  );
};
