import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';


  
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
);

export const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
};

  
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
      yAxisID: 'y'
    },
    {
      type: 'bar',
      label: 'Revenue',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [25,67,87,57,34,46,52],
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 1,
      yAxisID: 'y1',
    }
  ],
};



const ChartMulti = () => {
  return (
    <Bar type="bar" data={data} options={options}  />
  );
}

export default ChartMulti
