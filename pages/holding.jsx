import React from 'react';
import { HiReceiptTax } from 'react-icons/hi';
// import { holdingTax } from '../data/data.js';

export const getStaticProps = async () => {
    const res = await fetch(`https://jayedrashid.github.io/json-server/HOLDING_TAX.json`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};

const holding = ({data}) => {


    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex justify-between p-4'>
                <h2>Holding Tax</h2>
                <h2>Millennium Villa</h2>
            </div>
            <div className='p-4'>
                <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>

                    <div className="App">
                        <div className="container mx-auto">

                            <h1 className="text-center text-3xl text-indigo-400 py-6">Holding Tax of Last Few Years</h1>

                            <div className='overflow-auto rounded-lg shadow'>
                                <table className="w-full">
                                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                                        <tr>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left"></th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left whitespace-nowrap">Tax Years</th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left whitespace-nowrap">Tax Amount</th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left whitespace-nowrap">Tax With Cost</th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-100">

                                        {data.map((holding, id) => (
                                        <tr className="bg-white">
                                            <td key={id} className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <HiReceiptTax className='text-purple-800' />
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Fiscal Year <span className='text-gray-400 uppercase italic'>{holding.year}</span></td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {holding.netTax}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {holding.netTaxWithCost}</td>
                                            </tr>
                                            ))}

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default holding;