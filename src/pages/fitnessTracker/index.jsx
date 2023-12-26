import { useState } from 'react';
import Chart from 'react-apexcharts';
import { useGetWorkouts } from '../../hooks/useGetWorkouts';
import { TotalWeight } from '../../components/Charts/TotalWeight';
import { TotalReps } from '../../components/Charts/TotalReps';
import { TotalSets } from '../../components/Charts/TotalSets';

import './index.css';
export const FitnessTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const { workoutList, getWorkoutList } = useGetWorkouts({
    category: selectedCategory,
  });

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    getWorkoutList({ category: event.target.value });
  };

  const data = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
      title: {
        text: 'Teste',
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          fontFamily: undefined,
          color: '#263238',
        },
      },
    },

    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  const donutData = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      title: {
        text: 'Teste',
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          fontFamily: undefined,
          color: '#263238',
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };
  return (
    <div className="chartContainer">
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="chest">Chest</option>
        <option value="back">Back</option>
      </select>
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        width="500"
      />

      <TotalWeight workoutList={workoutList} title="Total weight" />
      <TotalReps workoutList={workoutList} title="Total reps" />
      <TotalSets workoutList={workoutList} title="Total sets" />

      <Chart
        options={donutData.options}
        series={donutData.series}
        type="donut"
      />
    </div>
  );
};
