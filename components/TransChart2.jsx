import React from 'react';
// import { data } from '../data/data.js';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export const getStaticProps = async () => {
    const res = await fetch(`https://jayedrashid.github.io/json-server/HOLDING_TAX.json`);
    const data = await res.json();
  
    return {
        props: {
            data,
        },
    };
  };

function TransChart({ data }) {
    return (
        <div className='h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
            <strong className='text-gray-700 font-medium'>Transaction2</strong>
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
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="year" fill="#8884d8" />
                        <Bar dataKey="year" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default TransChart
