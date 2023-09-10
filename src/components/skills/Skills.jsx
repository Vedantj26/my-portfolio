import React from "react";
import SkillBox from "../../chip/SkillBox";
import java from "../../assets/java.png";
import react from "../../assets/react.png";
import nextjs from "../../assets/nextjs.png";
import javascript from "../../assets/javascript.png";
import redux from "../../assets/redux.png";
import tailwind from "../../assets/tailwind.png";
import html from "../../assets/html.png";
import bootstrap from "../../assets/bootstrap.png";
import spring from "../../assets/spring.png";
import nodejs from "../../assets/nodejs.png";
import CPlus from "../../assets/C++.png";
import mongodb from "../../assets/mongodb.png";
import sql from "../../assets/sql.png";
import typescript from "../../assets/typescript.png";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-row ">
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-row gap-10">
              <SkillBox
                logo={react}
                black={"white"}
                white={"white"}
                skill={"ReactJS"}
              />
              <SkillBox
                logo={nextjs}
                black={"white"}
                white={"white"}
                skill={"NextJs"}
              />
              <SkillBox
                logo={javascript}
                black={"white"}
                white={"white"}
                skill={"Javascript"}
              />
              <SkillBox
                logo={redux}
                black={"white"}
                white={"white"}
                skill={"Redux ToolKit"}
              />
              <SkillBox
                logo={tailwind}
                black={"white"}
                white={"white"}
                skill={"Tailwind CSS"}
              />
              <SkillBox
                logo={html}
                black={"white"}
                white={"white"}
                skill={"HTML"}
              />
              <SkillBox
                logo={bootstrap}
                black={"white"}
                white={"white"}
                skill={"Bootstrap"}
              />
            </div>
            <div className="last2 flex flex-row gap-10">
              <SkillBox
                logo={typescript}
                black={"white"}
                white={"white"}
                skill={"TypeScript"}
              />
              <SkillBox
                logo={java}
                black={"white"}
                white={"white"}
                skill={"Java"}
              />
              <SkillBox
                logo={spring}
                black={"white"}
                white={"white"}
                skill={"SpringBoot"}
              />
              <SkillBox
                className=""
                logo={nodejs}
                black={"white"}
                white={"white"}
                skill={"NodeJS"}
              />
              <SkillBox
                className=""
                logo={CPlus}
                black={"white"}
                white={"white"}
                skill={"C++"}
              />
              <SkillBox
                logo={mongodb
                }
                black={"white"}
                white={"white"}
                skill={"MongoDB"}
              />
              <SkillBox
                logo={sql
                }
                black={"white"}
                white={"white"}
                skill={"SQL"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
