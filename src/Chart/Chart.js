import React from 'react';
import "./Chart.css";
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ chartData }) => {
  const data = {
    datasets: [
      {
        data: chartData,
        backgroundColor: ['#efb5b9', '#e8d166', '#eb895f', '#a666b0', '#02b38d', '#4dd5ff'],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: 10,
    },
  };

  return (
    <div style={{ width: '200px', height: '200px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Chart;
