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
  

  return (
    <div style={{ width: '200px', height: '200px' }}>
      <Doughnut data={data}  />
    </div>
  );
};

export default ChartVpLeads;
