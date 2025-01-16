import React from "react";
import Particle from "../Particle/page";
import TextEffect from "../TextEffect/page";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
    return <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center" id="Hero">
        <Particle />
        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
            <div>
                <h1 className="text-[35px] md:text-[50px] text-white font-bold]">
                    LEONARDO <span className="text-[#FE5F2F]">OLIVEIRA! </span>
                </h1>
                <TextEffect />
                <p className="mt-[2rem text-[18px] text-[#ffffff92]">
                    Olá! Sou Leonardo, um desenvolvedor web apaixonado por criar soluções inovadoras e funcionais.
                    Tenho uma sólida experiência em desenvolvimento front-end e back-end,<br /> transformando ideias em projetos concretos e eficientes.
                </p>
                <div className="mt-[2rem] flex-col spayce-y-6 sm:spayce-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                    <button className="px-[2rem] hover:bg-[#FE5F2F] transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                        <p>Dowloand Cv</p>
                        <ArrowDownTrayIcon className="[w-1.6rem] h-[1.7rem] text-black " />
                    </button>
                </div>
            </div>
            <div  className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px] ">
                <Image src="/images/u1.jpeg" alt="user" layout="fill" className="object-cover rounded-full" />
            </div>
        </div>
    </div>

}
export default Hero