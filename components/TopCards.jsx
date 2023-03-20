import React from 'react'
import { data } from '../data/data.js';

const TopCards = () => {
  let totalExp = 0;
  let month1ServiceFull = 0;
  let month1ServiceHalf = 0;


    // Month1 
    data.slice(0, 1).forEach(item => {
      month1ServiceFull += item.security / 5 + item.electric / 5 + item.water / 5 + ((item.gas / 8) / 5 + item.gasUnitPrice) + item.lift / 5 + item.generatorFuel / 5 + item.kollanSomity / 5 + item.maintenance / 5 + item.conveyance / 5 + item.document / 5 + item.bonusTips / 5;
      month1ServiceHalf += item.security / 10 + item.electric / 10 + item.water / 10 + ((item.gas / 8) / 10 + item.gasUnitPrice) + item.lift / 10 + item.generatorFuel / 10 + item.kollanSomity / 10 + item.maintenance / 10 + item.conveyance / 10 + item.document / 10 + item.bonusTips / 10;
  });

  // Total Expenditure
  data.slice(0, 1).forEach(item => {
    totalExp += item.security + item.electric + item.water + item.gas + item.lift + item.generatorFuel + item.kollanSomity + item.maintenance + item.conveyance + item.document + item.bonusTips;
});

  return (
    <div className='grid lg:grid-cols-3 gap-4 p-4'>
      
        {/* Col 1 */}
        <div className='col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
          <div className='flex flex-col w-full pb-4'>
            <p className='text-gray-600'>Full Flat:</p>
            <p className='text-2xl font-bold'>Tk. {month1ServiceFull}</p>
            <p className='text-gray-600'>{data[0].month}, {data[0].year}</p>
          </div>
          <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-green-700 text-lg whitespace-nowrap'>Service Charge</span>
          </p>
        </div>

        {/* Col 2 */}
        <div className='col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
          <div className='flex flex-col w-full pb-4'>
            <p className='text-gray-600'>Half Flat:</p>
            <p className='text-2xl font-bold'>Tk. {month1ServiceHalf}</p>
            <p className='text-gray-600'>{data[0].month}, {data[0].year}</p>
          </div>
          <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-700 text-lg whitespace-nowrap'>Service Charge</span>
          </p>
        </div>

         {/* Col 3 */}
         <div className='col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
          <div className='flex flex-col w-full pb-4'>
            <p className='text-gray-600'>Total:</p>
            <p className='text-2xl font-bold'>Tk. {totalExp}</p>
            <p className='text-gray-600'>{data[0].month}, {data[0].year}</p>
          </div>
          <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-green-700 text-lg whitespace-nowrap'>Expenses</span>
          </p>
        </div>
      
    </div>
  )
}

export default TopCards