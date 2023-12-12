// next image
import Image from "next/image";

const Bulb = () => {
  return <div className="absolute -left-50 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[360px]">
    <Image src={'/avatars1.png'}
     width={260} height={200} className='w-full h-full' alt=''/>
  </div>;
};

export default Bulb;
