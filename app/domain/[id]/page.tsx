"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const items = [
    {
        id: "aiml",
        title: "Artificial Intelligence, Machine Learning, Data Science",
        realdescription: "AI, Machine Learning, and Data Science are fields where computers can think like humans, learn from experience, and help make decisions. If you're into making smart systems, analyzing huge amounts of data, or building algorithms that learn and improve, this is the domain for you. AI, ML, and Data Science are shaping the future! Whether it’s creating intelligent virtual assistants or analyzing big data to predict future trends, this field is at the forefront of innovation.",
        htmlPart: <ul className="list-disc text-lg"><li>Teaching machines to learn from data?</li>
            <li> Creating predictive models?</li>

            <li>Analyzing large datasets to uncover valuable insights?</li>
        </ul>,
        description: "Register now and showcase your groundbreaking ideas in AI/ML/DS!",
    },
    {
        id: "web",
        title: "Mobile & Web App Development",
        description: "Ready to share your digital creations? Register now and let your project shine!",
    },
    {
        id: "cyber",
        title: "Cybersecurity",
        description: "Got a solution to make the digital world safer? Register now and show us how you can protect the future!",
    },
    {
        id: "innovation",
        title: "Innovations in IT",
        description: "Have a bright idea? Register now and be part of the next wave of young innovators!",
    },
    {
        id: "iotrobot",
        title: "IoT & Robotics",
        description: "If you're ready to innovate and build the future, register now and bring your IoT and Robotics ideas to life!",
    },
];

const Page = () => {
    const params = useParams();
    const id = params.id;

    const item = items.find((item) => item.id === id);

    if (!item) {
        return <p>Item not found</p>;
    }

    return (
        <div className="domainPage">

            <h1 className="text-5xl text-secondary pt-4 font-bold uppercase text-center mb-10">{item.title}</h1>

            <div className="text-secondary flex w-[100%] items-center justify-center flex-col px-2 gap-y-4">
                <div>

                </div>

                <p className="md:w-[80%] text-justify text-xl">{item.realdescription}</p>
                <div>

                    <div className="text-xl text-justify font-bold mb-2">Is your project about:</div>
                    <div className="text-justify">{item.htmlPart}</div>
                </div>
                <p className="md:w-[80%] text-justify text-xl">{item.description}</p>

                <div className="flex mt-10 gap-4 flex-wrap">
                    <Link href={"https://forms.gle/85vbYybHWyobP1tU6"} target="_blank" className='animate-bounce'>

                        <button className="relative border0 duration-500 group cursor-pointer  overflow-hidden h-14 bg-orange-500 w-56 rounded-md  p-4 flex justify-center items-center font-extrabold hover:opacity-75">

                            <p className="z-10">REGISTRATION FOR COLLEGE STUDENTS</p>
                        </button>
                    </Link>
                    <Link href={"https://forms.gle/8TLZBaLTkrRXtDsR8"} target="_blank" className='animate-bounce'>

                        <button className="relative border0 duration-500 group cursor-pointer  overflow-hidden h-14 bg-orange-500 w-56 rounded-md  p-4 flex justify-center items-center font-extrabold hover:opacity-75">

                            <p className="z-10">REGISTRATION FOR SCHOOL STUDENTS</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;
