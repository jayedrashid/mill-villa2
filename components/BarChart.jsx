import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { data } from '../data/data.js';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
 
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

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: data.map((myData) => myData.month),
      datasets: [
        {
          label: 'Full Flat Charge',
          data: [month1ServiceFull, month2ServiceFull, month3ServiceFull, month4ServiceFull, month5ServiceFull, month6ServiceFull,month7ServiceFull,month8ServiceFull,month9ServiceFull,month10ServiceFull,month11ServiceFull,month12ServiceFull],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgb(53, 162, 235)',
        },
        {
          label: 'Half Flat Charge',
          data: [month1ServiceHalf, month2ServiceHalf, month3ServiceHalf, month4ServiceHalf, month5ServiceHalf, month6ServiceHalf,month7ServiceHalf,month8ServiceHalf,month9ServiceHalf,month10ServiceHalf,month11ServiceHalf,month12ServiceHalf],
          borderColor: 'rgb(235, 53, 53)',
          backgroundColor: 'rgb(235, 53, 53)',
        },
      ]
    })
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Monthly Service Charge Chart'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    })
  }, [])

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;