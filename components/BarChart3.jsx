import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

function BarChart() {
    const [graph, setGraph] = useState([]);
    const [getData, setGetData] = useState([]);

    const countryDetail = async () => {
        axios.get("https://jayedrashid.github.io/json-server/COUNTRY_LIST/countries.json")
            .then(response => {
                setGetData(response.data);
            });
    }

    useEffect(() => {
        countryDetail();
    }, []);


    const selectChart = (e) => {
        axios.get(`https://jayedrashid.github.io/json-server/COUNTRY_LIST/countries.json`)
            .then(res => {
                const countryData = res.data;
                let countryName = [];
                let budgetName = [];
                countryData.forEach(element => {
                    countryName.push(element.country);
                    budgetName.push(element.budget);
                });
                setGraph({
                    labels: countryName,
                    datasets: [
                        {
                            label: 'In Billions Dollar',
                            backgroundColor: [
                                'green',
                                'red',
                                'blue',
                                '#FFBF00',
                                '#DE3163',
                                'orange',
                                '#40E0D0',
                                '#6495ED',
                                '#CCCCFF',
                                '#FFBF00',
                                '#DE3163',
                                '#9FE2BF',
                                '#CD5C5C'
                            ],
                            borderWidth: 0,
                            data: budgetName
                        }
                    ]
                });
            });

    }

    useEffect(() => {
        selectChart();
    }, []);


    return (
        <>
            <div className="container">
                <h4 className="text-center text-gray-800 mt-2 mb-3">Graph Chart in ReactJS</h4>
                <h6 className="text-center text-gray-800 mt-2 mb-3">Country By Budget</h6>
                
                <div className="row mt-3">
                    <div className="col-sm-3">

                        <div className="">
                            <table class="border border-slate-600">
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Budget</th>
                                </tr>
                                {getData.map((name) =>
                                    <tr>
                                        <td>{name.country}</td>
                                        <td>${name.budget}</td>
                                    </tr>
                                )}
                                </thead>
                            </table>
                        </div>
                    </div>

                    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
                        <Bar
                            data={graph}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Average Rainfall per month',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                        />
                    </div>

                </div>
            </div>
        </>
    )
}
export default BarChart;