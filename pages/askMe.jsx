import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data/data.js';


const askMe = () => {

    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex justify-between p-4'>
                <h2>Ask Me</h2>
                <h2>Millennium Villa</h2>
            </div>
            <div className='p-4'>
                <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>

                    <div className="App">
                        <div className="container mx-auto">

                            <h1 className="text-center text-3xl text-indigo-400 py-6">Questionnaires</h1>

                            {/* Questionnaire 1 */}
                            <div className="mt-2 rounded-md relative w-full overflow-hidden">
                                <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
                                <div className='w-full h-12 pl-5 flex items-center bg-blue-500'>
                                    <h1 className='text-lg font-semibold text-white'>What is Tailwind CSS?</h1>
                                </div>

                                {/* Arrow Icon */}
                                <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'></path>
                                    </svg>
                                </div>

                                {/* Content */}
                                <div className='bg-gray-100 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                                    <div className='p-4'>
                                        <p>We are announcing today that we are bringing the Milestone and Ever Green brands even closer together. Effective as of 5th December 2013, our official name will be 'GREEN MILES WEST'.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Questionnaire 2 */}
                            <div className="mt-2 rounded-md relative w-full overflow-hidden">
                                <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
                                <div className='w-full h-12 pl-5 flex items-center bg-blue-500'>
                                    <h1 className='text-lg font-semibold text-white'>What is Bootstrap?</h1>
                                </div>

                                {/* Arrow Icon */}
                                <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'></path>
                                    </svg>
                                </div>

                                {/* Content */}
                                <div className='bg-gray-100 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                                    <div className='p-4'>
                                        <p>We hope this does not create any confusion among our loyal consumers. While this represents a change from our initial name introduction, it does not change the quality of products we offer to our consumers.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Questionnaire 3 */}
                            <div className="mt-2 rounded-md relative w-full overflow-hidden">
                                <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
                                <div className='w-full h-12 pl-5 flex items-center bg-blue-500'>
                                    <h1 className='text-lg font-semibold text-white'>What is Material UI?</h1>
                                </div>

                                {/* Arrow Icon */}
                                <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'></path>
                                    </svg>
                                </div>

                                {/* Content */}
                                <div className='bg-gray-100 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                                    <div className='p-4'>
                                        <p>We are announcing today that we are bringing the Milestone and Ever Green brands even closer together. Effective as of 5th December 2013, our official name will be 'GREEN MILES WEST'.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Questionnaire 4 */}
                            <div className="mt-2 rounded-md relative w-full overflow-hidden">
                                <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
                                <div className='w-full h-12 pl-5 flex items-center bg-blue-500'>
                                    <h1 className='text-lg font-semibold text-white'>What is Chakra UI?</h1>
                                </div>

                                {/* Arrow Icon */}
                                <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'></path>
                                    </svg>
                                </div>

                                {/* Content */}
                                <div className='bg-gray-100 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                                    <div className='p-4'>
                                        <p>We hope this does not create any confusion among our loyal consumers. While this represents a change from our initial name introduction, it does not change the quality of products we offer to our consumers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default askMe;