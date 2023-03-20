import React from 'react';
import { ImPriceTags } from 'react-icons/im';
import { data } from '../data/data.js';

const TotalExp = () => {

  let totalExp1 = 0;
  let totalExp2 = 0;
  let totalExp3 = 0;
  let totalExp4 = 0;
  let totalExp5 = 0;
  let totalExp6 = 0;
  let totalExp7 = 0;
  let totalExp8 = 0;
  let totalExp9 = 0;
  let totalExp10 = 0;
  let totalExp11 = 0;
  let totalExp12 = 0;

  data.slice(0,1).forEach(item => {
    totalExp1 += item.security + item.electric + item.water + item.gas + item.lift + item.generatorFuel + item.kollanSomity + item.maintenance + item.conveyance + item.document + item.bonusTips;
  });
  data.slice(1,2).forEach(item => {
    totalExp2 += item.security + item.electric + item.water + item.gas + item.lift + item.generatorFuel + item.kollanSomity + item.maintenance + item.conveyance + item.document + item.bonusTips;
  });
  data.slice(2,3).forEach(item => {
    totalExp3 += item.security + item.electric + item.water + item.gas + item.lift + item.generatorFuel + item.kollanSomity + item.maintenance + item.conveyance + item.document + item.bonusTips;
  });
  data.slice(3,4).forEach(item => {
    totalExp4 += item.security + item.electric + item.water + item.gas + item.lift + item.generatorFuel + item.kollanSomity + item.maintenance + item.conveyance + item.document + item.bonusTips;
  });
  data.slice(4,5).forEach(item => {
    totalExp5 += item.security + item.electric + item.water + item.gas + item.lift + item.generatorFuel + item.kollanSomity + item.maintenance + item.conveyance + item.document + item.bonusTips;
  });
  data.slice(5,6).forEach(item => {
    totalExp6 += item.security + item.electric + item.water + item.gas + item.lift + item.generatorFuel + item.kollanSomity + item.maintenance + item.conveyance + item.document + item.bonusTips;
  });
  data.slice(6,7).forEach(item => {
    totalExp7 += item.security + item.electric + item.water + item.gas + item.lift + item.generatorFuel + item.kollanSomity + item.maintenance + item.conveyance + item.document + item.bonusTips;
  });
  data.slice(7,8).forEach(item => {
    totalExp8 += item.security + item.electric + item.water + item.gas + item.lift + item.generatorFuel + item.kollanSomity + item.maintenance + item.conveyance + item.document + item.bonusTips;
  });
  data.slice(8,9).forEach(item => {
    totalExp9 += item.security + item.electric + item.water + item.gas + item.lift + item.generatorFuel + item.kollanSomity + item.maintenance + item.conveyance + item.document + item.bonusTips;
  });
  data.slice(9,10).forEach(item => {
    totalExp10 += item.security + item.electric + item.water + item.gas + item.lift + item.generatorFuel + item.kollanSomity + item.maintenance + item.conveyance + item.document + item.bonusTips;
  });
  data.slice(10,11).forEach(item => {
    totalExp11 += item.security + item.electric + item.water + item.gas + item.lift + item.generatorFuel + item.kollanSomity + item.maintenance + item.conveyance + item.document + item.bonusTips;
  });
  data.slice(11,12).forEach(item => {
    totalExp12 += item.security + item.electric + item.water + item.gas + item.lift + item.generatorFuel + item.kollanSomity + item.maintenance + item.conveyance + item.document + item.bonusTips;
  });

  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1>Total Expenses</h1>
      <ul>
          {/* Month 1 */}
          <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-purple-100 rounded-lg p-3'>
              <ImPriceTags className='text-purple-800' />
            </div>

            <div className='pl-4'>
              <p className='text-gray-800 font-bold'>Tk. {totalExp1}</p>
            </div>
            
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{data[0].month}<span className='text-gray-500'>, {data[0].year}</span></p>
          </li>

          {/* Month 2 */}
          <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-purple-100 rounded-lg p-3'>
              <ImPriceTags className='text-purple-800' />
            </div>

            <div className='pl-4'>
            <p className='text-gray-800 font-bold'>Tk. {totalExp2}</p>
            </div>
            
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{data[1].month}<span className='text-gray-500'>, {data[1].year}</span></p>
          </li>
          
          {/* Month 3 */}
          <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-purple-100 rounded-lg p-3'>
              <ImPriceTags className='text-purple-800' />
            </div>

            <div className='pl-4'>
            <p className='text-gray-800 font-bold'>Tk. {totalExp3}</p>
            </div>
            
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{data[2].month}<span className='text-gray-500'>, {data[2].year}</span></p>
          </li>

          {/* Month 4 */}
          <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-purple-100 rounded-lg p-3'>
              <ImPriceTags className='text-purple-800' />
            </div>

            <div className='pl-4'>
            <p className='text-gray-800 font-bold'>Tk. {totalExp4}</p>
            </div>
            
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{data[3].month}<span className='text-gray-500'>, {data[3].year}</span></p>
          </li>

          {/* Month 5 */}
          <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-purple-100 rounded-lg p-3'>
              <ImPriceTags className='text-purple-800' />
            </div>

            <div className='pl-4'>
            <p className='text-gray-800 font-bold'>Tk. {totalExp5}</p>
            </div>
            
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{data[4].month}<span className='text-gray-500'>, {data[4].year}</span></p>
          </li>

          {/* Month 6 */}
          <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-purple-100 rounded-lg p-3'>
              <ImPriceTags className='text-purple-800' />
            </div>

            <div className='pl-4'>
            <p className='text-gray-800 font-bold'>Tk. {totalExp6}</p>
            </div>
            
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{data[5].month}<span className='text-gray-500'>, {data[5].year}</span></p>
          </li>

          {/* Month 7 */}
          <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-purple-100 rounded-lg p-3'>
              <ImPriceTags className='text-purple-800' />
            </div>

            <div className='pl-4'>
            <p className='text-gray-800 font-bold'>Tk. {totalExp7}</p>
            </div>
            
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{data[6].month}<span className='text-gray-500'>, {data[6].year}</span></p>
          </li>

          {/* Month 8 */}
          <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-purple-100 rounded-lg p-3'>
              <ImPriceTags className='text-purple-800' />
            </div>

            <div className='pl-4'>
            <p className='text-gray-800 font-bold'>Tk. {totalExp8}</p>
            </div>
            
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{data[7].month}<span className='text-gray-500'>, {data[7].year}</span></p>
          </li>

          {/* Month 9 */}
          <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-purple-100 rounded-lg p-3'>
              <ImPriceTags className='text-purple-800' />
            </div>

            <div className='pl-4'>
            <p className='text-gray-800 font-bold'>Tk. {totalExp9}</p>
            </div>
            
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{data[8].month}<span className='text-gray-500'>, {data[8].year}</span></p>
          </li>

          {/* Month 10 */}
          <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-purple-100 rounded-lg p-3'>
              <ImPriceTags className='text-purple-800' />
            </div>

            <div className='pl-4'>
            <p className='text-gray-800 font-bold'>Tk. {totalExp10}</p>
            </div>
            
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{data[9].month}<span className='text-gray-500'>, {data[9].year}</span></p>
          </li>

          {/* Month 11 */}
          <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-purple-100 rounded-lg p-3'>
              <ImPriceTags className='text-purple-800' />
            </div>

            <div className='pl-4'>
            <p className='text-gray-800 font-bold'>Tk. {totalExp11}</p>
            </div>
            
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{data[10].month}<span className='text-gray-500'>, {data[10].year}</span></p>
          </li>

          {/* Month 12 */}
          <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-purple-100 rounded-lg p-3'>
              <ImPriceTags className='text-purple-800' />
            </div>

            <div className='pl-4'>
            <p className='text-gray-800 font-bold'>Tk. {totalExp12}</p>
            </div>
            
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{data[11].month}<span className='text-gray-500'>, {data[11].year}</span></p>
          </li>
      </ul>
    </div>
  );
};

export default TotalExp;