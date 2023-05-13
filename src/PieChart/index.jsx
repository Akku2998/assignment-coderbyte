import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

export default function CustomPieChart({ employeeData }) {
  return (
      <PieChart width={400} height={400}>
        <Pie
          data={employeeData}
          dataKey="totalTimeWorkedInMs"
          nameKey="EmployeeName"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label={(entry) => `${entry.totalTimeWorkedInMs} min`}
        />
        <Tooltip />
      </PieChart>
  );
}