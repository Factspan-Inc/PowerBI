import React from 'react';
import "./Chart.css";
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ chartData }) => {
  const data = {
    labels: ['60-70%', '70-80%', '80-90%','Above 90%','Below 60%','No Prob'],
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
  //   options: {
  //     plugins: {
  //       legend: {
  //         display: false,
          
  //       },
  //   }
    
    
  //     // tooltip: {
  //     //   callbacks: {
  //     //     label: 
  //     //     {
  //     //       display:true,
  //     //     },
  //     //   },
  //     // },
  //   },
  //   layout: {
  //     padding: 10,
  //   },
  // };
  const options = {
    legend: {
      display: false
    }
};
  

  return (
    <div style={{ width: '150px', height: '120px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Chart;
