import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Ad 1', clicks: 4000, impressions: 2400, amt: 2400 },
  { name: 'Ad 2', clicks: 3000, impressions: 1398, amt: 2210 },
  { name: 'Ad 3', clicks: 2000, impressions: 9800, amt: 2290 },
  { name: 'Ad 4', clicks: 2780, impressions: 3908, amt: 2000 },
  { name: 'Ad 5', clicks: 1890, impressions: 4800, amt: 2181 },
  { name: 'Ad 6', clicks: 2390, impressions: 3800, amt: 2500 },
  { name: 'Ad 7', clicks: 3490, impressions: 4300, amt: 2100 },
];

const BarChartComponent: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="clicks" fill="#8884d8" />
        <Bar dataKey="impressions" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
