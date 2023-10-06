import Chart from 'react-apexcharts';

export const TotalWeight = ({ workoutList, title }) => {
  const chartData = workoutList.map((workout) => ({
    x: workout.date, // x-axis will represent dates
    y: workout.exercises.reduce(
      (totalWeight, exercise) => totalWeight + (exercise.weight || 0),
      0
    ), // y-axis will represent total weight lifted in the workout
  }));

  const data = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: chartData.map((item) => item.x),
      },
      yaxis: {
        title: {
          text: 'kg', // Y-axis label
        },
      },
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
    <Chart
      options={data.options}
      series={data.series}
      type="line"
      width="500"
    />
  );
};
