import React from 'react';
import { AiFillLinkedin} from "react-icons/ai"

const Header = () => {
  return (

    <div className='w-full h-20 flex justify-between items-center px-8 '>
      <h1 className='text-3xl antialiased font-extrabold'>oryza</h1>

      <ul className='flex items-center'>
        <li className='p-4'>
      <AiFillLinkedin size={24} />
      </li>
      </ul>
    </div>
 
  );
};

export default Header;
