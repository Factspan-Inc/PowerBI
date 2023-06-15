import React from 'react'
import { Bar } from 'react-chartjs-2';
  
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Revenue MoM%',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: [78,30,24,15,10,64,15],
    },
    {
      type: 'bar',
      label: 'Revenue',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [25,67,87,57,34,46,52],
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 1,
    }
  ],
};



const ChartMulti = () => {
  return (
    <Bar type='bar' data={data}  />
  );
}

export default ChartMulti
