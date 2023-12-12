import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxThickArrowRight,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from 'swiper';


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Establish a distinctive and memorable brand identity. We work collaboratively to develop brand strategies, logos, and visual elements that reflect the essence of your brand and leave a lasting impression.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Transform your online presence with visually stunning and user-friendly websites. We specialize in crafting responsive and intuitive designs that captivate your audience and elevate your brand.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: ' Ensure your brand is accessible anytime, anywhere. Our mobile-responsive designs guarantee an optimal viewing experience across a range of devices, enhancing user engagement and satisfaction.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'In the digital realm, words have the power to captivate, persuade, and leave a lasting impression. At Nero, our Copywriting services go beyond mere text – we craft narratives that resonate with your audience, drive engagement, and compel action.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Amplify your online reach with strategic digital marketing integration. From SEO optimization to social media campaigns, we implement effective strategies to boost visibility, attract your target audience, and drive conversions.',
  },
];

const ServiceSlider = () => {
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
className='h-[240px] sm:h-[340px]'
>
  {
    serviceData.map((item,index)=>{
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

export default ServiceSlider;

