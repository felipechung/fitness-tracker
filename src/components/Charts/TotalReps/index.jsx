import Chart from 'react-apexcharts';

export const TotalReps = ({ workoutList, title }) => {
  const chartData = workoutList.map((workout) => ({
    x: workout.date,
    y: workout.exercises.reduce(
      (totalReps, exercise) => totalReps + (exercise.reps || 0),
      0
    ),
  }));

  const data = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: chartData.map((item) => item.x),
      },
      yaxis: {},
      title: {
        text: title,
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
        data: chartData.map((item) => item.y),
      },
    ],
  };

  return (
    <Chart options={data.options} series={data.series} type="bar" width="500" />
  );
};
