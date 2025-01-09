
import { BentoGridDemo } from "@/components/shared/Domains";
import HomePageCard from "@/components/shared/HomePageCard";
import HomePageCardLeft from "@/components/shared/HomePageCardLeft";

import Image from "next/image";

export default function Home() {
    console.log("HACKING ALERT - DONT TRY TO BE SNEAKY LIL BRO THERE IS NOTHING TO SEE HERE. BUT SINCE YOU ARE HERE VISIT MY PORTFOLIO - https://suhailopensource.vercel.app/")
    return (
        <div className="scroll-smooth">
            {/* <section className="h-[30px] w-full bg-[#fb923c] flex justify-center items-center">
                <MarqueeHome />

            </section> */}


            <div className="homePage flex  items-center justify-center">
                <div className=" justify-center flex items-center flex-col">
                    <div>

                        <Image height={400} width={400} alt={"TECHFUSION 2025"} src={"https://res.cloudinary.com/dhijs4dq0/image/upload/v1735632112/WhatsApp_Image_2024-12-21_at_11.25.42.jpeg_tebdky.png"} />
                    </div>
                    <div className="text-3xl text-white">
                        Welcome to TechFusion&apos;25!


                    </div>
                    <div className="text-2xl text-white">A National Level Project Expo</div>
                </div>
            </div>
            <div>
                <HomePageCard />
                <HomePageCardLeft />
            </div>
            <div id="domain" className="text-3xl font-bold uppercase text-center mb-2 ">Domains of Participation</div>
            <BentoGridDemo />

        </div>
    );
}
