import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
// import { AnimatedTooltipPreview } from './devTeam'

const Footer = () => {
    return (
        <footer className=" bg-slate-300 pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className='flex flex-wrap gap-x-2'>
                            <Image className="hidden md:flex" src="https://res.cloudinary.com/dhijs4dq0/image/upload/v1722259838/logo_zgktuy.png" alt="CRESCENT" width={200} height={200} />
                            <Image className='' src={"https://res.cloudinary.com/dhijs4dq0/image/upload/v1735665064/logo_iyrpgz.png"} height={200} width={200} alt='TECHFUSION' />
                        </div>
                        <h5 className="text-lg mt-2 mb-2 text-black">
                            Find us on any of these platforms.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6 flex">
                            <button className="bg-white hover:bg-slate-300 flex text-lightBlue-400 shadow-lg  h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none flex-col mr-2 text-3xl font-extrabold text-[#c026d3]" type="button"> <Link target="_blank" href="https://www.instagram.com/techfusion_2k25?igsh=OXNzeTluNm92Zzlz"><FaInstagram /></Link>
                            </button><button className="bg-white hover:bg-slate-300 flex text-lightBlue-400 shadow-lg  h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none flex-col mr-2 text-3xl font-extrabold text-[#2563eb]" type="button">
                                <Link target='_blank' href={"https://www.linkedin.com/school/crescentinstitute/"}><FaLinkedin /></Link></button>
                            <button className="bg-white hover:bg-slate-300 flex text-lightBlue-400 shadow-lg  h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none flex-col mr-2 text-3xl font-extrabold text-red-600" type="button">
                                <Link target='_blank' href={"https://www.youtube.com/@BSACrescentInstitute/videos"}> <FaYoutube /></Link></button>
                            <button className="bg-white hover:bg-slate-300 flex text-lightBlue-400 shadow-lg  h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none flex-col mr-2 text-3xl font-extrabold text-red-600" type="button">
                                <Link target='_blank' href={"mailto:techfusion2k25@gmail.com"}><SiGmail /></Link></button>

                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">


                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-black text-lg font-bold mb-2">Contact</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">912356245grgr</a>
                                    </li>
                                    <li>
                                        <a className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">45636356345rw</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1 text-black">
                            Copyright © <span id="get-current-year text-black">2024</span>       <a target="_blank" href="https://github.com/suhailopensource" className="text-black hover:text-white">techfusion2k25</a>.
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer