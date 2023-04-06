import React from 'react';
// import { data } from '../data/data.js';


export const getStaticProps = async () => {
    const res = await fetch(`https://jayedrashid.github.io/json-server/DATA_SERVICE.json`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};

const yearlyCharge = ({data}) => {
   
    let month1ServiceFull = 0;
    let month1ServiceHalf = 0;

    let month2ServiceFull = 0;
    let month2ServiceHalf = 0;

    let month3ServiceFull = 0;
    let month3ServiceHalf = 0;

    let month4ServiceFull = 0;
    let month4ServiceHalf = 0;

    let month5ServiceFull = 0;
    let month5ServiceHalf = 0;

    let month6ServiceFull = 0;
    let month6ServiceHalf = 0;

    let month7ServiceFull = 0;
    let month7ServiceHalf = 0;

    let month8ServiceFull = 0;
    let month8ServiceHalf = 0;

    let month9ServiceFull = 0;
    let month9ServiceHalf = 0;

    let month10ServiceFull = 0;
    let month10ServiceHalf = 0;

    let month11ServiceFull = 0;
    let month11ServiceHalf = 0;

    let month12ServiceFull = 0;
    let month12ServiceHalf = 0;


    // Month1 
    data.slice(0, 1).forEach(item => {
        month1ServiceFull += item.security / 5 + item.electric / 5 + item.water / 5 + ((item.gas / 8) / 5 + item.gasUnitPrice) + item.lift / 5 + item.generatorFuel / 5 + item.kollanSomity / 5 + item.maintenance / 5 + item.conveyance / 5 + item.document / 5 + item.bonusTips / 5;
        month1ServiceHalf += item.security / 10 + item.electric / 10 + item.water / 10 + ((item.gas / 8) / 10 + item.gasUnitPrice) + item.lift / 10 + item.generatorFuel / 10 + item.kollanSomity / 10 + item.maintenance / 10 + item.conveyance / 10 + item.document / 10 + item.bonusTips / 10;
    });

    // Month2
    data.slice(1, 2).forEach(item => {
        month2ServiceFull += item.security / 5 + item.electric / 5 + item.water / 5 + ((item.gas / 8) / 5 + item.gasUnitPrice) + item.lift / 5 + item.generatorFuel / 5 + item.kollanSomity / 5 + item.maintenance / 5 + item.conveyance / 5 + item.document / 5 + item.bonusTips / 5;
        month2ServiceHalf += item.security / 10 + item.electric / 10 + item.water / 10 + ((item.gas / 8) / 10 + item.gasUnitPrice) + item.lift / 10 + item.generatorFuel / 10 + item.kollanSomity / 10 + item.maintenance / 10 + item.conveyance / 10 + item.document / 10 + item.bonusTips / 10;
    });

    // Month3
    data.slice(2, 3).forEach(item => {
        month3ServiceFull += item.security / 5 + item.electric / 5 + item.water / 5 + ((item.gas / 8) / 5 + item.gasUnitPrice) + item.lift / 5 + item.generatorFuel / 5 + item.kollanSomity / 5 + item.maintenance / 5 + item.conveyance / 5 + item.document / 5 + item.bonusTips / 5;
        month3ServiceHalf += item.security / 10 + item.electric / 10 + item.water / 10 + ((item.gas / 8) / 10 + item.gasUnitPrice) + item.lift / 10 + item.generatorFuel / 10 + item.kollanSomity / 10 + item.maintenance / 10 + item.conveyance / 10 + item.document / 10 + item.bonusTips / 10;
    });
    // Month4
    data.slice(3, 4).forEach(item => {
        month4ServiceFull += item.security / 5 + item.electric / 5 + item.water / 5 + ((item.gas / 8) / 5 + item.gasUnitPrice) + item.lift / 5 + item.generatorFuel / 5 + item.kollanSomity / 5 + item.maintenance / 5 + item.conveyance / 5 + item.document / 5 + item.bonusTips / 5;
        month4ServiceHalf += item.security / 10 + item.electric / 10 + item.water / 10 + ((item.gas / 8) / 10 + item.gasUnitPrice) + item.lift / 10 + item.generatorFuel / 10 + item.kollanSomity / 10 + item.maintenance / 10 + item.conveyance / 10 + item.document / 10 + item.bonusTips / 10;
    });
    // Month5
    data.slice(4, 5).forEach(item => {
        month5ServiceFull += item.security / 5 + item.electric / 5 + item.water / 5 + ((item.gas / 8) / 5 + item.gasUnitPrice) + item.lift / 5 + item.generatorFuel / 5 + item.kollanSomity / 5 + item.maintenance / 5 + item.conveyance / 5 + item.document / 5 + item.bonusTips / 5;
        month5ServiceHalf += item.security / 10 + item.electric / 10 + item.water / 10 + ((item.gas / 8) / 10 + item.gasUnitPrice) + item.lift / 10 + item.generatorFuel / 10 + item.kollanSomity / 10 + item.maintenance / 10 + item.conveyance / 10 + item.document / 10 + item.bonusTips / 10;
    });
    // Month6
    data.slice(5, 6).forEach(item => {
        month6ServiceFull += item.security / 5 + item.electric / 5 + item.water / 5 + ((item.gas / 8) / 5 + item.gasUnitPrice) + item.lift / 5 + item.generatorFuel / 5 + item.kollanSomity / 5 + item.maintenance / 5 + item.conveyance / 5 + item.document / 5 + item.bonusTips / 5;
        month6ServiceHalf += item.security / 10 + item.electric / 10 + item.water / 10 + ((item.gas / 8) / 10 + item.gasUnitPrice) + item.lift / 10 + item.generatorFuel / 10 + item.kollanSomity / 10 + item.maintenance / 10 + item.conveyance / 10 + item.document / 10 + item.bonusTips / 10;
    });
    // Month7
    data.slice(6, 7).forEach(item => {
        month7ServiceFull += item.security / 5 + item.electric / 5 + item.water / 5 + ((item.gas / 8) / 5 + item.gasUnitPrice) + item.lift / 5 + item.generatorFuel / 5 + item.kollanSomity / 5 + item.maintenance / 5 + item.conveyance / 5 + item.document / 5 + item.bonusTips / 5;
        month7ServiceHalf += item.security / 10 + item.electric / 10 + item.water / 10 + ((item.gas / 8) / 10 + item.gasUnitPrice) + item.lift / 10 + item.generatorFuel / 10 + item.kollanSomity / 10 + item.maintenance / 10 + item.conveyance / 10 + item.document / 10 + item.bonusTips / 10;
    });
    // Month8
    data.slice(7, 8).forEach(item => {
        month8ServiceFull += item.security / 5 + item.electric / 5 + item.water / 5 + ((item.gas / 8) / 5 + item.gasUnitPrice) + item.lift / 5 + item.generatorFuel / 5 + item.kollanSomity / 5 + item.maintenance / 5 + item.conveyance / 5 + item.document / 5 + item.bonusTips / 5;
        month8ServiceHalf += item.security / 10 + item.electric / 10 + item.water / 10 + ((item.gas / 8) / 10 + item.gasUnitPrice) + item.lift / 10 + item.generatorFuel / 10 + item.kollanSomity / 10 + item.maintenance / 10 + item.conveyance / 10 + item.document / 10 + item.bonusTips / 10;
    });
    // Month9
    data.slice(8, 9).forEach(item => {
        month9ServiceFull += item.security / 5 + item.electric / 5 + item.water / 5 + ((item.gas / 8) / 5 + item.gasUnitPrice) + item.lift / 5 + item.generatorFuel / 5 + item.kollanSomity / 5 + item.maintenance / 5 + item.conveyance / 5 + item.document / 5 + item.bonusTips / 5;
        month9ServiceHalf += item.security / 10 + item.electric / 10 + item.water / 10 + ((item.gas / 8) / 10 + item.gasUnitPrice) + item.lift / 10 + item.generatorFuel / 10 + item.kollanSomity / 10 + item.maintenance / 10 + item.conveyance / 10 + item.document / 10 + item.bonusTips / 10;
    });
    // Month10
    data.slice(9, 10).forEach(item => {
        month10ServiceFull += item.security / 5 + item.electric / 5 + item.water / 5 + ((item.gas / 8) / 5 + item.gasUnitPrice) + item.lift / 5 + item.generatorFuel / 5 + item.kollanSomity / 5 + item.maintenance / 5 + item.conveyance / 5 + item.document / 5 + item.bonusTips / 5;
        month10ServiceHalf += item.security / 10 + item.electric / 10 + item.water / 10 + ((item.gas / 8) / 10 + item.gasUnitPrice) + item.lift / 10 + item.generatorFuel / 10 + item.kollanSomity / 10 + item.maintenance / 10 + item.conveyance / 10 + item.document / 10 + item.bonusTips / 10;
    });
    // Month11
    data.slice(10, 11).forEach(item => {
        month11ServiceFull += item.security / 5 + item.electric / 5 + item.water / 5 + ((item.gas / 8) / 5 + item.gasUnitPrice) + item.lift / 5 + item.generatorFuel / 5 + item.kollanSomity / 5 + item.maintenance / 5 + item.conveyance / 5 + item.document / 5 + item.bonusTips / 5;
        month11ServiceHalf += item.security / 10 + item.electric / 10 + item.water / 10 + ((item.gas / 8) / 10 + item.gasUnitPrice) + item.lift / 10 + item.generatorFuel / 10 + item.kollanSomity / 10 + item.maintenance / 10 + item.conveyance / 10 + item.document / 10 + item.bonusTips / 10;
    });
    // Month12
    data.slice(11, 12).forEach(item => {
        month12ServiceFull += item.security / 5 + item.electric / 5 + item.water / 5 + ((item.gas / 8) / 5 + item.gasUnitPrice) + item.lift / 5 + item.generatorFuel / 5 + item.kollanSomity / 5 + item.maintenance / 5 + item.conveyance / 5 + item.document / 5 + item.bonusTips / 5;
        month12ServiceHalf += item.security / 10 + item.electric / 10 + item.water / 10 + ((item.gas / 8) / 10 + item.gasUnitPrice) + item.lift / 10 + item.generatorFuel / 10 + item.kollanSomity / 10 + item.maintenance / 10 + item.conveyance / 10 + item.document / 10 + item.bonusTips / 10;
    });

    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex justify-between p-4'>
                <h2>Tenant's Service Charge</h2>
                <h2>Millennium Villa</h2>
            </div>
            <div className='p-4'>
                <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>

                    <div className="App">
                        <div className="container mx-auto">

                            <h1 className="text-center text-3xl text-indigo-400 py-6">Tenant's Service Charge of Last 12 Months</h1>

                            <div className='overflow-auto rounded-lg shadow'>
                                <table className="w-full">
                                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                                        <tr>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left">S/L</th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left whitespace-nowrap">Service Months</th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left">Full Flat</th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left">Half Flat</th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-100">

                                        {/* Row 1 */}
                                        <tr>
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <a className="font-bold text-blue-500 hover:underline" href='/monthlyCharge'>01</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Month of <span className='text-gray-400 uppercase italic'>{data[0].month}</span></td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month1ServiceFull.toFixed(1)}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month1ServiceHalf.toFixed(1)}</td>
                                        </tr>

                                        {/* Row 2 */}
                                        <tr>
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <a className="font-bold text-blue-500">02</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Month of <span className='text-gray-400 uppercase italic'>{data[1].month}</span></td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month2ServiceFull.toFixed(1)}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month2ServiceHalf.toFixed(1)}</td>
                                        </tr>

                                        {/* Row 3 */}
                                        <tr>
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <a className="font-bold text-blue-500">03</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Month of <span className='text-gray-400 uppercase italic'>{data[2].month}</span></td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month3ServiceFull.toFixed(1)}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month3ServiceHalf.toFixed(1)}</td>
                                        </tr>

                                        {/* Row 4 */}
                                        <tr>
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <a className="font-bold text-blue-500">04</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Month of <span className='text-gray-400 uppercase italic'>{data[3].month}</span></td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month4ServiceFull.toFixed(1)}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month4ServiceHalf.toFixed(1)}</td>
                                        </tr>

                                        {/* Row 5 */}
                                        <tr>
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <a className="font-bold text-blue-500">05</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Month of <span className='text-gray-400 uppercase italic'>{data[4].month}</span></td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month5ServiceFull.toFixed(1)}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month5ServiceHalf.toFixed(1)}</td>
                                        </tr>

                                        {/* Row 6 */}
                                        <tr>
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <a className="font-bold text-blue-500">06</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Month of <span className='text-gray-400 uppercase italic'>{data[5].month}</span></td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month6ServiceFull.toFixed(1)}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month6ServiceHalf.toFixed(1)}</td>
                                        </tr>

                                        {/* Row 7 */}
                                        <tr>
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <a className="font-bold text-blue-500">07</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Month of <span className='text-gray-400 uppercase italic'>{data[6].month}</span></td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month7ServiceFull.toFixed(1)}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month7ServiceHalf.toFixed(1)}</td>
                                        </tr>

                                        {/* Row 8 */}
                                        <tr>
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <a className="font-bold text-blue-500">08</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Month of <span className='text-gray-400 uppercase italic'>{data[7].month}</span></td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month8ServiceFull.toFixed(1)}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month8ServiceHalf.toFixed(1)}</td>
                                        </tr>

                                        {/* Row 9 */}
                                        <tr>
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <a className="font-bold text-blue-500">09</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Month of <span className='text-gray-400 uppercase italic'>{data[8].month}</span></td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month9ServiceFull.toFixed(1)}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month9ServiceHalf.toFixed(1)}</td>
                                        </tr>

                                        {/* Row 10 */}
                                        <tr>
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <a className="font-bold text-blue-500">10</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Month of <span className='text-gray-400 uppercase italic'>{data[9].month}</span></td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month10ServiceFull.toFixed(1)}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month10ServiceHalf.toFixed(1)}</td>
                                        </tr>

                                        {/* Row 11 */}
                                        <tr>
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <a className="font-bold text-blue-500">11</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Month of <span className='text-gray-400 uppercase italic'>{data[10].month}</span></td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month11ServiceFull.toFixed(1)}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month11ServiceHalf.toFixed(1)}</td>
                                        </tr>

                                        {/* Row 12 */}
                                        <tr>
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <a className="font-bold text-blue-500">12</a>
                                            </td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">Month of <span className='text-gray-400 uppercase italic'>{data[11].month}</span></td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month12ServiceFull.toFixed(1)}</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">Tk. {month12ServiceHalf.toFixed(1)}</td>
                                        </tr>


                                        {/* Row: Total */}
                                        <tr>
                                            <td className="w-5 p-3 text-sm text-gray-700 whitespace-nowrap"></td>
                                            <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap font-bold">Yearly Amount</td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <span className="p-1.5 text-sm font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-md bg-opacity-50">Tk. {(month1ServiceFull + month2ServiceFull + month3ServiceFull + month4ServiceFull + month5ServiceFull + month6ServiceFull + month7ServiceFull + month8ServiceFull + month9ServiceFull + month10ServiceFull + month11ServiceFull + month12ServiceFull).toFixed(1)}</span>
                                            </td>
                                            <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">
                                                <span className="p-1.5 text-sm font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-md bg-opacity-50">Tk. {(month1ServiceHalf + month2ServiceHalf + month3ServiceHalf + month4ServiceHalf + month5ServiceHalf + month6ServiceHalf + month7ServiceHalf + month8ServiceHalf + month9ServiceHalf + month10ServiceHalf + month11ServiceHalf + month12ServiceHalf).toFixed(1)}</span>
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

export default yearlyCharge;