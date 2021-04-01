import React, {useEffect, useState} from 'react';
import Chart from 'chart.js'

const ButtonPopulateChart = (data)=>{
    let highPoint = [];
    let lowPoint = [];
    let label = []


    for (let i=0; i<data.data.length; i++){
        highPoint.push(parseFloat(data.data[i].highest));
        lowPoint.push(parseFloat(data.data[i].lowest));
        label.push(data.data[i].second);
    }


    function onClickFunction(){
        // console.log('buttonPopulate sier: ', data)
        // console.log('buttonPopulate sier: ', highPoint)
        // console.log('buttonPopulate sier: ', lowPoint)

        let ctx = document.getElementById('myChart').getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                labels: label,
                datasets: [{
                    label: 'Highest',
                    data: highPoint,
                    backgroundColor: [
                        'rgba(135, 135, 135, 0.3)',
                        'rgba(135, 135, 135, 0.3)',
                        'rgba(135, 135, 135, 0.3)',
                        'rgba(135, 135, 135, 0.3)',
                        'rgba(135, 135, 135, 0.3)',
                        'rgba(135, 135, 135, 0.3)'
                    ],
                    borderColor: [
                        'rgba(135, 135, 135, 1)',
                        'rgba(135, 135, 135, 1)',
                        'rgba(135, 135, 135, 1)',
                        'rgba(135, 135, 135, 1)',
                        'rgba(135, 135, 135, 1)',
                        'rgba(135, 135, 135, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            precision: 10
                        }
                    }]
                }
            }
        });
    }

    return(
        <button onClick={onClickFunction}>Toggle Chart</button>
    )
}

export default ButtonPopulateChart;