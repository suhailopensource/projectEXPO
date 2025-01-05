import Image from 'next/image'
import React from 'react'

const FacultyCard = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image className="w-full" src="https://res.cloudinary.com/dhijs4dq0/image/upload/v1722348140/sir_puazrz.jpg" alt="" width={1000} height={1000} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Dr. Rajendran</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor
                </p>
            </div>

        </div>
    )
}

export default FacultyCard