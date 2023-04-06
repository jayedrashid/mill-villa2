import React from 'react';
import { data } from '../data/data.js';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function TransChart() {
    return (
        <div className='h-[22rem] bg-white p-4 rounded-lg border border-gray-200 flex flex-col'>
            <strong className='text-gray-700 font-medium'>Utility Statistics</strong>
            <div className='w-full mt-3 flex-1 text-sm'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
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
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="electric" fill="#ff726f" />
                        <Bar dataKey="water" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default TransChart