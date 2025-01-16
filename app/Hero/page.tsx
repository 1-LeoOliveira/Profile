'use client'
import React, { useState } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/20/solid";
import TextEffect from "../TextEffect/page";

const Hero = () => {
    const [nav, setNav] = useState(false);
    const Particle = dynamic(() => import('../components/Particle/ParticleComponent'), {
        ssr: false
    });

    const closeNav = () => setNav(false);
    const openNav = () => setNav(true);

    const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
        <a 
            href={href} 
            onClick={closeNav} 
            className="text-white hover:text-[#FE5F2F] transition-all duration-200"
        >
            {children}
        </a>
    );

    return (
        <>
            {/* Navigation Bar */}
            <div className="w-full fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
                <div className="flex items-center justify-between w-[80%] mx-auto h-full">
                    <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
                        <a href="#Hero">
                            WEB<span className="text-[#FE5F2F]">DEV</span>
                        </a>
                    </h1>
                    
                    <div className="hidden lg:flex items-center gap-8">
                        <NavLink href="#Hero">HOME</NavLink>
                        <NavLink href="#About">SOBRE</NavLink>
                        <NavLink href="#Services">SERVIÇO</NavLink>
                        <NavLink href="#Skill">SKILLS</NavLink>
                        <NavLink href="#Project">PROJECT</NavLink>
                        <NavLink href="#Footer">CONTATO</NavLink>
                    </div>

                    <div className="lg:hidden">
                        <Bars3Icon 
                            onClick={openNav}
                            className="w-[2rem] h-[2rem] cursor-pointer text-[#FE5F2F]" 
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div 
                className={`
                    lg:hidden fixed top-0 left-0 w-full h-full 
                    ${nav ? 'translate-x-0' : 'translate-x-[-100%]'} 
                    transform transition-all duration-300 
                    z-[10001] bg-[#141c27]
                `}
            >
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <NavLink href="#Hero">HOME</NavLink>
                    <NavLink href="#About">SOBRE</NavLink>
                    <NavLink href="#Services">SERVIÇO</NavLink>
                    <NavLink href="#Skill">SKILLS</NavLink>
                    <NavLink href="#Project">PROJECT</NavLink>
                    <NavLink href="#Footer">CONTATO</NavLink>
                </div>
                
                <div 
                    onClick={closeNav}
                    className="absolute top-[2rem] right-[2rem] cursor-pointer"
                >
                    <XMarkIcon className="w-[2rem] h-[2rem] text-[#FE5F2F]" />
                </div>
            </div>

            {/* Hero Content */}
            <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center" id="Hero">
                <Particle />
                <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
                    <div>
                        <h1 className="text-[35px] md:text-[50px] text-white font-bold]">
                            LEONARDO <span className="text-[#FE5F2F]">OLIVEIRA! </span>
                        </h1>
                        <TextEffect />
                        <p className="mt-[2rem] text-[18px] text-[#ffffff92]">
                            Olá! Sou Leonardo, um desenvolvedor web apaixonado por criar soluções inovadoras e funcionais.
                            Tenho uma sólida experiência em desenvolvimento front-end e back-end,<br /> transformando ideias em projetos concretos e eficientes.
                        </p>
                        <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                            <button className="px-[2rem] hover:bg-[#FE5F2F] transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                                <p>Download CV</p>
                                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
                            </button>
                        </div>
                    </div>
                    <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
                        <Image src="/images/u1.jpeg" alt="user" layout="fill" className="object-cover rounded-full" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;