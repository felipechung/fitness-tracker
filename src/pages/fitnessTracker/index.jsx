import Chart from 'react-apexcharts';
export const FitnessTracker = () => {
  const data = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
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
    <div>
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        width="500"
      />

      <Chart
        options={data.options}
        series={data.series}
        type="line"
        width="500"
      />

      <Chart
        options={donutData.options}
        series={donutData.series}
        type="donut"
      />
    </div>
  );
};
