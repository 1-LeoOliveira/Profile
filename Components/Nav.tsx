import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (<div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
    <div className="flex items-center justify-between w-[80%] mx-auto h-[100%] ">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
         <a href="#Hero"> 
          WEB
          <span className="text-[#FE5F2F]">
            DEV
          </span>
         </a>  
        </h1>
      <a href="#Hero" className="nav-link">HOME</a>
      <a href="#About" className="nav-link">SOBRE</a>
      <a href="#Services" className="nav-link">SERVIÇO</a>
      <a href="#Skill" className="nav-link">SKILLS</a>
      <a href="#Project" className="nav-link">PROJECT</a>
      <a href="#Footer" className="nav-link">CONTATO</a>
      <div onClick={openNav}>
        <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#FE5F2F]" />
      </div>
    </div>

  </div >
  )
};
export default Nav
