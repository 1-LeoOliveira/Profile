'use client'
import dynamic from 'next/dynamic';
import React from "react";

const XMarkIcon = dynamic(
  () => import('@heroicons/react/20/solid').then((mod) => mod.XMarkIcon),
  { ssr: false }
);

interface MobileNavProps {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: MobileNavProps) => {
    return (
        <div 
            className={`
                lg:hidden fixed top-0 left-0 w-full h-full 
                ${nav ? 'translate-x-0' : 'translate-x-[-100%]'} 
                transform transition-all duration-300 
                z-[10001] bg-[#141c27]
            `}
        >
            <div className="w-full h-full flex flex-col items-center justify-center">
                <a href="#Hero" onClick={closeNav} className="text-white text-[24px] my-4 hover:text-[#FE5F2F] transition-all duration-200">HOME</a>
                <a href="#About" onClick={closeNav} className="text-white text-[24px] my-4 hover:text-[#FE5F2F] transition-all duration-200">SOBRE</a>
                <a href="#Services" onClick={closeNav} className="text-white text-[24px] my-4 hover:text-[#FE5F2F] transition-all duration-200">SERVIÇO</a>
                <a href="#Skill" onClick={closeNav} className="text-white text-[24px] my-4 hover:text-[#FE5F2F] transition-all duration-200">SKILLS</a>
                <a href="#Project" onClick={closeNav} className="text-white text-[24px] my-4 hover:text-[#FE5F2F] transition-all duration-200">PROJECT</a>
                <a href="#Footer" onClick={closeNav} className="text-white text-[24px] my-4 hover:text-[#FE5F2F] transition-all duration-200">CONTATO</a>
            </div>
            
            <div 
                onClick={closeNav}
                className="absolute top-[2rem] right-[2rem] cursor-pointer"
            >
                <XMarkIcon className="w-[2rem] h-[2rem] text-[#FE5F2F]" />
            </div>
        </div>
    );
};

export default dynamic(() => Promise.resolve(MobileNav), {
    ssr: false
});