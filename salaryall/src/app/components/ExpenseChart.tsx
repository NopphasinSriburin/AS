import React from 'react';
import { Bar } from 'react-chartjs-2';

const ExpenseChart = () => {
  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: 'Total',
        data: [1000, 500], // Replace with actual data
        backgroundColor: ['green', 'red'],
      },
    ],
  };

  return <Bar data={data} />;
};

export default ExpenseChart;
