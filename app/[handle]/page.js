import clientPromise from "@/lib/mongodb"
import Link from "next/link"
import { notFound } from "next/navigation"


export default async function Page({ params }) {
    const { handle } = await params
    const client = await clientPromise
    const db = client.db("linktree")
    const collection = db.collection("links")

    const item = await collection.findOne({ handle: handle })

    if (!item) {
        return notFound
    }


    return <div className="flex min-h-screen bg-purple-200 justify-center items-center flex-col">
        <div className="photo flex flex-col justify-center items-center">
            <img className="rounded-full object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32" src={item.pic} alt="profile pic" />
            <span className="font-bold text-xl my-3">@{item.handle}</span>
            <span className="desc w-80 text-center">{item.desc}</span>
            <div className="links">
                {item.links.map((item, index) => {
                    return <Link key={index} href={item.link}><div className="bg-purple-100 px-2 py-4 min-w-96 my-3 rounded-md flex justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">{item.linktext}</div></Link>
                })}
            </div>
        </div>
        <Link className="font-bold my-3 underline" href="/">Go to Home</Link>
    </div>
}