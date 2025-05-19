"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

const Generate = () => {

    // const [link, setlink] = useState("")
    // const [linktext, setlinktext] = useState("")
    const [links, setLinks] = useState([{link:"",linktext:""}])
    const [handle, sethandle] = useState("")
    const [pic, setpic] = useState("")

    const addLink = async (text,link,handle) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "link": link,
            "linktext": text,
            "handle": handle
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        toast(result.message)
        setlink("")
        setlinktext("")
    }


    return (
        <div className='bg-[#E9C0E9] min-h-screen grid grid-cols-2'>

            
            <div className='col1 flex flex-col justify-end items-center'>
                <div className='flex flex-col gap-5 my-8'>
                    <h1 className='text-4xl font-bold text-gray-800'>Create your LinkNext</h1>
                    <div className="item">
                        <h2 className='font-semibold text-2xl text-gray-700'>Step 1 : Claim a Handle</h2>
                        <div className='mx-4'>
                            <input value={handle || ""} onChange={e=>{sethandle(e.target.value)}} className='px-4 py-2 mx-2 my-2 rounded-full focus:outline-purple-400 bg-white' type="text" placeholder='Choose a Handle' />
                        </div>
                    </div>
                    <div className="item">
                        <h2 className='font-semibold text-2xl text-gray-700'>Step 2 :+ Add Links</h2>
                        <div className='mx-4'>
                            <input value={link || ""} onChange={e=>{setlink(e.target.value)}} className='px-4 py-2 mx-2 my-2 rounded-full focus:outline-purple-400 bg-white' type="text" placeholder='Enter link text' />
                            <input value={linktext || ""} onChange={e=>{setlinktext(e.target.value)}} className='px-4 py-2 mx-2 my-2 rounded-full focus:outline-purple-400 bg-white' type="text" placeholder='Enter link' />
                            <button onClick={()=>addLink(linktext,link,handle)} className='p-5 py-2 mx-2 bg-[#502274] text-white font-bold rounded-3xl'>Add Link</button>
                        </div>
                    </div>
                    <div className="item">
                        <h2 className='font-semibold text-2xl text-gray-700'>Step 3 : Add Profile picture and Submit</h2>
                        <div className='mx-4 flex flex-col'>
                            <input value={pic || ""} onChange={e=>{setpic(e.target.value)}} className='px-4 py-2 mx-2 my-2 rounded-full focus:outline-purple-400 bg-white' type="text" placeholder='Enter link to your Picture' />
                            <button className='p-5 py-2 mx-2 my-5 w-fit bg-[#502274] text-white font-bold rounded-3xl'>Submit</button>
                        </div>


                    </div>
                </div>
            </div>
            <div className='col2 w-full h-screen bg-[#E9C0E9]'>
                <img className='h-full p-10' src="/generate.png" alt="Genarate image" />
                <ToastContainer />
            </div>
        </div>
    )
}

export default Generate