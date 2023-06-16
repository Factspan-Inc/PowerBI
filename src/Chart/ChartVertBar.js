import React from 'react'
import { Bar } from 'react-chartjs-2';

export const options = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'India',
        data: [1,2,3,4,5,4,2],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Kenya',
        data: [10,12,14,16,18,14,10],
        backgroundColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'South Africa',
        data: [20,25,30,32,28,26,22],
        backgroundColor: 'rgb(53, 162, 235)',
      },
    ],
  };
const ChartVertBar = () => {
  return (
    <Bar width={500} height={175} horizontal options={options} data={data} />
  );
}

export default ChartVertBar
