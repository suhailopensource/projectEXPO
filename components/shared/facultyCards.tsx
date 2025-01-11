
import Image from 'next/image'
import React, { ReactNode } from 'react'

const FacultyCard = ({ src, name, description }: { src: string; name: string; description: ReactNode }) => {
    return (
        <div className="max-w-60 flex-wrap rounded overflow-hidden shadow-lg p-2 flex items-center justify-center flex-col">
            <Image className="" src={src} alt="" width={200} height={200} />
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