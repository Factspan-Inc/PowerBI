import React from 'react';
import "./ChartVpLeads.css";
import { Doughnut } from 'react-chartjs-2';

const ChartVpLeads = ({ chartData }) => {
  const data = {
    labels: ['60-70%', '70-80%', '80-90%','Above 90%','Below 60%','No Prob'],
    datasets: [
      {
        data: chartData,
        backgroundColor: ['#717BC5', '#F0E199', '#F0A787', '#A666B0', '#EC8FCA', '#4DD5FF'],
      },
    ],
  };
  const options = {
    legend: {
      display: false
    }
};

  return (
    <div style={{ width: '200px', height: '200px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ChartVpLeads;
