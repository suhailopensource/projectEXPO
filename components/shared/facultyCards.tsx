
import Image from 'next/image'
import React, { ReactNode } from 'react'

const FacultyCard = ({ src, name, description }: { src: string; name: string; description: ReactNode }) => {
    return (
        <div className="max-w-72 rounded overflow-hidden shadow-lg p-2">
            <Image className="w-full" src={src} alt="" width={300} height={300} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    {description}

                </p>
            </div>

        </div>
    )
}

export default FacultyCard