import React from 'react';
import { data } from '../data/data.js';
import { ResponsiveContainer, LineChart, Line, Legend, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

function LineCharts() {
    return (
        <div className='h-[22rem] bg-white p-4 rounded-lg border border-gray-200 flex flex-col'>
            <strong className='text-gray-700 font-medium'>Generator Fuel Statistics</strong>
            <div className='w-full mt-3 flex-1 text-sm'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -10,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: "lightblue" }} />
                        <Legend />
                        <Line dataKey="generatorFuel" type="monotone" stroke="blue" activeDot={{ r: 6 }}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default LineCharts