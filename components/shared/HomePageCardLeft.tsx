import Image from 'next/image'
import React from 'react'

const HomePageCardLeft = () => {
    return (
        <div className="bg-background py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:gap-12 ">
                    <div className='md:mt-[160px]'>
                        <div className="h-full overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                            <Image src="https://res.cloudinary.com/dhijs4dq0/image/upload/v1722422171/WhatsApp_Image_2024-07-30_at_8.11.06_PM_1_wuzq1n.jpg" loading="lazy" alt="Photo by Martin Sanchez" width={1000} height={1000} className="h-full w-full object-cover object-center" />
                        </div>
                    </div>

                    <div className="md:pt-8 flex flex-col items-center">
                        <p className="text-center font-bold text-indigo-500 md:text-left">About Us</p>

                        <h1 className="mb-4 text-center text-2xl font-bold text-black sm:text-3xl md:mb-6 ">THE DEPARTMENT OF INFORMATION TECHNOLOGY</h1>
                        <div className='text-primary  text-justify'>

                            <p className='text-xl'>
                                <span className="text-xl font-bold">E</span>stablished in  <span className="text-xl font-bold">1999</span>, the Department of Information Technology offers accredited  <span className="text-xl font-bold">B.Tech, M.Tech, and Ph.D.</span> programs, emphasizing an outcome-based teaching-learning process. Our curriculum, designed with industry participation, ensures our students are well-prepared for the workforce. With state-of-the-art laboratories, ICT-enabled classrooms, and a robust Learning Management System, we provide a modern and comprehensive educational experience.


                                <span className="text-xl font-bold"> O</span>ur highly qualified <span className="text-xl font-bold">faculty members, strong industry connections, and excellent placement records</span>  in reputed organizations highlight our commitment to excellence. Students benefit from specialized courses in emerging technologies like Artificial Intelligence, Machine Learning, and Data Science, often taught by industry experts and international professors. Additionally, our emphasis on value-added and MOOC courses, along with mandatory industry internships, ensures our graduates are well-equipped for the challenges of the IT industry.
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePageCardLeft