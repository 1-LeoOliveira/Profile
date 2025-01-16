'use client'
import dynamic from 'next/dynamic';
import React from "react";

// Import dinâmico do ícone
const Bars3Icon = dynamic(
  () => import('@heroicons/react/16/solid').then((mod) => mod.Bars3Icon),
  { ssr: false }
);

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-full fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-full">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          <a href="#Hero">
            WEB<span className="text-[#FE5F2F]">DEV</span>
          </a>
        </h1>
        
        <div className="hidden lg:flex items-center gap-8">
          <a href="#Hero" className="text-white hover:text-[#FE5F2F] transition-all duration-200">HOME</a>
          <a href="#About" className="text-white hover:text-[#FE5F2F] transition-all duration-200">SOBRE</a>
          <a href="#Services" className="text-white hover:text-[#FE5F2F] transition-all duration-200">SERVIÇO</a>
          <a href="#Skill" className="text-white hover:text-[#FE5F2F] transition-all duration-200">SKILLS</a>
          <a href="#Project" className="text-white hover:text-[#FE5F2F] transition-all duration-200">PROJECT</a>
          <a href="#Footer" className="text-white hover:text-[#FE5F2F] transition-all duration-200">CONTATO</a>
        </div>

        <div className="lg:hidden">
          <Bars3Icon 
            onClick={openNav}
            className="w-[2rem] h-[2rem] cursor-pointer text-[#FE5F2F]" 
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;