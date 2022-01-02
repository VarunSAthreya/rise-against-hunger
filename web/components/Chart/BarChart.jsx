/* eslint-disable no-unused-vars */
import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['Adults', 'Children', 'Male', 'Female'],
    datasets: [
        {
            label: 'People fed by us.',
            borderWidth: 1,
            backgroundColor: '#ffb24f',
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
