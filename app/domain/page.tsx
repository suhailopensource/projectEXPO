import { BentoGridDemo } from '@/components/shared/Domains'
import React from 'react'

const page = () => {
    return (
        <div className=''>
            <div className='text-3xl text-center font-bold mt-2'>
                DOMAIN&apos;S
            </div>
            <div>

                <BentoGridDemo />
            </div>

        </div>
    )
}

export default page