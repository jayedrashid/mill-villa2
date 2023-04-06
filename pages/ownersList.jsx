import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
// import { owners } from '../data/data.js';

export const getStaticProps = async () => {
    const res = await fetch(`https://jayedrashid.github.io/json-server/OWNERS.json`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};

const ownersList = ({data}) => {

    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex justify-between p-4'>
                <h2>Apartment Owners</h2>
                <h2>Millennium Villa</h2>
            </div>

            <div className='p-4'>
                <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>

                    <div className="App">
                        <div className="container mx-auto">

                            <h1 className="text-center text-3xl text-indigo-400 py-6">Owners of Millennium Villa</h1>

                            <div className='overflow-auto rounded-lg shadow'>
                                <table className="w-full">
                                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                                        <tr>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left">Names</th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left">Flat</th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left">Phone</th>
                                            <th className="p-3 text-sm font-semibold uppercase tracking-wide text-left">Email</th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-100">
                                        {data.map((owner, id) => (
                                            <tr key={id} className="bg-white">
                                                <td className='flex items-center w-30 p-3 text-sm text-gray-700 whitespace-nowrap'>
                                                    <div className='bg-purple-100 p-3 rounded-lg'>
                                                        <BsPersonFill className='text-purple-800' />
                                                    </div>
                                                    <p className='pl-4 text-black'>{owner.person.name}</p>
                                                </td>
                                                <td className="w-30 p-3 text-sm text-gray-700 whitespace-nowrap">{owner.person.flat}</td>
                                                <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">{owner.person.phone}</td>
                                                <td className="w-15 p-3 text-sm text-gray-700 whitespace-nowrap">{owner.person.email}</td>
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

export default ownersList;