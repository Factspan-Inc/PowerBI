import React from 'react';
import "./ChartVpLeads.css";
import { Doughnut } from 'react-chartjs-2';

const ChartVpLeads = ({ chartData }) => {
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
    <div style={{ width: '400px', height: '400px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ChartVpLeads;
