"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Generate = () => {

    

    return (
        <div className='bg-[#E9C0E9] min-h-screen grid grid-cols-2'>
            
            <ToastContainer />
            <div className='col1 flex flex-col justify-end items-center'>
                <div className='flex flex-col gap-5 my-8'>
                    <h1 className='text-4xl font-bold text-gray-800'>Create your LinkNext</h1>
                    <div className="item">
                        <h2 className='font-semibold text-2xl text-gray-700'>Step 1 : Claim a Handle</h2>
                        <div className='mx-4'>
                            <input className='px-4 py-2 mx-2 my-2 rounded-full focus:outline-purple-400 bg-white' type="text" placeholder='Choose a Handle' />
                        </div>
                    </div>
                    <div className="item">
                        <h2 className='font-semibold text-2xl text-gray-700'>Step 2 : Add Links</h2>
                        <div className='mx-4'>
                            <input className='px-4 py-2 mx-2 my-2 rounded-full focus:outline-purple-400 bg-white' type="text" placeholder='Enter link text' />
                            <input className='px-4 py-2 mx-2 my-2 rounded-full focus:outline-purple-400 bg-white' type="text" placeholder='Enter link' />
                            <button className='p-5 py-2 mx-2 bg-[#502274] text-white font-bold rounded-3xl'>Add Link</button>
                        </div>
                    </div>
                    <div className="item">
                        <h2 className='font-semibold text-2xl text-gray-700'>Step 3 : Add Profile picture and Submit</h2>
                        <div className='mx-4 flex flex-col'>
                            <input className='px-4 py-2 mx-2 my-2 rounded-full focus:outline-purple-400 bg-white' type="text" placeholder='Enter link to your Picture' />
                            <button className='p-5 py-2 mx-2 my-5 w-fit bg-[#502274] text-white font-bold rounded-3xl'>Submit</button>
                        </div>


                    </div>
                </div>
            </div>
            <div className='col2 w-full h-screen bg-[#E9C0E9]'>
                <img className='h-full p-10' src="/generate.png" alt="Genarate image" />
            </div>
        </div>
    )
}

export default Generate