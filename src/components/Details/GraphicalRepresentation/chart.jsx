import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { API_URL,ANALYTICS } from "../../../api/constants";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [error, setError] = useState(null);
  let yAxisMin;
  let yAxisMax;
  let stepSize;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}${ANALYTICS}?year=${2024}`);

        const month = [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        
        const Expense = response?.data?.map(item => {
          return item.Expense;
        });
        const Revenue = response?.data?.map(item => {
          return item.Revenue;
        });

        const minValue = Math.min(...Revenue, ...Expense);
        const maxValue = Math.max(...Revenue, ...Expense);

        const range = maxValue - minValue;
        const numberOfTicks = 55; 
        stepSize = Math.ceil(range / numberOfTicks);
        yAxisMin = Math.floor(minValue / stepSize) * stepSize; 
        yAxisMax = Math.ceil(maxValue / stepSize) * stepSize;
        setChartData({
          labels: month,
          datasets: [
            {
              label: 'Monthly Expense',
              data: Expense,
              borderColor: '#FFC01E',
              backgroundColor: '#FFC01E',
              tension: 0.4,
            },
            {
              label: 'Monthly Revenue',
              data: Revenue,
              borderColor: '#1FCB4F',
              backgroundColor: '#1FCB4F',
              tension: 0.4,
            },
          ],
        });
      } catch (err) {
        console.error('Error fetching chart data:', err);
        setError('Failed to load chart data.');
      }
    };

    fetchData();
  }, []); 

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        
      },
      title: {
        display: true,
        text: 'Overview',
        font:{
          size: '16px',
          weight: 'bold'
        },
        color:'white'
        
      },
    },
    scales:{
      y: {
        beginAtZero: false,
        min: yAxisMin,
        max: yAxisMax, 
        ticks: {
          stepSize: 50, 
          callback: function (value) {
            return `$${value.toLocaleString()}`;
          },
        },
        title: {
          display: true,
          text: 'Amount ($)',
        },
      },
      x:{
        title: {
          display: true,
          text: 'Months',
        },
      },
    }
  };

  return (
    <div style={{height:'100%',width:'100%'}}>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <Line data={chartData} options={options}/>
      )}
    </div>
  );
};

export default LineChart;
