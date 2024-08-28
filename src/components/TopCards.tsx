"use client"
import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
}));


const TopCards = () => {
    return (
        <div className='grid lg:grid-cols-12 gap-2 py-2 sm:w-full bg-transparent'>

            <div className='lg:col-span-4 col-span-1 shadow-lg bg-[#ffffff]  flex justify-between w-full  border  rounded-lg hover:shadow-md hover:bg-gray-100 transition duration-300 ease-in-out border-solid border-blue-400 border-r-4  '>
                <div className='flex flex-col  justify-center w-full m-4'>
                    <p className='text-gray-600 text-sm font-bold'>Total Visitors</p>
                    <div className='flex w-auto h-1 mt-2'>
                        <div className='bg-blue-200 w-1/3 h-1'></div>
                        <div className='bg-gray-50 w-2/3 h-1'></div>
                    </div>
                </div>
                <p className='bg-blue-200 flex justify-center items-center p-2 '>
                    <span className=' text-sm font-bold text-gray-600'>500</span>
                </p>
            </div>

            <div className='lg:col-span-4 col-span-1 shadow-lg bg-[#ffffff]  flex justify-between w-full  border  rounded-lg hover:shadow-md hover:bg-gray-100 transition duration-300 ease-in-out border-solid border-red-400 border-r-4 '>
                <div className='flex flex-col  justify-center w-full m-4 '>
                    <p className='text-sm font-bold text-gray-600'>Todays Visitors</p>
                    <div className='flex w-auto h-1 mt-2'>
                        <div className='bg-red-200 w-1/3 h-1'></div>
                        <div className='bg-gray-50 w-2/3 h-1'></div>
                    </div>
                </div>
                <p className='bg-red-200 flex justify-center items-center p-2 '>
                    <span className=' text-sm font-bold text-gray-600'>200</span>
                </p>
            </div>
            <div className='lg:col-span-4  col-span-1 shadow-lg bg-white  flex justify-between w-full  border  rounded-lg hover:shadow-md hover:bg-gray-100 transition duration-300 ease-in-out border-solid border-green-500 border-r-4 '>
                <div className='flex flex-col  justify-center w-full pb-4 m-4'>
                    <p className='text-sm font-bold text-gray-600'> Upcoming Appointments</p>
                    <div className='flex w-auto h-1 mt-2'>
                        <div className='bg-green-200 w-1/3 h-1'></div>
                        <div className='bg-gray-50 w-2/3 h-1'></div>
                    </div>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 '>
                    <span className='text-sm font-bold text-gray-600'>600</span>
                </p>
            </div>
            {/* <div className='lg:col-span-4 col-span-1 shadow-lg bg-white  flex justify-between w-full  border  rounded-lg hover:shadow-md hover:bg-gray-100 transition duration-300 ease-in-out border-solid border-gray-400 border-r-4 '>
                <div className='flex flex-col  justify-center w-full p-4'>
                    <p className='text-sm font-bold text-gray-600'>Customers</p>
                    <div className='flex w-auto h-1 mt-2'>
                        <div className='bg-gray-200 w-1/3 h-1'></div>
                        <div className='bg-gray-50 w-2/3 h-1'></div>
                    </div>
                </div>
                <p className='bg-gray-200 flex justify-center items-center p-4 '>
                    <span className='text-sm font-bold text-gray-600'>1200</span>
                </p>
            </div> */}
        </div>
    )
}

export default TopCards
