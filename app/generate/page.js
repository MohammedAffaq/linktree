"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

const Generate = () => {

    // const [link, setlink] = useState("")
    // const [linktext, setlinktext] = useState("")
    const [links, setLinks] = useState([{ linktext: "", link: "" }])
    const [handle, sethandle] = useState("")
    const [pic, setpic] = useState("")

    const handleChange = (index, link, linktext) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i == index) {
                    return { link, linktext }
                } else {
                    return item
                }
            })
        })
    }

    const addLink = () => {
        setLinks(links.concat([{ linktext: "", link: "" }]))
    }

    const submitLinks = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        if(result.success){
            toast.success(result.message)
            setLinks([])
            sethandle("")
            setpic("")
        }
        else {
            toast.error(result.message)
        }

    }


    return (
        <div className='bg-[#E9C0E9] grid grid-cols-2'>


            <div className='col1 flex flex-col justify-center items-center mt-10'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-4xl font-bold text-gray-800'>Create your LinkNext</h1>
                    <div className="item">
                        <h2 className='font-semibold text-2xl text-gray-700'>Step 1 : Claim a Handle</h2>
                        <div className='mx-4'>
                            <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className='px-4 py-2 mx-2 my-2 rounded-full focus:outline-purple-400 bg-white' type="text" placeholder='Choose a Handle' />
                        </div>
                    </div>
                    <div className="item">
                        <h2 className='font-semibold text-2xl text-gray-700'>Step 2 :Add Links</h2>
                        {links && links.map((item, index) => {
                            return <div key={index} className='mx-4'>
                                <input value={item.link || ""} onChange={e=> { handleChange(index, e.target.value, item.linktext) }} className='px-4 py-2 mx-2 my-2 rounded-full focus:outline-purple-400 bg-white' type="text" placeholder='Enter link' />
                                <input value={item.linktext || ""} onChange={e=> { handleChange(index, item.link, e.target.value) }} className='px-4 py-2 mx-2 my-2 rounded-full focus:outline-purple-400 bg-white' type="text" placeholder='Enter linktext' />
                            </div>
                        })}
                        <button onClick={() => addLink()} className='p-5 py-2 mx-2 bg-[#502274] text-white font-bold rounded-3xl'>+ Add Link</button>
                    </div>
                    <div className="item">
                        <h2 className='font-semibold text-2xl text-gray-700'>Step 3 : Add Profile picture and Submit</h2>
                        <div className='mx-4 flex flex-col'>
                            <input value={pic || ""} onChange={e => { setpic(e.target.value) }} className='px-4 py-2 mx-2 my-2 rounded-full focus:outline-purple-400 bg-white' type="text" placeholder='Enter link to your Picture' />
                            <button disabled={pic == "" || handle == "" || links[0].linktext == ""} onClick={() => { submitLinks() }} className='disabled:bg-gray-300 p-5 py-2 mx-2 my-5 w-fit bg-[#502274] text-white font-bold rounded-3xl'>Submit</button>
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