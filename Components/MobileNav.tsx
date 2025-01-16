import React from "react"
import { XMarkIcon } from "@heroicons/react/20/solid"

interface MobileNavProps {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ nav, closeNav }) => {
    return (
        <div className={`fixed ${nav ? "translate-x-0" : "translate-x-[-100%]"} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}>
            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                <a href="#Hero" className="nav-link-mobile">HOME</a>
                <a href="#About" className="nav-link-mobile">SOBRE</a>
                <a href="#Services" className="nav-link-mobile">SEVIÇO</a>
                <a href="#Skill" className="nav-link-mobile">SKILL</a>
                <a href="#Project" className="nav-link-mobile">PROJECT</a>
                <a href="#Footer" className="nav-link-mobile">CONTATO</a>
            </div>
            <div
                onClick={closeNav}
                className="absolute z-[10000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-[#FE5F2F]"
            >
                <XMarkIcon />
            </div>
        </div>
    )
}

export default MobileNav;