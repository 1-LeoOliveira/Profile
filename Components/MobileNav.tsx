'use client'
import React from "react"
import { XMarkIcon } from "@heroicons/react/20/solid"

interface MobileNavProps {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ nav, closeNav }) => {
    const navClasses = nav 
        ? "translate-x-0 opacity-100" 
        : "translate-x-[-100%] opacity-0";

    return (
        <div className={`fixed ${navClasses} transform transition-all duration-300 top-0 left-0 w-full h-full z-[10001] bg-[#141c27]`}>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <a href="#Hero" onClick={closeNav} className="nav-link-mobile">HOME</a>
                <a href="#About" onClick={closeNav} className="nav-link-mobile">SOBRE</a>
                <a href="#Services" onClick={closeNav} className="nav-link-mobile">SEVIÇO</a>
                <a href="#Skill" onClick={closeNav} className="nav-link-mobile">SKILLS</a>
                <a href="#Project" onClick={closeNav} className="nav-link-mobile">PROJECT</a>
                <a href="#Footer" onClick={closeNav} className="nav-link-mobile">CONTATO</a>
            </div>
            <div
                onClick={closeNav}
                className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-[#FE5F2F]"
            >
                <XMarkIcon />
            </div>
        </div>
    )
}

export default MobileNav;