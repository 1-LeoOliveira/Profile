import React from "react";
import Skillsitem from "../Skillsistem/page";
import SkillsLanguage from "../SkillLangueage/page";

const Skills = () => {
    return (
        <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]" id="Skill">
            <h1 className="heading">
                EDUCAÇÃO & <span className="text-[#FE5F2F]"> SKILL</span>
            </h1>
            <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
                <div>
                    <Skillsitem
                        title="DEV. WEB "
                        year="2014 - 2016"
                        description="Curso focado em desenvolvimento web, abordando HTML, CSS e JavaScript."
                    />
                    <Skillsitem
                        title="DEV. SYSTEM"
                        year="2021 - 2024"
                        description="Formação em Análise e Desenvolvimento de Sistemas, com ênfase em metodologias ágeis e tecnologias modernas."
                    />
                    <SkillsLanguage
                        skill1="html"
                        skill2="React"
                        skill3="javascript"
                        level1="w-[95%]"
                        level2="w-[88%]"
                        level3="w-[60%]"
                    />
                </div>
                <div>
                    <Skillsitem
                        title="Next Js Developer"
                        year="2024 - 2024"
                        description="Especialização em desenvolvimento com Next.js, incluindo SSR e SSG."
                    />
                    <Skillsitem
                        title="Node Js Developer"
                        year="2023 - 2024"
                        description="Experiência em desenvolvimento de back-end com Node.js e Express."
                    />
                    <SkillsLanguage
                        skill1="css"
                        skill2="Next Js"
                        skill3="TypeScript"
                        level1="w-[81%]"
                        level2="w-[78%]"
                        level3="w-[60%]"
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills;
