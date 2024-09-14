'use client';

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react"
import { navlinks } from "../Constants/Nav-links";
const Navmobile = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toogleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>

            <div className="flex md:hidden cursor-pointer md:cursor-none" onClick={toogleMenu}>
                {!isOpen ? (<Menu />) : (<X />)}

            </div>
            <figure className={`absolute rounded-md right-2 origin-top  top-20 ${isOpen ? "scale-y-100 opacity-100 visible" : "scale-y-50 opacity-0 hidden"} w-auto bg-slate-800 p-2 transition-all z-50`}>
                <nav className="w-full h-full flex flex-col space-y-2 font-normal capitalize tracking-wide">
                    {navlinks.map((links, index) => (
                        <Link key={index} href={`#${links}`} className="py-1 px-2 transition-all rounded-md hover:bg-slate-700 hover:text-sky-700" onClick={toogleMenu}>{links}</Link>
                    ))}

                </nav>
            </figure>
        </>
    )
}
export default Navmobile;