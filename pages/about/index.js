import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaAngular
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobeaftereffects
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Development",
        icons: [
          'Angular',
          'React',
          'Javascript',
          'Typescript',
          'NodeJS'
        ],
      },
      {
        title: "UI/UX Design",
        icons: ['Figma', 'Adobe XD', 'PhotoShop', 'Illustrator'],
      },
    ],
  },
];

  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Webby Awards - Honoree",
  //       stage: "2011 - 2012",
  //     },
  //     {
  //       title: "Adobe Design Achievement Awards - Finalist",
  //       stage: "2009 - 2010",
  //     },
  //   ],
  // },
  // {
  //   title: "experience",
  //   info: [
  //     {
  //       title: "UX/UI Designer - XYZ Company",
  //       stage: "2012 - 2023",
  //     },
  //     {
  //       title: "Web Developer - ABC Agency",
  //       stage: "2010 - 2012",
  //     },
  //     {
  //       title: "Intern - DEF Corporation",
  //       stage: "2008 - 2010",
  //     },
  //   ],
  // },
  // {
  //   title: "credentials",
  //   info: [
  //     {
  //       title: "Web Development - ABC University, LA, CA",
  //       stage: "2011",
  //     },
  //     {
  //       title: "Computer Science Diploma - AV Technical Institute",
  //       stage: "2009",
  //     },
  //     {
  //       title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
  //       stage: "2006",
  //     },
  //   ],
  // },
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-screen bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* Avatar Img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="hidden w-[300px] xl:flex absolute bottom-0 -left-[20px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2  variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
         className="h2"> <span className="text-accent">Weaving </span>Narratives, Building <span className="text-accent">Excellence</span>
         </motion.h2>
          <motion.p  variants={fadeIn('right', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
          Our team of seasoned designers and developers follows a client-centric approach, prioritizing your vision and objectives. We believe that a successful web presence is not just aesthetically pleasing but also highly functional and user-friendly. From conceptualization to execution, we meticulously navigate every phase of the design process, ensuring a final product that exceeds expectations.
          </motion.p>
          {/* counters */}
          <motion.div
           variants={fadeIn('right', 0.6)}
           initial='hidden'
           animate='show'
           exit='hidden'
          className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full
                  after:bg-white/10 after:absolute after:top-0 after:right-0">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp starts={0} end={6} duration={15} /> +
                    </div>
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
               </div>
               {/* Clients */}
               <div className="relative flex-1 after:w-[1px] after:h-full
                  after:bg-white/10 after:absolute after:top-0 after:right-0">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp starts={0} end={50} duration={10} /> +
                    </div>
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied clients</div>
               </div>
               {/* Projects */}
               <div className="relative flex-1 after:w-[1px] after:h-full
                  after:bg-white/10 after:absolute after:top-0 after:right-0">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp starts={0} end={120} duration={10} /> +
                    </div>
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Projects</div>
               </div>
               {/* Projects */}
               <div className="relative flex-1 ">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp starts={0} end={2} duration={10} /> +
                    </div>
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Winning awards</div>
               </div>
            </div>
          </motion.div>
        </div>
        {/* <motion.div  variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden' className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div 
                  className={`${ index === itemIndex && "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"}
                  cursor-pointer 
                  capitalize
                  xl:text-lg
                  relative 
                  after:w-8 
                  after:h-[2px]
                after:bg-white 
                  after:absolute 
                  after:-bottom-1 
                  after:left-0 
                  `}
                  key={itemIndex}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[index].info.map((item,itemIndex)=>{
                return <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>
                    <div className="flex gap-x-4">
                    {item.icons?.map((icon,itemIndex)=>{
                      return <div key={itemIndex} className="text-2xl text-white">{icon}</div>;
                    })}
                    </div>
                </div>
              })}
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default About;
