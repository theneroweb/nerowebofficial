import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCalendar,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxThickArrowRight,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from 'swiper';


// data
const frewebsiteData = [
  {
    icon: <RxPencil2 />,
    title: 'Service Details',
    description: "We're offering a unique package that includes expert design, development, and essential features to kickstart your online journey. While the service is free, the quality of our work remains uncompromised, ensuring you get a professional, eye-catching SPA..",
  },
  {
    icon: <RxDesktop />,
    title: 'Eligibility Criteria',
    description: "'Project Free Website December' is open to startups, nonprofits, and small businesses looking to make their mark online. To qualify, simply meet our straightforward eligibility criteria, and you could be on your way to a stunning online presence at no cost.",
  },
  {
    icon: <RxReader />,
    title: 'How It Works',
    description: "Connect with us on Instagram or Twitter to stay updated on the latest from Nero Web Design Agency. Once you're connected, send us a direct message and we will provide you an exclusive link to begin your free website journey. Do it now",
  },
  {
    icon: <RxReader/>,
    title: 'Fill the form',
    description: "Access the provided link to fill out a straightforward form, capturing key information about your vision, goals, and any specific features you desire for your single-page application. Don't waste any more time! ACT to have a chance of getting your own free website"
  },
  {
    icon: <RxRocket />,
    title: 'Get it Now!',
    description: 'Act now! "Free Website December" is a limited-time, free offer from Nero Web Design Agency. Dont miss this opportunity to elevate your online presence. Seize the moment and let us help you shine online. Together, lets make your online presence unforgettable',
  },
];

const FreeWebsiteSlider = () => {
  return <Swiper breakpoints={{
    320:{
      slidesPerView:1,
      spaceBetween:15
    },
    640:{
      slidesPerView:3,
      spaceBetween:15
    },

}}
freeMode={true}
pagination={{
  clickable:true
}}
modules={[FreeMode, Pagination]}
className='h-[400px] sm:h-[340px] lg:h-[400px]'
>
  {
    frewebsiteData.map((item,index)=>{
      return (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6
          py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer
          hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            {/* icons */}
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            {/* title */}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            {/* arrow */}
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
            </div>
          </div>
        </SwiperSlide>
      );
    })
  }
</Swiper>;
};

export default FreeWebsiteSlider;

