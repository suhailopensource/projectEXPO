import type { Metadata } from "next";
import "./globals.css";
// import { ThemeProvider } from "@/components/providers/ThemeProviders";

import Navbar from "@/components/shared/Navbar";
// import SideNavigation from "@/components/SideNavigation";
// import ThemeSwitcher from "@/components/shared/ThemeSwitcher";
import { SheetDemo } from "@/components/shared/mobileBar";
import Image from "next/image";
// import ThemeSwitcher from "@/components/shared/ThemeSwitcher";
// import Footer from "@/components/shared/Footer";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "TechFusion 2025",
  description: "Welcome to TechFusion'25! A National Level Project Expo Proudly organized by the Department of Information Technology at B. S. Abdur Rahman Crescent Institute of Science and Technology,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={"scroll-smooth"}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        > */}
        <div className=" min-h-screen min-w-full  bg-white">
          <nav className="flex justify-end paddinglol w-full bg-blur-3xl bg-white">
            <div className="flex gap-x-6 py-6 items-center w-full">
              <div className=" flex items-center justify-between w-full">
                <div className="pl-2 flex gap-2">
                  <Image className="hidden md:flex" src="https://res.cloudinary.com/dhijs4dq0/image/upload/v1722259838/logo_zgktuy.png" alt="CRESCENT" width={300} height={40} />
                  <Image className="flex md:hidden" src="https://res.cloudinary.com/dhijs4dq0/image/upload/v1722259838/logo_zgktuy.png" alt="CRESCENT" width={200} height={40} />
                  <Image className="" src="https://res.cloudinary.com/dhijs4dq0/image/upload/v1735632112/25th_Logo_kiwuud.png" alt="25 years" width={60} height={0} />

                  {/* <Image className="" src="https://res.cloudinary.com/dhijs4dq0/image/upload/v1721747314/logo_cres_pk6nmd.png" alt="CRESCENT" width={250} height={0} /> */}
                </div>
                <div className="hide-big-navbar">
                  <Navbar />

                </div>
                <div className="pl-2 flex gap-2">

                  <Image className="hidden md:flex" src="https://res.cloudinary.com/dhijs4dq0/image/upload/v1722259738/3-removebg-preview_ksq5dd.png" alt="SIT" width={150} height={0} />

                  {/* <Image className="md:hidden" src="https://res.cloudinary.com/dhijs4dq0/image/upload/v1722526840/WhatsApp_Image_2024-08-01_at_9.09.54_PM_bjftsb.jpg" alt="SIT" width={280} height={100} /> */}

                  <Image className="hidden md:flex" src="https://res.cloudinary.com/dhijs4dq0/image/upload/v1721485191/logoITT-removebg-preview_dmstie.png" alt="ITT" width={200} height={0} />
                  {/* <Image className="" src="https://res.cloudinary.com/dhijs4dq0/image/upload/v1721747314/logo_cres_pk6nmd.png" alt="CRESCENT" width={250} height={0} /> */}
                </div>

              </div>


              <div className="hide-small-navbar relative impopadding">
                <SheetDemo />
              </div>
              {/* <ThemeSwitcher /> */}
            </div>

          </nav>
          <Separator className="w-[100%] h-[1px] bg-black" />
          {children}
          <Footer />
        </div>


        <ScrollToTopButton />
        {/* </ThemeProvider> */}

      </body>
    </html>
  );
}