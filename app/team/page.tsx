import FacultyCard from '@/components/shared/facultyCards'
import React from 'react'

const page = () => {
    return (
        <div className='flex justify-center items-center flex-wrap gap-4 p-10 flex-col'>
            <div className='flex'>

                <FacultyCard />
            </div>
            <div className='flex flex-col gap-4 md:flex md:gap-x-10 md:flex-row'>
                <FacultyCard />
                <FacultyCard />
            </div>
        </div>
    )
}

export default page