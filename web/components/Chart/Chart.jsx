/* eslint-disable no-unused-vars */
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const options = {
    maintainAspectRatio: true,
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                borderDash: [3, 3],
            },
        },
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};

const Chart = ({ data }) => <Line data={data} options={options} />;

export default Chart;
