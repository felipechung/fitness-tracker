import Chart from 'react-apexcharts';

export const DonutChart = ({ chartData, title, labels }) => {
  const donutData = {
    series: chartData,
    options: {
      chart: {
        type: 'donut',
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
          color: 'var(--text-color)',
        },
      },
      labels: labels, // Adding labels for each segment
      legend: {
        labels: {
          colors: 'var(--text-color)',
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
    <Chart
      options={donutData.options}
      series={donutData.series}
      type="donut"
      width={600}
      height={400}
    />
  );
};
