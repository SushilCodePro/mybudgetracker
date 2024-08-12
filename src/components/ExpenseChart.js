import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ data }) {
    
    const expenseData = data.filter(item => item.transaction === 'expense');

    const categoryTotals = expenseData.reduce((acc, item) => {
        if (acc[item.category]) {
            acc[item.category] += parseFloat(item.amount);
        } else {
            acc[item.category] = parseFloat(item.amount);
        }
        return acc;
    }, {});

    const chartData = {
        labels: Object.keys(categoryTotals),
        datasets: [{
            data: Object.values(categoryTotals),
            backgroundColor: [
                '#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#C70039', '#900C3F'
            ],
            hoverBackgroundColor: [
                '#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#C70039', '#900C3F'
            ]
        }]
    };

    return (
        <div className=" ml-2 mr-4 sm:col-span-1 flex flex-col items-center p-1 overflow-hidden border border-gray-400 rounded">
            <h2 className="text-center text-lg">Expenses by Category</h2>
            <div className="h-60 flex  justify-center items-center">
                <Pie data={chartData} />
            </div>
        </div>
    );
}

export default ExpenseChart;
