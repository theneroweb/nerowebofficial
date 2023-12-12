


//comps
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer mortion

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import WorkSlider from '../../components/WorkSlider';

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col items-center  gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] 
          flex-col lg:text-left mb-4 xl:mb-0 items-center">
            <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:mt-12">
              nero work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden" 
            className="text-center mb-4 max-w-0-[800px] mx-auto lg:mx-0">
             Behind each project, there&apos;s a story of collaboration, innovation, and success. Our Work page not only showcases the visual appeal of our designs but also narrates the journey from concept to completion. Dive into our client success stories to understand how Nero brings visions to life.
            </motion.p>
          </div>
            {/* slider */}
          <motion.div 
          variants={fadeIn('down', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden" 
          className="w-full xl:max-w[65%]">
            <WorkSlider />
          </motion.div>
          
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
