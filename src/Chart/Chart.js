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
  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       display: false,
  //     },
  //     tooltip: {
  //       callbacks: {
  //         label: function (context) {
  //           return context.labels + ': ' + context.raw + 'M'; // Display label and value with 'M' suffix
  //         },
  //       },
  //     },
  //   },
  //   layout: {
  //     padding: 10,
  //   },
  // };
  
  

  return (
    <div style={{ width: '100px', height: '100px' }}>
      <Doughnut data={data} />
    </div>
  );
};

export default Chart;
