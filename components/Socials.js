// Links
import Link from "next/link";

import {RiYoutubeLine, RiInstagramLine,
        RiFacebookLine, RiDribbbleLine, RiTwitterLine,
        RiBehanceLine, RiPinterestLine} from 'react-icons/ri';

const Socials = () => {
  return <div className="flex item-center gap-x-5 text-lg">
    <Link href={'https://www.instagram.com/theneroweb'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiInstagramLine/>
    </Link>
    <Link href={'https://www.twitter.com/theneroweb'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiTwitterLine/>
    </Link>
    {/* <Link href={''} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiTwitterLine/>
    </Link>
    <Link href={''} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiBehanceLine/>
    </Link> */}
  </div>;
};

export default Socials;
