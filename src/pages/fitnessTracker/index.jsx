import { useState } from 'react';
import { useGetWorkouts } from '../../hooks/useGetWorkouts';
import { TotalWeight } from '../../components/Charts/TotalWeight';
import { TotalReps } from '../../components/Charts/TotalReps';
import { TotalSets } from '../../components/Charts/TotalSets';

import './index.css';
import BasicCard from '../../components/Card';
export const FitnessTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const { workoutList, getWorkoutList, weeklyWorkoutsCount } = useGetWorkouts({
    category: selectedCategory,
  });

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    getWorkoutList({ category: event.target.value });
  };

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
        <option value="chest">Chest</option>
        <option value="back">Back</option>
      </select>
      <div className="chartContainer">
        <TotalWeight workoutList={workoutList} title="Total weight" />
        <TotalReps workoutList={workoutList} title="Total reps" />
        <TotalSets workoutList={workoutList} title="Total sets" />
        {/* <Chart
        options={donutData.options}
        series={donutData.series}
        type="donut"
      /> */}
      </div>
    </div>
  );
};
