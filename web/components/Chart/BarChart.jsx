/* eslint-disable no-unused-vars */
import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'People Using Our Application',
            data: [12, 19, 3, 5, 2, 3],
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const BarChart = () => <Bar data={data} options={options} />;

export default BarChart;
