import { CodeBracketIcon, CommandLineIcon, RocketLaunchIcon } from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
    return (
        <div className="bg-[#121121] pt-[4rem] md:pt-[8rem] pb-[5rem]" id="Services">
            <p className="heading">
                MEU <span className="text-[#FE5F2F]">SERVIÇO</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
                <div data-aos="fade-right" data-aos-delay="500">
                    <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 
                    uppercase font-semibold text-center p-[2rem]">
                        <CodeBracketIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                            Frontend
                        </h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                            Crio interfaces de usuário atraentes e funcionais, garantindo uma navegação intuitiva e responsiva.
                            Utilizo HTML, CSS, JavaScript, React e Tailwind CSS para desenvolver páginas web dinâmicas e interativas.
                
                        </p>
                    </div>
                </div>
                <div data-aos="zoom in" data-aos-delay="700">
                    <div className="bg-orange-600 hover:scale-110 transform transition-all duration-300 hover:- 
                    uppercase font-semibold text-center p-[2rem]">
                        <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                            Backend
                        </h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                        Desenvolvo sistemas robustos e eficientes, focando na funcionalidade e segurança dos sites.
                        Experiente em Node.js, TypeScript e bancos de dados, crio APIs e arquiteturas que permitem uma operação fluida e escalável.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="900">
                    <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 
                    uppercase font-semibold text-center p-[2rem]">
                        <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                            Fullstack
                        </h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                        Ofereço soluções completas em desenvolvimento web, integrando front-end e back-end.
                        Com HTML, CSS, JavaScript, React, Node.js e TypeScript, crio sistemas completos, visualmente atraentes e tecnicamente sólidos.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Services