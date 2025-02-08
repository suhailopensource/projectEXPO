import Image from 'next/image'

const page = () => {
    return (
        <div className='domainPage flex justify-center items-center flex-col gap-y-7'>
            {/* <div className='my-10'><Image width={200} height={200} className='w-auto h-auto' alt="TECHFUSION" src={"https://res.cloudinary.com/dhijs4dq0/image/upload/v1735665064/logo_iyrpgz.png"} /></div> */}
            <div className='my-10'><div className='text-center text-5xl text-white  m-2'>Thank you for making Techfusion &apos;25 a success!</div></div>
            <div className='border'>

                <div>
                    <Image width={400} height={500} className='w-auto h-auto mb-4' alt="TECHFUSION" src={"https://res.cloudinary.com/dhijs4dq0/image/upload/v1738991600/1_vhk6ms.jpg"} />
                </div>
                <div className='flex  text-justify text-white md:w-[600px] flex-wrap w-[90%] px-2'>
                    The Department of Information Technology, B. S. Abdur Rahman Crescent Institute of Science and Technology proudly hosted &quot;TechFusion&apos;25 - A National Level Project Expo&quot;, an exciting platform for students to showcase their technical innovations. On 30th January 2025, the event brought together over 100 participants from 12+ colleges and schools, competing across five diverse domains: Artificial Intelligence / Machine Learning / Data Science, Mobile & Web Development, Cybersecurity, IoT & Robotics, and Innovations in IT.
                </div>
            </div>
            <div className='border'>


                <Image width={400} height={500} className='w-auto h-auto ' alt="TECHFUSION" src={"https://res.cloudinary.com/dhijs4dq0/image/upload/v1738991600/2_z1wsy8.jpg"} />


            </div>
            <div className='border mb-2'>

                <div>
                    <Image width={400} height={500} className='w-auto h-auto mb-2' alt="TECHFUSION" src={"https://res.cloudinary.com/dhijs4dq0/image/upload/v1738991600/3_tjffza.jpg"} />
                </div>
                <div>
                    <Image width={400} height={500} className='w-auto h-auto mb-2' alt="TECHFUSION" src={"https://res.cloudinary.com/dhijs4dq0/image/upload/v1738991600/4_l8qxxb.jpg"} />
                </div>
                <div>
                    <Image width={400} height={500} className='w-auto h-auto mb-2' alt="TECHFUSION" src={"https://res.cloudinary.com/dhijs4dq0/image/upload/v1738991600/5_pagcwy.jpg"} />
                </div>
                <div>
                    <Image width={400} height={500} className='w-auto h-auto mb-4' alt="TECHFUSION" src={"https://res.cloudinary.com/dhijs4dq0/image/upload/v1738991600/6_urdrln.jpg"} />
                </div>
                <div className='flex  text-justify text-white md:w-[600px] flex-wrap w-[90%] px-2'>
                    From an AI powered sign language translator and a smart home automation system to a medication reminder robot and an IoT plant care system, the innovations inspired attendees and judges alike. Every project was a testament to the participant&apos;s hard work, and all innovations were recognized with awards. With an overwhelming response and active participation, the expo concluded on a high note.
                </div>
            </div>

            {/* <div className='flex items-center justify-center mt-10 gap-7 flex-wrap mb-10'>

                <Link href="https://forms.gle/85vbYybHWyobP1tU6" target="_blank" className="animate-bounce relative">
                    <div className="absolute -top-[-26px] -left-[36px] w-20 h-8 bg-red-500 shadow-lg transform -rotate-45 origin-top-left z-20 flex items-center justify-center">
                        <span className="text-white text-xs font-bold text-center b">Rs. 100/- per student</span>
                    </div>
                    <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-4 flex justify-center items-center font-extrabold">
                        <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                        <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                        <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                        <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                        <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                        <p className="z-10">REGISTRATION FOR COLLEGE STUDENTS</p>
                    </button>
                </Link>

                <Link href={"https://forms.gle/8TLZBaLTkrRXtDsR8"} target="_blank" className='animate-bounce relative'>
                    <div className="absolute -top-[-20px] -left-[20px] w-16 h-6 bg-red-500 shadow-lg transform -rotate-45 origin-top-left z-20 flex items-center justify-center">
                        <span className="text-white text-xs font-bold text-center b">Free</span>
                    </div>
                    <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-4 flex justify-center items-center font-extrabold">
                        <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                        <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                        <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                        <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                        <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                        <p className="z-10">REGISTRATION FOR SCHOOL STUDENTS</p>
                    </button>
                </Link>
            </div> */}
        </div>
    )
}

export default page