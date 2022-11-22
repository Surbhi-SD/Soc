import React, { useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
//import ChartDataLabels from 'chartjs-plugin-datalabels';
//import 'chartjs-adapter-date-fns';
//import TimeLineChart from './TimeLineChart.js';



//gradient block
const bar_ctx = document.getElementById('myChart').getContext('2d');

const background_1 = bar_ctx.createLinearGradient(0, 0, 1141, 0);
background_1.addColorStop(0.1, '#54B534');
background_1.addColorStop(0.2, '#F5BB00');
background_1.addColorStop(0.4, '#E0312B');

const background_2 = bar_ctx.createLinearGradient(0, 0, 1141, 0);
background_2.addColorStop(0.4, '#E0312B');
background_2.addColorStop(0.6, '#F5BB00');
background_2.addColorStop(0.7, '#E0312B');

const background_3 = bar_ctx.createLinearGradient(0, 0, 1141, 0);
background_3.addColorStop(0.7, '#E0312B');
background_3.addColorStop(0.9, '#F5BB00');
background_3.addColorStop(0.99, '#65BC48');
background_3.addColorStop(1, '#54B534');


//setup block
const data = {
    labels: ['Tr40-225_V1'],
datasets: [{
    label: 'SoC Level 100-75%',
    data: [1],
    backgroundColor: [background_1],
     borderWidth: 1
},
{
    label: 'Soc Level 75-50%',
    data: [2],
    backgroundColor: [background_1],
    borderWidth: 1
},
{
    label: 'SoC Level 75-50%',
    data: [3],
    backgroundColor: [background_1],
    borderWidth: 1
},
{
    label: 'SoC Level 50-25%',
    data: [4],
    backgroundColor: [background_1],
    borderWidth: 1
},
{
    label: 'SoC Level 50-25%',
    data: [5],
    backgroundColor: [background_1],
    borderWidth: 1
},

{
    label: 'SoC Level 25-0%',
    data: [6],
    backgroundColor: [background_1],
    borderWidth: 1
},

{
    label: 'SoC Level 25-0%',
    data: [7],
    backgroundColor: [background_1],
    borderWidth: 1
},

{    
    label: 'SoC Level 25-0%',
    data: [8],
    backgroundColor: [background_2],
    borderWidth: 1
},
{    
    label: 'SoC Level 0-25%',
    data: [9],
    backgroundColor: [background_2],
    borderWidth: 1
},
{    
    label: 'SoC Level 25-50%',
    data: [10],
    backgroundColor: [background_2],
    borderWidth: 1
},
{    
    label: 'SoC Level 50-25%',
    data: [11],
    backgroundColor: [background_2],
    borderWidth: 1
},

{    
    label: 'SoC Level 50-25%',
    data: [12],
    backgroundColor: [background_2],
    borderWidth: 1
},
{    
    label: 'SoC Level 25-0%',
    data: [13],
    backgroundColor: [background_2],
    borderWidth: 1
},
{    
    label: 'SoC Level 0-25%',
    data: [14],
    backgroundColor: [background_2],
    borderWidth: 1
},
{    
    label: 'SoC Level 0-25%',
    data: [15],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 25-50%',
    data: [16],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 25-50%',
    data: [17],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 25-50%',
    data: [18],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 50-75%',
    data: [19],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 50-75%',
    data: [20],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 50-75%',
    data: [21],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 75-100%',
    data: [22],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 75%-100%',
    data: [23, 23],
    backgroundColor: [background_3, background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 75-100%',
    data: [24],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 75-100%',
    data: [25],
    backgroundColor: [background_3],
    borderWidth: 1
}
]
};

//config block
const config = {
type: 'bar',
data,
//plugins: [ChartDataLabels],
options: {
    layout: {
     padding: {
        right: 18
     }
    },
    hoverRadius: 30,
    //events: [],
    plugins: {
        legend: {
            display: false,
            labels: {
                filter: (legendItem, chartData) => (legendItem.text !== 'SoC Level 25%-55%')
              }
        },
        tooltip:{
            enabled: true
        }
        /*datalabels: {
            color: 'black',
            anchor: 'end',
            align: 'left',
        },*/
        
    
     },
    responsive: true,
    showTooltips: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
        x: {
            stacked: false,
            title: {
                display: true,
                text: 'Time (hr)'
            },
            scaleLabel: {
                display: true,
                labelString: 'Value'
              },
              min: 0,
              max: 24,
              ticks: {
                /*min: 0,
                max: 5,*/
                stepSize: 1,
                /*suggestedMin: 0.5,
                suggestedMax: 5.5,*/
                callback: function(label, index, labels) {
                  switch (label) {
                    case 0:
                      return '00 AM';
                    case 1:
                      return '1 AM';
                    case 2:
                      return '2 AM';
                    case 3:
                      return '3 AM';
                    case 4:
                      return '4 AM';
                    case 5:
                      return '5 AM';
                    case 6:
                      return '6 AM';
                    case 7:
                      return '7 AM';
                    case 8:
                      return '8 AM';
                    case 9:
                        return '9 AM';
                        case 10:
                      return '10 AM';
                      case 11:
                      return '11 AM';
                      case 12:
                      return '12 PM';
                      case 13:
                      return '1 PM';
                      case 14:
                      return '2 PM';
                      case 15:
                      return '3 PM';
                      case 16:
                      return '4 PM';
                      case 17:
                      return '5 PM';
                      case 18:
                      return '6 PM';
                      case 19:
                      return '7 PM';
                      case 20:
                      return '8 PM';
                      case 21:
                      return '9 PM';
                      case 22:
                      return '10 PM';
                      case 23:
                      return '11 PM';
                      case 24:
                        return '00 AM';
                  }
                }
            }
            },
        y: {
            stacked: true,
            beginAtZero: true
            
        }
    }

}
};



//init and render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
    
    );
//setup block
const data1 = {
    labels: ['Tr40-225_V2'],
datasets: [{
    label: 'SoC Level 100-75%',
    data: [1],
    backgroundColor: [background_1],
     borderWidth: 1
},
{
    label: 'Soc Level 75-50%',
    data: [2],
    backgroundColor: [background_1],
    borderWidth: 1
},
{
    label: 'SoC Level 75-50%',
    data: [3],
    backgroundColor: [background_1],
    borderWidth: 1
},
{
    label: 'SoC Level 50-25%',
    data: [4],
    backgroundColor: [background_1],
    borderWidth: 1
},
{
    label: 'SoC Level 50-25%',
    data: [5],
    backgroundColor: [background_1],
    borderWidth: 1
},

{
    label: 'SoC Level 25-0%',
    data: [6],
    backgroundColor: [background_1],
    borderWidth: 1
},

{
    label: 'SoC Level 25-0%',
    data: [7],
    backgroundColor: [background_1],
    borderWidth: 1
},

{    
    label: 'SoC Level 25-0%',
    data: [8],
    backgroundColor: [background_2],
    borderWidth: 1
},
{    
    label: 'SoC Level 0-25%',
    data: [9],
    backgroundColor: [background_2],
    borderWidth: 1
},
{    
    label: 'SoC Level 25-50%',
    data: [10],
    backgroundColor: [background_2],
    borderWidth: 1
},
{    
    label: 'SoC Level 50-25%',
    data: [11],
    backgroundColor: [background_2],
    borderWidth: 1
},

{    
    label: 'SoC Level 50-25%',
    data: [12],
    backgroundColor: [background_2],
    borderWidth: 1
},
{    
    label: 'SoC Level 25-0%',
    data: [13],
    backgroundColor: [background_2],
    borderWidth: 1
},
{    
    label: 'SoC Level 0-25%',
    data: [14],
    backgroundColor: [background_2],
    borderWidth: 1
},
{    
    label: 'SoC Level 0-25%',
    data: [15],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 25-50%',
    data: [16],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 25-50%',
    data: [17],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 25-50%',
    data: [18],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 50-75%',
    data: [19],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 50-75%',
    data: [20],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 50-75%',
    data: [21],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 75-100%',
    data: [22],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 75%-100%',
    data: [23, 23],
    backgroundColor: [background_3, background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 75-100%',
    data: [24],
    backgroundColor: [background_3],
    borderWidth: 1
},
{    
    label: 'SoC Level 75-100%',
    data: [25],
    backgroundColor: [background_3],
    borderWidth: 1
}
]
};

//config block
const config1 = {
type: 'bar',
data: data1,
//plugins: [ChartDataLabels],
options: {
    layout: {
     padding: {
        right: 18
     }
    },
    hoverRadius: 30,
    //events: [],
    plugins: {
        legend: {
            display: false,
            labels: {
                filter: (legendItem, chartData) => (legendItem.text !== 'SoC Level 25%-55%')
              }
        },
        tooltip:{
            enabled: true
        }
        /*datalabels: {
            color: 'black',
            anchor: 'end',
            align: 'left',
        },*/
        
    
     },
    responsive: true,
    showTooltips: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
        x: {
            stacked: false,
            title: {
                display: true,
                text: 'Time (hr)'
            },
            scaleLabel: {
                display: true,
                labelString: 'Value'
              },
              min: 0,
              max: 24,
              ticks: {
                /*min: 0,
                max: 5,*/
                stepSize: 1,
                /*suggestedMin: 0.5,
                suggestedMax: 5.5,*/
                callback: function(label, index, labels) {
                  switch (label) {
                    case 0:
                      return '00 AM';
                    case 1:
                      return '1 AM';
                    case 2:
                      return '2 AM';
                    case 3:
                      return '3 AM';
                    case 4:
                      return '4 AM';
                    case 5:
                      return '5 AM';
                    case 6:
                      return '6 AM';
                    case 7:
                      return '7 AM';
                    case 8:
                      return '8 AM';
                    case 9:
                        return '9 AM';
                        case 10:
                      return '10 AM';
                      case 11:
                      return '11 AM';
                      case 12:
                      return '12 PM';
                      case 13:
                      return '1 PM';
                      case 14:
                      return '2 PM';
                      case 15:
                      return '3 PM';
                      case 16:
                      return '4 PM';
                      case 17:
                      return '5 PM';
                      case 18:
                      return '6 PM';
                      case 19:
                      return '7 PM';
                      case 20:
                      return '8 PM';
                      case 21:
                      return '9 PM';
                      case 22:
                      return '10 PM';
                      case 23:
                      return '11 PM';
                      case 24:
                        return '00 AM';
                  }
                }
            }
            },
        y: {
            stacked: true,
            beginAtZero: true
            
        }
    }

}
};



//init and render block
const myChartNext = new Chart(
    document.getElementById('myChartNext'),
    config1
    
    );


    

    const TimeChart = () => {
        return (
          <div>
            <Bar data={data} />
            <Bar data={data1} />
          </div>
        );
      };

  export default TimeChart;