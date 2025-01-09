import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='domainPage flex justify-center items-center flex-col'>
            <div className='my-10'><Image width={200} height={200} className='w-auto h-auto' alt="TECHFUSION" src={"https://res.cloudinary.com/dhijs4dq0/image/upload/v1735665064/logo_iyrpgz.png"} /></div>
            <div>
                <Image width={400} height={500} className='w-auto h-auto mb-4' alt="TECHFUSION" src={"https://res.cloudinary.com/dhijs4dq0/image/upload/v1736403242/WhatsApp_Image_2025-01-09_at_11.00.40_AM_yzyxr9.jpg"} />
            </div>
            <div>
                <Image width={400} height={500} className='w-auto h-auto' alt="TECHFUSION" src={"https://res.cloudinary.com/dhijs4dq0/image/upload/v1736403242/WhatsApp_Image_2025-01-09_at_10.58.16_AM_jgyvkk.jpg"} />

            </div>
            <div className='flex items-center justify-center mt-10 gap-4 flex-wrap mb-10'>
                <Link href={"https://forms.gle/85vbYybHWyobP1tU6"} target="_blank" className='animate-bounce'>

                    <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-4 flex justify-center items-center font-extrabold">
                        <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                        <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                        <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                        <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                        <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                        <p className="z-10">REGISTRATION FOR COLLEGE STUDENTS</p>
                    </button>
                </Link>
                <Link href={"https://forms.gle/8TLZBaLTkrRXtDsR8"} target="_blank" className='animate-bounce'>

                    <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-4 flex justify-center items-center font-extrabold">
                        <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                        <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                        <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                        <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                        <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                        <p className="z-10">REGISTRATION FOR SCHOOL STUDENTS</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default page