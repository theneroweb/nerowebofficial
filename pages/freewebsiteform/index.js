import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { fadeIn } from '../../variants';
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const FreeWebsiteForm = () => {

    const form = useRef();
    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_tniv6qf', 'template_kggzkzp', form.current, 'EwhQKXcZijkz06XEy')
            .then((result) => {
            }, (error) => {
            });
        event.target.reset();
    }

    return <div className="bg-primary/30 ">
        <div className="container mx-auto py-32 text-center xl:text-left flex
    items-center justify-center overflow-auto">
            <div className="flex flex-col max-w-[1200px]">
            <motion.h2
        variants={fadeIn('up',0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="h2 text-center mb-12">
          Let&apos;s <span className="text-accent">connect...</span> Website Request Form
        </motion.h2>
                <h1></h1>
                <p>Please fill out the form below, and we&apos;ll get started on creating your online masterpiece!</p>
                <form ref={form} onSubmit={sendEmail} className='flex-1 flex flex-col gap-6 w-full mx-auto' >
                    <div className='flex gap-x-12'>
                        <input className='input' placeholder='name' type="text" id="name" name="name" required />

                        <input className='input' placeholder='email' type="email" id="email" name="email" required />

                        <input className='input' placeholder='phone' type="tel" id="phone" name="phone" />

                        <input className='input' placeholder='Business name' type="text" id="businessName" name="businessName" />

                        <input className='input' placeholder='Industry' type="text" id="industry" name="industry" />

                    </div>

                    <div className='flex gap-x-6'>
                        <textarea className='textarea' placeholder='Purpose of the website' id="websitePurpose" name="websitePurpose" rows="4" required></textarea>
                        <textarea className='textarea' placeholder='Desired Features (e.g., contact form, gallery):' id="features" name="features" rows="4"></textarea>
                    </div>

                    <div className='flex gap-x-6'>
                        <textarea className='textarea' placeholder='Additional Information or Comments:' id="additionalInfo" name="additionalInfo" rows="4"></textarea>
                        <textarea className='textarea' placeholder='Similar Websites you like etc, theneroweb.com, google.com' id="similarwebsites" name="additionalInfo" rows="4"></textarea>

                    </div>
                    <input className='input' placeholder='Instagram Account Name' type="instagram" id="name" name="name" required />

                    <div className='flex gap-x-6'>
                    </div>



                    <button type='submit' className=' btn rounded-full border border-white/50 max-w-[300px]
          px-8 transition-all duration-300 flex items-center justify-center
          overflow-hidden hover:border-accent group'>
                        <span className='text-accent group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let&apos;s Tech your website!</span>
                        <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex
            group-hover:-translate-y-0 group-hover:opacity100 transition-all duration-300
            absolute text-[22px]' />
                    </button>
                </form>

            </div>
        </div>
    </div>;
};

export default FreeWebsiteForm;
