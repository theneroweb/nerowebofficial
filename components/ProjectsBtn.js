import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href={'/freewebsite'}  className='relative w-[185px] flex justify-center items-center 
      bg-circleStar bg-center bg-cover bg-no-repeat group '>
        <Image
         src={'/rounded-text1.png'}
         width={141}
         height={148}
         alt=''
         className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'
        ></Image>
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 
        transition-all duration-300'></HiArrowRight>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
