import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {RxHome, RxDashboard, RxPerson } from 'react-icons/rx'
import {MdOutlineCalendarMonth, MdQuestionMark } from 'react-icons/md'
import {AiOutlineNotification } from 'react-icons/ai'
import {TbReceiptTax, TbUsers, TbSum } from 'react-icons/tb'
import {RiQuestionMark } from 'react-icons/ri'
import {GrDocumentUser } from 'react-icons/gr'

const Sidebar = ({ children }) => {
    return (
        <div className='flex'>
            <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
                <div className='flex flex-col items-center'>

                <Link href='/'>
                    <div className='bg-purple-700 text-white p-3 rounded-lg inline-block'>
                        <RxHome size={20}/>
                    </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                <Link href='/'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer mt-6 mb-2 p-3 rounded-lg inline-block'>
                        <RxDashboard size={20}/>
                    </div>
                </Link>
               
                <Link href='/monthlyCharge'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg inline-block'>
                        <TbSum size={20}/>
                    </div>
                </Link>
                <Link href='/yearlyCharge'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg inline-block'>
                        <MdOutlineCalendarMonth size={20}/>
                    </div>
                </Link>
                <Link href='/holding'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg inline-block'>
                        <TbReceiptTax size={20}/>
                    </div>
                </Link>
                <Link href='/noticeBoard'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg inline-block'>
                        <AiOutlineNotification size={20}/>
                    </div>
                </Link>
                <Link href='/askMe'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg inline-block'>
                        <RiQuestionMark size={20}/>
                    </div>
                </Link>

                <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                <Link href='/ownersList'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer mt-6 my-2 p-3 rounded-lg inline-block'>
                        <TbUsers size={20}/>
                    </div>
                </Link>
                <Link href='/ownersExp'>
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg inline-block'>
                        <GrDocumentUser size={20}/>
                    </div>
                </Link>
                </div>
            </div>
            <main className='ml-20 w-full'>{children}</main>
        </div>
    )
}

export default Sidebar