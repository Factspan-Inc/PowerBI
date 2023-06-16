import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import './ChartCxPerformance.css'


export const data = {
    labels :['Loss', 'Won', 'In Progress'],
    datasets: [
      {
        label: ['Loss', 'Won', 'In Progress'],
        data: [262, 680, 634],
        backgroundColor: [
            'rgb(232,209,102)',
            'rgb(230,143,150)',
            'rgb(77,213,255)'

        ],
        borderColor: [
            'rgb(232,209,102)',
            'rgb(230,143,150)',
            'rgb(77,213,255)'
        ],
        borderWidth: 1,
      },
    ],
};

// const options = {
//     plugins: {
//       legend: {
//         display: "false", // Hide the legend
//       },
//       labels: {
//         render: 'labels', // Display labels
//         position: 'bottom', // Position labels outside the doughnut chart
//         arc: true, // Show labels for each slice of the doughnut
//         font: {
//           weight: 'bold', // Make labels bold
//         },
//       },
//     },
//     scales: {
//       grid: {
//         display: false, // Remove grid lines
//       },
//     },
// };

// const labels =['Loss', 'Won', 'In Progress'];

const ChartCxPerformance = () => {
    
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column-reverse', marginLeft: '225px',marginBottom: '10px' }}>
        {/* {data.labels.map((label, index) => (
          <div key={index} style={{ display: 'flex',flexDirection:'row', alignItems: 'center', marginBottom: '5px', fontSize:'8px' }}>
            <span
              style={{
                display: 'inline-block',
                alignItems:'center',
                width: '12px',
                height: '12px',
                backgroundColor: data.datasets[0].backgroundColor[index],
                borderRadius: '50%',
                marginRight: '5px',
                fontSize:'8px'
              }}
            ></span>
            <span>{label}</span>
          </div>
          
        ))} */}
        <Doughnut data={data}   />
      </div>
    </div>
  );
}

export default ChartCxPerformance
