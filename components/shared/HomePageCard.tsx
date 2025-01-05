import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomePageCard = () => {
    return (
        <div className="bg-background py-6 sm:py-8 lg:py-12 flex items-center justify-center">
            <div className=' h-[100%] w-[100%]'>
                <div className='flex items-center justify-center flex-col'>
                    <div className='m-2'>
                        <div className='text-xl text-center font-bold'>ABOUT</div>
                        <Image src={"https://res.cloudinary.com/dhijs4dq0/image/upload/v1735665064/logo_iyrpgz.png"} alt='TECHFUSION 2025' width={500} height={100} />
                        <div className='text-lg font-bold text-center'>A National Level Project Expo</div>
                    </div>
                    <div className='text-xl w-[90%] md:w-[80%] mt-10 text-justify' >
                        <p><span className="text-xl font-bold">P</span>roudly organized by the Department of Information Technology at B. S. Abdur Rahman Crescent Institute of Science and Technology, <span className="text-xl font-bold">TechFusion&apos;25 is a platform for students to showcase their innovative technical projects. This expo brings together the brightest minds to demonstrate their work in various fields of engineering. </span>
                            Students from engineering branches, such as <span className="text-xl font-bold">IT, CSE, Cybersecurity, AI & DS, IoT, EEE, ECE, and E&I, are invited to participate!</span> This is your opportunity to display your technical expertise and creativity. Whether you're passionate about Artificial Intelligence, Cybersecurity, or Software Development, this event provides a dynamic stage to present your work, exchange ideas, and inspire one another.
                            The event is not just about showcasing projects; it is about fostering collaboration, innovation, and the spirit of technological advancement. At this expo, students will have the chance to receive valuable feedback, gain insights into emerging trends, and explore career opportunities in the tech industry.
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-10 gap-4 flex-wrap'>
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
        </div>

    )
}

export default HomePageCard