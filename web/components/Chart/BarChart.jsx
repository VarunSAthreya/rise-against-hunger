/* eslint-disable no-unused-vars */
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    LineElement,
    Tooltip,
    Legend,
    PointElement
);

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
