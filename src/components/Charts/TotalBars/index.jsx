import Chart from 'react-apexcharts';

export const TotalBars = ({ chartData, title, verticalLabel }) => {
  const data = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: chartData.map((item) => item.x),
        labels: {
          style: {
            colors: 'var(--text-color)',
          },
        },
      },
      yaxis: {
        title: {
          text: verticalLabel, // Y-axis label
          style: {
            color: 'var(--text-color)',
          },
        },
        labels: {
          style: {
            colors: 'var(--text-color)',
          },
        },
      },
      colors: ['var(--highlight-color'],
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
          color: 'var(--text-color)',
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
