// import Chart from 'chart.js';
// import fs from 'fs';
//
//
// let barChartData = {
//     labels: ['00', '01', '02', '03', '04', '05', '06'],
//     datasets: [{
//         label: 'Dataset 1',
//         backgroundColor: [
//             window.chartColors.red,
//             window.chartColors.orange,
//             window.chartColors.yellow,
//             window.chartColors.green,
//             window.chartColors.blue,
//             window.chartColors.purple,
//             window.chartColors.red
//         ],
//         yAxisID: 'y-axis-1',
//         data: [
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor()
//         ]
//     }, {
//         label: 'Dataset 2',
//         backgroundColor: window.chartColors.grey,
//         yAxisID: 'y-axis-2',
//         data: [
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor(),
//             randomScalingFactor()
//         ]
//     }]
//
// };
//
// window.onload = function() {
//     var ctx = document.getElementById('canvas').getContext('2d');
//     window.myBar = new Chart(ctx, {
//         type: 'bar',
//         data: barChartData,
//         options: {
//             responsive: true,
//             title: {
//                 display: true,
//                 text: 'Chart.js Bar Chart - Multi Axis'
//             },
//             tooltips: {
//                 mode: 'index',
//                 intersect: true
//             },
//             scales: {
//                 yAxes: [{
//                     type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
//                     display: true,
//                     position: 'left',
//                     id: 'y-axis-1',
//                 }, {
//                     type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
//                     display: true,
//                     position: 'right',
//                     id: 'y-axis-2',
//                     gridLines: {
//                         drawOnChartArea: false
//                     }
//                 }],
//             }
//         }
//     });
// };
//
// document.getElementById('randomizeData').addEventListener('click', function() {
//     barChartData.datasets.forEach(function(dataset) {
//         dataset.data = dataset.data.map(function() {
//             return randomScalingFactor();
//         });
//     });
//     window.myBar.update();
// });
