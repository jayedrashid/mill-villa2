import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
// import { data } from '../data/data.js';
import TopCards from '@/components/TopCards'


export const getStaticProps = async () => {
    const res = await fetch(`https://jayedrashid.github.io/json-server/DATA_SERVICE.json`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};


const monthlyCharge = ({ data }) => {

    let totalExp = 0;
    let monthServiceFull = 0;
    let monthServiceHalf = 0;

    data.slice(0,1).forEach(item => {
        totalExp += item.security + item.electric + item.water + item.gas + item.lift + item.generatorFuel + item.kollanSomity + item.maintenance + item.conveyance + item.document + item.bonusTips;
        monthServiceFull += item.security/5 + item.electric/5 + item.water/5 + ((item.gas/8)/5+item.gasUnitPrice) + item.lift/5 + item.generatorFuel/5 + item.kollanSomity/5 + item.maintenance/5 + item.conveyance/5 + item.document/5 + item.bonusTips/5;
        monthServiceHalf += item.security/10 + item.electric/10 + item.water/10 + ((item.gas/8)/10+item.gasUnitPrice) + item.lift/10 + item.generatorFuel/10 + item.kollanSomity/10 + item.maintenance/10 + item.conveyance/10 + item.document/10 + item.bonusTips/10;
    });

    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex justify-between p-4'>
                <h2>Full Apartment's Expenditure</h2>
                <h2>Millennium Villa</h2>
            </div>

            <TopCards />

            <div className='p-4'>
                <div className='w-full m-auto p-2 border rounded-lg bg-white overflow-y-auto'>


                    <div className="App">
                        <div className="container mx-auto">
                          
                            <h1 className="text-center text-3xl text-indigo-400 py-6">Service Charge of the Month <span className='text-4xl uppercase font-bold'>{data[0].month}</span><span> {data[0].year}</span></h1>

                            <div className='overflow-auto rounded-lg shadow'>
                                <table className="w-full">
                                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                                        <tr>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left">S/L</th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left">Particulars</th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left">Total</th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left">Full</th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left">Half</th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-100">

                                        {/* Row 1 */}
                                        <tr className="bg-white">
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <a className="font-bold text-gray-400">01</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Security Salary</td>
                                            <td className="w-18 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].security}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].security / 5}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].security / 10}</td>
                                        </tr>

                                        {/* Row 2 */}
                                        <tr className="bg-gray-50">
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                            <a className="font-bold text-gray-400">02</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">DESCO Electric</td>
                                            <td className="w-18 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].electric}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].electric / 5}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].electric / 10}</td>
                                        </tr>

                                        {/* Row 3 */}
                                        <tr className="bg-white">
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                            <a className="font-bold text-gray-400">03</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">WASA Water</td>
                                            <td className="w-18 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].water}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].water / 5}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].water / 10}</td>
                                        </tr>

                                        {/* Row 4 */}
                                        <tr className="bg-gray-50">
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                            <a className="font-bold text-gray-400">04</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">TITAS Gas</td>
                                            <td className="w-18 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].gas}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {((data[0].gas/8)/5+data[0].gasUnitPrice)}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {((data[0].gas/8)/10+data[0].gasUnitPrice)}</td>
                                        </tr>

                                        {/* Row 5 */}
                                        <tr className="bg-white">
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                            <a className="font-bold text-gray-400">05</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">MAAN Lift</td>
                                            <td className="w-18 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].lift}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].lift / 5}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].lift / 10}</td>
                                        </tr>

                                        {/* Row 6 */}
                                        <tr className="bg-gray-50">
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                            <a className="font-bold text-gray-400">06</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Generator Fuel</td>
                                            <td className="w-18 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].generatorFuel}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].generatorFuel / 5}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].generatorFuel / 10}</td>
                                        </tr>

                                        {/* Row 7 */}
                                        <tr className="bg-white">
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                            <a className="font-bold text-gray-400">07</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Uttara Kollan Somity</td>
                                            <td className="w-18 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].kollanSomity}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].kollanSomity / 5}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].kollanSomity / 10}</td>
                                        </tr>

                                        {/* Row 8 */}
                                        <tr className="bg-gray-50">
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                            <a className="font-bold text-gray-400">08</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Maintenance</td>
                                            <td className="w-18 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].maintenance}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].maintenance / 5}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].maintenance / 10}</td>
                                        </tr>

                                        {/* Row 9 */}
                                        <tr className="bg-white">
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                            <a className="font-bold text-gray-400">09</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Conveyance</td>
                                            <td className="w-18 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].conveyance}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].conveyance / 5}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].conveyance / 10}</td>
                                        </tr>

                                        {/* Row 10 */}
                                        <tr className="bg-gray-50">
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                            <a className="font-bold text-gray-400">10</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">documentation</td>
                                            <td className="w-18 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].document}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].document / 5}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].document / 10}</td>
                                        </tr>

                                        {/* Row 11 */}
                                        <tr className="bg-white">
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                            <a className="font-bold text-gray-400">11</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Bonus & Tips</td>
                                            <td className="w-18 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].bonusTips}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].bonusTips / 5}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {data[0].bonusTips / 10}</td>
                                        </tr>

                                        {/* Row 12: Total */}
                                        <tr>
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap"></td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap font-bold">Monthly Service Charge of <span className='text-indigo-400 uppercase'>{data[0].month}</span></td>
                                            <td className="w-18 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <span className="p-1.5 text-sm font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-md bg-opacity-50">Tk. {totalExp}</span>
                                            </td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <span className="p-1.5 text-sm font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-md bg-opacity-50">Tk. {monthServiceFull}</span>
                                            </td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <span className="p-1.5 text-sm font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-md bg-opacity-50">Tk. {monthServiceHalf}</span>
                                            </td>
                                        </tr>

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

export default monthlyCharge;