import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/20/solid";
import React from "react";

const Footer = () => {
    return (
        <div className="pt-[8rem] pb-[4rem] bg-[#02050a]" id="Footer">
            <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3
            w-[80%] mx-auto gap-[3rem] ">

                <div className="flex items-center space-x-6">
                    <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center 
                    rounded-full bg-[#55e6a5] ">
                        <MapIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
                    </div>
                    <div>
                        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">ENDEREÇO</h1>
                        <p className="text-[17px] w-[90%] text-white opacity-60">BELÉM/PA</p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center space-x-6">
                        <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center 
                    rounded-full bg-[#55e6a5] ">
                            <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
                        </div>
                        <div>
                            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">TELEFONE</h1>
                            <p className="text-[17px] w-[90%] text-white opacity-60">91982690087</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center space-x-6">
                        <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center 
                    rounded-full bg-[#55e6a5] ">
                            <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
                        </div>
                        <div>
                            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">E-MAIL</h1>
                            <p className="text-[17px] w-[90%] text-white opacity-60">leoo2771@gmail.com <br /> leo.lima_101@hotmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
                <div className="text-[18px] mb:-[2rem] md:mb-0 text-white opacity-20">
                    Leonardo Oliveira 2024 | Belém - Pará
                </div>
            </div>
        </div>
    )
}

export default Footer
