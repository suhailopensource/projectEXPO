import Link from 'next/link'
import React from 'react'
import '@/app/globals.css'

const MarqueeHome = () => {
    return (
        <div className=' w-full flex justify-evenly'>
            <div className={" text-xl font-bold marquee"}>
                <div className={"marqueeContent  text-black"}>
                    Welcome to TechFusion&apos;25! A National Level Project Expo - We welcome you to join us now!
                </div>
            </div>
            {/* <div className=' rounded-md '>

                <Link className='p-[1px] pb-[3px] px-2 rounded bg-[#7f1d1d] text-lg font-bold text-white underline   mr-2' href={"https://forms.gle/kz2dMhhwHuAMn54B7"} target='_blank'>REGISTER NOW</Link>
            </div> */}



        </div>
    )
}

export default MarqueeHome
