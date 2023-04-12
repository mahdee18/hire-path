import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import Banner from '../../assets/All Images/Vector.png';
import Banner1 from '../../assets/All Images/Vector-1.png';

const data = [
  { name: 'Assignment 1', score: 60, netMarks: 60 },
  { name: 'Assignment 2', score: 60, netMarks: 60 },
  { name: 'Assignment 3', score: 60, netMarks: 60 },
  { name: 'Assignment 4', score: 60, netMarks: 60 },
  { name: 'Assignment 5', score: 57, netMarks: 60 },
  { name: 'Assignment 6', score: 60, netMarks: 60 },
  { name: 'Assignment 7', score: 60, netMarks: 60 },
  { name: 'Assignment 8', score: 60, netMarks: 60 }
];

class Statistic extends PureComponent {
  render() {
    return (
      <div>
        <div className="h-[298px] w-full relative flex justify-center items-center">
          <img src={Banner1} className="absolute top-0 right-0" />
          <h1 className="text-[32px] font-bold">Statistics</h1>
          <img src={Banner} className="absolute bottom-0 left-0" />
        </div>

        <div style={{ width: '100%', height: 300 }} className='my-36'>
          <ResponsiveContainer>
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" />
              <YAxis
                label={{
                  value: 'Assignment Score',
                  angle: -90,
                  position: 'insideLeft',
                }}
                tickFormatter={(value) => `${value}`}
                domain={[0, 100]}
              />
              <Tooltip
                formatter={(value) => `${value}`}
                labelFormatter={(label) => ` ${label}`}
              />
              <Legend />
              <Bar dataKey="score" name="Score" fill="#8884d8" />
              <Line
                type="monotone"
                dataKey="netMarks"
                name="Net Marks"
                stroke="#82ca9d"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default Statistic;
