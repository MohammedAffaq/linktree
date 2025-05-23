"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {

  const [text, setText] = useState("")
  const router = useRouter()
  const url = process.env.NEXT_PUBLIC_HOST

   const createTree = () => { 
    router.push(`${url}/generate?handle=${text}`)
  }




  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
        <div className="flex justify-center flex-col ml-[10vw] gap-3">
          <p className="text-yellow-300 font-bold text-7xl">Everything you  </p>
          <p className="text-yellow-300 font-bold text-7xl">are. In one,</p>
          <p className="text-yellow-300 font-bold text-7xl">simple link in bio.</p>
          <p className="text-yellow-300 text-md my-4">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-3">
            <input value={text} onChange={(e) => setText(e.target.value)} className="px-2 py-2 focus:outline-green-900 bg-white rounded-lg" type="text" placeholder="Enter Handle" />
            <button onClick={() => createTree()} className="bg-red-200 font-semibold rounded-full px-4 py-4">Claim your linkNext</button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mr-[10vw] mt-10">
          <img src="/home.png" alt="home image" />
        </div>
      </section>
    </main>
  );
}
