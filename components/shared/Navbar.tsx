"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { Separator } from "../ui/separator";
import { useRouter } from "next/navigation"; // Ensure this is from "next/navigation"

const Navbar = () => {
    const router = useRouter();
    const path = usePathname(); // Ensure `usePathname` is used correctly



    return (
        <div className="flex flex-col gap-x-5 font-medium w-full justify-center items-center">
            <div>
                <h2 className="text-black text-xl md:text-2xl font-bold text-center mb-4 flex flex-col">
                    The Department of <span className="text-3xl md:text-4xl font-extrabold text-black">Information Technology</span>
                </h2>
            </div>
            <div className="flex">
                <Separator className="bg-slate-500 w-[1px] h-[20px] mt-4" />
                <div className={`${path === "/" ? "text-secondary bg-secondary-foreground" : "text-primary"} px-4 rounded py-1 mt-2`}>
                    <Link href="/">Home</Link>
                </div>
                <Separator className="bg-slate-500 w-[1px] h-[20px] mt-4" />
                <div className={`${path === "/techfusion" ? "text-secondary bg-secondary-foreground" : "text-primary"} px-4 rounded py-1 mt-2`}>
                    <Link href="/techfusion">Techfusion</Link>
                </div>
                <Separator className="w-[1px] h-[20px] bg-slate-500 mt-4" />
                <div className={`${path === "/domain" ? "text-secondary bg-secondary-foreground" : "text-primary"} px-4 rounded py-1 mt-2`}>
                    {path === "/" ? (
                        <a href="#domain" className="text-primary">
                            Domain&apos;s
                        </a>
                    ) : (
                        <a href="/domain" className="">
                            Domain&apos;s
                        </a>
                    )}
                </div>
                <Separator className="bg-slate-500 w-[1px] h-[20px] mt-4" />
                <div className={`${path === "/team" ? "text-secondary bg-secondary-foreground" : "text-primary"} px-4 rounded py-1 mt-2`}>
                    <Link href="/team">Team</Link>
                </div>
                <Separator className="bg-slate-500 w-[1px] h-[20px] mt-4" />
                <div className={`${path === "/contact" ? "text-secondary bg-secondary-foreground" : "text-primary"} px-4 rounded py-1 mt-2`}>
                    <Link href="/contact">Contact</Link>
                </div>
                <Separator className="bg-slate-500 w-[1px] h-[20px] mt-4" />
            </div>
        </div>
    );
};

export default Navbar;
