import React from 'react';
import { AiFillLinkedin} from "react-icons/ai"

const Header = () => {
  return (
    <div className='md:px-24 px-12 pt-12 md:pt-24 pb-12 lg:px-48'>
    <div className='w-full h-20 flex justify-between items-center'>
      <h1 className='text-3xl antialiased font-extrabold '>oryza</h1>

      <ul className='flex items-center'>
        <li className=''>
      <AiFillLinkedin size={24} />
      </li>
      </ul>
    </div>
    </div>
  );
};

export default Header;
