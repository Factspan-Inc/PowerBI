import React from 'react';
import "./ChartVpLeads.css";
import { Doughnut } from 'react-chartjs-2';

const ChartVpLeads = ({ chartData }) => {
  const data = {
    datasets: [
      {
        data: chartData,
        backgroundColor: ['#717BC5', '#F0E199', '#F0A787', '#A666B0', '#EC8FCA', '#4DD5FF'],
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

export default ChartVpLeads;
