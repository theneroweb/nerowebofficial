// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Founder of CaringSoft",
    message:
      "Working with Nero was a game-changer for our brand. Their attention to detail and innovative approach transformed our website into a powerful tool for engaging our audience. The results exceeded our expectations!",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "CEO of CandlesWithLove",
    message:
      "Nero not only understood our vision but elevated it to new heights. Their seamless collaboration, creative insight, and technical expertise made the entire process enjoyable. The end result? A website that truly represents our brand essence.",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Founder of GreekKosmetiks",
    message:
      "Choosing Nero for our e-commerce development was the best decision we made. Their team's dedication to delivering a user-friendly and visually stunning platform was evident at every step. Our online sales skyrocketed, thanks to their strategic approach and exceptional design.",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination,Navigation } from "swiper";
// next image
import Image from "next/image";
// icons
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialSlider = () => {
  return (
    <Swiper
    navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[280px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* Avatar, name , position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center
              items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* Avatar */}
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                </div>
              </div>
              {/* Quote & message */}
              <div
                className="flex-1 flex flex-col justify-center
              before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0
              xl:before:h-[200px] relative xl:pl-20"
              >
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft
                    className="text-4x xl:text-6xl text-white/20 max-auto
                  md:mx-0"
                  />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
