import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]' id='About'>About
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
                <div>
                    <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]'>Sobre Mim
                    </h1>
                    <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
                        Transformando <span className='text-[#FE5F2F]'>Visões</span>
                    </h2>
                    <div className='mb-[3rem] flex items-center md:space-x-10 '>
                        <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
                        <p className='text-[19px] text-slate-300 w-[80%]'>
                            Sou Leonardo, um desenvolvedor web apaixonado por criar experiências digitais incríveis.
                            Com mais de 8 anos de experiência em suporte técnico e desenvolvimento, minha jornada na tecnologia começou em 2016 e continua evoluindo.
                            Atualmente, estou focado em desenvolver soluções inovadoras usando HTML, CSS, JavaScript, React e TypeScript.
                        </p>
                    </div>
                    {/* <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                        <p>Dowloand Cv</p>
                        <ArrowDownTrayIcon className="[w-1.6rem] h-[1.7rem] text-black " />
                    </button> */}
                </div>
                <div
                    data-aos="fade-left"
                    className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
                    <Image src="/images/about.jpeg"
                        alt='user'
                        layout='fill'
                        objectFit='contain'
                        className='realtvie z-[11] w-[100%] h-[100%] object-contain'
                    />
                    <div className='absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem] ' />
                </div>
            </div>
        </div>
    )
}
export default About
