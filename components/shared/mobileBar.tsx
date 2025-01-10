"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";


export function SheetDemo() {
    const path = usePathname();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <FaBars className="text-black" />
            </SheetTrigger>
            <SheetContent className="align-center">
                <SheetHeader className="mb-4">
                    <SheetTitle className="m-10">
                        <Image className="" src="https://res.cloudinary.com/dhijs4dq0/image/upload/v1722259838/logo_zgktuy.png" alt="CRESCENT" width={250} height={0} />
                    </SheetTitle>
                </SheetHeader>
                <ul>
                    <li className="mb-2">
                        <SheetClose asChild>
                            <Link
                                href={"/"}
                                className={`${path === "/"
                                    ? "bg-secondary-foreground text-primary-foreground"
                                    : ""
                                    } hover:bg-gray-100 justify-center py-2 rounded   text-xl text-gray-400 hover:text-gray-800 flex items-center gap-2   `}
                            >
                                Home
                            </Link>
                        </SheetClose>
                    </li>
                    <li className="mb-2">
                        <SheetClose asChild>
                            <Link
                                href={"/techfusion"}
                                className={`${path === "/techfusion"
                                    ? "bg-secondary-foreground text-primary-foreground"
                                    : ""
                                    } hover:bg-gray-100 justify-center py-2 rounded   text-xl text-gray-400 hover:text-gray-800 flex items-center gap-2   `}
                            >
                                Techfusion
                            </Link>
                        </SheetClose>
                    </li>
                    <li className="mb-2">

                        <div

                            className={`${path === "/domain"
                                ? "bg-secondary-foreground text-primary-foreground"
                                : ""
                                } hover:bg-gray-100 justify-center py-2   text-xl rounded text-gray-400 hover:text-gray-800 flex items-center gap-2`}
                        >
                            {path === "/" ? (
                                <SheetClose asChild>

                                    <Link href="#domain" className="">
                                        Domain&apos;s
                                    </Link>
                                </SheetClose>
                            ) : (
                                <SheetClose asChild>

                                    <Link href="/domain" className="">
                                        Domain&apos;s
                                    </Link>
                                </SheetClose>
                            )}
                        </div>

                    </li>
                    <li className="mb-2">
                        <SheetClose asChild>
                            <Link
                                href={"/team"}
                                className={`${path === "/team"
                                    ? "bg-secondary-foreground text-primary-foreground"
                                    : ""
                                    } hover:bg-gray-100 justify-center py-2 rounded   text-xl text-gray-400 hover:text-gray-800 flex items-center gap-2   `}
                            >
                                Team
                            </Link>
                        </SheetClose>
                    </li>

                    {/* <li className="mb-2">
                        <SheetClose asChild>
                            <Link
                                href={"/archives"}
                                className={`${path === "/archives"
                                    ? "bg-secondary-foreground text-primary-foreground"
                                    : ""
                                    } hover:bg-gray-100 justify-center py-2   text-xl rounded text-gray-400 hover:text-gray-800 flex items-center gap-2`}
                            >
                                Archives
                            </Link>
                        </SheetClose>
                    </li> */}
                    {/* <li className="mb-2">
                        <SheetClose asChild>
                            <Link
                                href={"/silverjubilee"}
                                className={`${path === "/silverjubilee"
                                    ? "bg-secondary-foreground text-primary-foreground"
                                    : ""
                                    } hover:bg-gray-100 justify-center py-2   text-xl rounded text-gray-400 hover:text-gray-800 flex items-center gap-2`}
                            >
                                Silver Jubilee
                            </Link>
                        </SheetClose>
                    </li> */}
                    {/* <li className="mb-2">
                        <SheetClose asChild>
                            <Link
                                href={"/contact"}
                                className={`${path === "/contact"
                                    ? "bg-secondary-foreground text-primary-foreground"
                                    : ""
                                    } hover:bg-gray-100 justify-center  py-2 rounded   text-xl text-gray-400 hover:text-gray-800 flex items-center gap-2`}
                            >
                                Contact
                            </Link>
                        </SheetClose>
                    </li> */}
                    <li className="mb-2">

                    </li>
                </ul>
                <SheetFooter className="absolute bottom-20 left-0 right-0 gap-y-2 mx-auto">

                    <Image className="mx-auto" src="https://res.cloudinary.com/dhijs4dq0/image/upload/v1721485191/logoITT-removebg-preview_dmstie.png" alt="ITT" width={250} height={50} />

                    <Image className="mx-auto" src="https://res.cloudinary.com/dhijs4dq0/image/upload/v1722259738/3-removebg-preview_ksq5dd.png" alt="SIT" width={170} height={50} />

                    {/* <Image className="md:hidden" src="https://res.cloudinary.com/dhijs4dq0/image/upload/v1722526840/WhatsApp_Image_2024-08-01_at_9.09.54_PM_bjftsb.jpg" alt="SIT" width={280} height={100} /> */}


                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}