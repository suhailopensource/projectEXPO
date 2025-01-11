import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const PPT = () => {
    return (
        <div className='flex flex-col gap-y-7'>

            <Button className="relative h-16 w-full text-xl bg-white text-black hover:bg-opacity-70 hover:text-white">
                <Link
                    href={
                        "https://docs.google.com/uc?export=download&id=18A_87jdkegw602RjM0hRhiZmx17MIKm_"
                    }
                    target="_blank"
                >
                    <div>
                        <div>DOWNLOAD PPT FORMAT</div>
                        <div className="absolute right-[-6px] top-[-3px]">
                            <span className="relative flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                            </span>
                        </div>
                    </div>
                </Link>
            </Button>
            <Button className="relative h-16 w-full text-xl bg-white text-black hover:bg-opacity-70 hover:text-white">
                <Link
                    href={
                        "https://docs.google.com/presentation/d/18A_87jdkegw602RjM0hRhiZmx17MIKm_/preview"
                    }
                    target="_blank"
                >
                    <div>
                        <div>PREVIEW PPT FORMAT</div>
                        <div className="absolute right-[-6px] top-[-3px]">
                            <span className="relative flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                            </span>
                        </div>
                    </div>
                </Link>
            </Button>

        </div>
    )
}

export default PPT