
import {
    IconBrain,
    IconBrandGooglePlay,
    IconPresentationFilled,
    IconRobot,
    IconShieldLockFilled
} from "@tabler/icons-react";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function BentoGridDemo() {
    return (
        <BentoGrid className="max-w-4xl mx-auto  mb-20">
            {items.map((item, i) => (

                <Link href={item.link} key={i}>

                    <BentoGridItem


                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 ? "!md:col-span-2" : ""}
                    />
                </Link>

            ))}
        </BentoGrid>
    );
}

const items = [
    {
        title: "AI/ML/DS (Artificial Intelligence, Machine Learning, Data Science)",
        description: "Register now and showcase your groundbreaking ideas in AI/ML/DS!",
        header: "https://res.cloudinary.com/dhijs4dq0/image/upload/v1735717749/aiml_ds_eyunj8.png",
        icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
        link: "/domain/aiml"
    },
    {
        title: "Mobile & Web App Development",
        description: "Ready to share your digital creations? Register now and let your project shine!",
        header: "https://res.cloudinary.com/dhijs4dq0/image/upload/v1735717749/mobile_app_dev_k6e3h7.png",
        icon: <IconBrandGooglePlay className="h-4 w-4 text-neutral-500" />,
        link: "/domain/web"
    },
    {
        title: "Cybersecurity",
        description: "Got a solution to make the digital world safer? Register now and show us how you can protect the future!",
        header: "https://res.cloudinary.com/dhijs4dq0/image/upload/v1735717749/cybersecurity_aa5er7.png",
        icon: <IconShieldLockFilled className="h-4 w-4 text-neutral-500" />,
        link: "/domain/cyber"
    },
    {
        title: "IoT & Robotics",
        description: "If you're ready to innovate and build the future, register now and bring your IoT and Robotics ideas to life!",
        header: "https://res.cloudinary.com/dhijs4dq0/image/upload/v1735717749/IoT_vz8dyn.png",
        icon: <IconRobot className="h-4 w-4 text-neutral-500" />,
        link: "/domain/iotrobot"
    },
    {
        title: "Innovations in IT",
        description:
            "Have a bright idea? Register now and be part of the next wave of young innovators!",
        header: "https://res.cloudinary.com/dhijs4dq0/image/upload/v1735717749/innovations_xbxhap.png",
        icon: <IconPresentationFilled className="h-4 w-4 text-neutral-500" />,
        link: "/domain/innovation"
    },

];
