import React from 'react';
import { pieData } from '../data/data.js';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

const RADIAN = Math.PI / 180
const COLORS = ['#00c49f', '#ffbb28', '#ff8042', '#F87060', '#102542', '#B3A394']

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}

function ProfChart() {
    return (
        <div className=' h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col'>
            <strong className='text-gray-700 font-medium'>Owner's Division</strong>
            <div className='w-full mt-3 flex-1 text-sm'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={300}>
                        <Pie
                            data={pieData}
                            dataKey="value"
                            labelLine={false}
                            cx="50%"
                            cy="45%"
                            outerRadius={100}
                            fill="#8884d8"
                            label={renderCustomizedLabel}
                        >
                            {pieData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default ProfChart