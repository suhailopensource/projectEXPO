"use client";

import PPT from "@/components/shared/PPT";
import Rules from "@/components/shared/Rules";
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
        realdescription: "Mobile & Web Development is all about creating apps and websites that people use every day. Whether it's a mobile app on a phone or a website on a computer, this domain lets you bring your ideas to life digitally. In today's digital world, mobile apps and websites are the backbone of nearly every business and service. Your project could be the next big app website that people love to use!",
        htmlPart: <ul className="list-disc text-lg"><li>Designing user-friendly apps for smartphones or tablets?

        </li>
            <li>  Building websites that work on any device?
            </li>

            <li>Creating interactive and engaging online experiences?</li>
        </ul>,
        description: "Ready to share your digital creations? Register now and let your project shine!",
    },
    {
        id: "cyber",
        title: "Cybersecurity",
        realdescription: "Cybersecurity keeps our data safe from hackers and protects systems from cyber threats. If you're passionate about keeping information secure and preventing digital attacks, this is the domain for you. With so much of our lives online, cybersecurity is more important than ever. Your project could help businesses or individuals stay safe from cybercrime and protect personal data.",
        htmlPart: <ul className="list-disc text-lg"><li>Securing networks from cyber threats?


        </li>
            <li>      Testing systems for vulnerabilities?


            </li>

            <li>Developing encryption or security tools?</li>
        </ul>,
        description: "Got a solution to make the digital world safer? Register now and show us how you can protect the future!",
    },
    {
        id: "iotrobot",
        title: "IoT & Robotics",
        realdescription: "IoT (Internet of Things) and Robotics combine smart technology with physical devices to make them more autonomous and connected. From home automation to robots that can perform tasks, this domain is about creating the next wave of technology. The world is getting smarter with connected devices and intelligent machines. Your project could revolutionize industries or make life easier and more efficient.",
        htmlPart: <ul className="list-disc text-lg"><li>Building smart devices that connect to the internet?


        </li>
            <li>     Designing robots that can perform tasks on their own? </li>
            <li>Developing systems that automate everyday processes?</li>
        </ul>,
        description: "If you're ready to innovate and build the future, register now and bring your IoT and Robotics ideas to life!",
    },
    {
        id: "innovation",
        title: "Innovations in IT",
        realdescription: "This domain is all about showcasing creative and tech-driven ideas from students! Whether it’s solving everyday problems or creating something entirely new, your innovative thinking can make a real difference. Innovation starts with curiosity. This is your chance to show off your creative solutions, whether it’s a new tool, a fresh approach to an old problem, or an idea that can change the world.",
        htmlPart: <ul className="list-disc text-lg"><li>Building a new educational tool?


        </li>
            <li>     Creating something that helps the environment? </li>
            <li>Coming up with a tech idea to improve health or daily life?</li>
        </ul>,
        description: "Have a bright idea? Register now and be part of the next wave of young innovators!",
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

                <Rules />
                <div className="mb-2">

                    <PPT />
                </div>

                {/* <div className="flex mt-10 gap-4 flex-wrap">
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
                </div> */}

            </div>
        </div>
    );
};

export default Page;
