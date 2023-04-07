import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { announce } from '../data/data.js';
import Image from 'next/image.js';
import announcementImg from '../data/announcement.png';


const noticeBoard = () => {

    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex justify-between p-4'>
                <h2>Notice Board</h2>
                <h2>Millennium Villa</h2>
            </div>
            <div className='p-4'>
                <div className='w-full m-auto p-4 border rounded-lg overflow-y-auto bg-[#ffe833]'>

                    <div className="App">
                        <div className="container mx-auto">

                        <div className="flex justify-center items-center">
                            <Image src={announcementImg} alt="Picture of Announcement" width={400} height={400} />
                        </div>

                            <div class="sm:m-6 space-y-6">
                                {/* Call to action */}
                                <div class="theme-swiss relative bg-skin-fill max-w-4xl mx-auto overflow-hidden rounded-lg">
                                    <img class="absolute inset-0 h-full w-full object-cover opacity-30" src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100" alt="People working on laptops" />
                                    <div class="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
                                    <div class="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                                        <h2 class="text-3xl font-extrabold text-skin-base sm:text-4xl">
                                            <span class="block">{announce[0].line1}</span>
                                            <span class="block italic text-gray-300">{announce[0].line2}</span>
                                        </h2>
                                        <p class="mt-4 text-lg leading-6 text-skin-muted">{announce[0].details}</p>
                                        <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                            <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                                <a href='/monthlyCharge' class="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8">Monthly Bill</a>
                                                <a href='/askMe' class="text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8">Gas Calculation</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Call to action */}
                                <div class="relative bg-skin-fill max-w-4xl mx-auto overflow-hidden rounded-lg">
                                    <img class="absolute inset-0 h-full w-full object-cover opacity-30" src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100" alt="People working on laptops" />
                                    <div class="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
                                    <div class="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                                        <h2 class="text-3xl font-extrabold text-skin-base sm:text-4xl">
                                            <span class="block">{announce[1].line1}</span>
                                            <span class="block italic text-gray-300">{announce[1].line2}</span>
                                        </h2>
                                        <p class="mt-4 text-lg leading-6 text-skin-muted">{announce[1].details}</p>
                                        <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                            <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                                                <a href='/monthlyCharge' class="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8">Monthly Bill</a>
                                                {/* <a href='/monthlyCharge' class="text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8">Calculation</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Call to action */}
                                {/* <div class="theme-neon relative bg-skin-fill max-w-4xl mx-auto overflow-hidden sm:rounded-2xl">
                                    <img class="absolute inset-0 h-full w-full object-cover opacity-30" src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100" alt="People working on laptops" />
                                    <div class="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
                                    <div class="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                                        <h2 class="text-3xl font-extrabold text-skin-base sm:text-4xl">
                                            <span class="block">DESCO Electric Bill Increased</span>
                                            <span class="block">We handle the distribution</span>
                                        </h2>
                                        <p class="mt-4 text-lg leading-6 text-skin-muted">We are announcing today that we are bringing the Milestone and Ever Green brands even closer together. Effective as of 5th December 2013, our official name will be 'GREEN MILES WEST'.</p>
                                        <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                            <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                                <a href="#" class="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"> Get started </a>
                                                <a href="#" class="text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"> Live demo </a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default noticeBoard;