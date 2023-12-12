//comps
// Links
import Link from "next/link";
import FreeWebsiteSlider from "../../components/FreeWebsiteSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer mortion

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const FreeWebsite = () => {
    return (
        <div className="h-screen bg-primary/30 py-36 flex items-center">
            <Circles />
            <div className="container mx-auto ">
                <div className="flex flex-col items-center gap-x-8">
                    {/* text */}
                    <div className="text-center items-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
                        <motion.h2
                            variants={fadeIn('up', 0.2)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="text-[24px]">
                            Free Website December <span className="text-accent">.</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn('up', 0.4)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="text-[12px] text-center mb-4 max-w-[800px] mx-auto lg:mx-0">
                            Welcome to our groundbreaking initiative, &apos;Free Website December,&apos; where we are dedicated to helping individuals and businesses establish a strong online presence. It is open to startups, nonprofits, and small businesses looking to make their mark online. To qualify, simply meet our straightforward eligibility criteria, and you could be on your way to a stunning online presence at no cost.
                        </motion.p>
                    </div>
                    {/* slider */}
                    <motion.div
                        variants={fadeIn('down', 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="w-full xl:max-w[65%]">
                        <FreeWebsiteSlider />
                    </motion.div>
                    <motion.p
                        variants={fadeIn('up', 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="text-[20px] text-center mb-4 max-w-[800px] mx-auto lg:mx-0 mt-10">
                        <Link href={'https://www.instagram.com/theneroweb'} target="_blank" className="hover:text-accent transition-all duration-300">
                        <span className="text-accent"> @Instagram </span>
                        </Link>
                        <Link href={'https://www.twitter.com/theneroweb'}  target="_blank" className="hover:text-accent transition-all duration-300">
                            <span className="text-accent">  @Twitter </span>
                        </Link>
                    </motion.p>
                    <motion.p
                        variants={fadeIn('up', 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="text-[8px] text-center mb-4 max-w-[800px] mx-auto lg:mx-0 mt-10">
                        **Hosting & domain name is the only charge arround ~ $80-$100
                    </motion.p>
                </div>
            </div>
            <Bulb />
        </div>
    );
};

export default FreeWebsite;
