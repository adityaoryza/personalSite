import React from 'react';

const Banner = () => {
 return (
    <div className="md:px-24 px-12 pt-12 md:pt-24 pb-12 lg:px-48">
    <p className="text-[#1A1A1A] text-3xl md:text-5xl lg:text-6xl font-semibold leading-relaxed">Aditya Oryza Mahendra</p>
    <p className="mt-12 text-[#1A1A1A] text-lg md:text-xl lg:text-2xl font-medium leading-relaxed"> Undergrad with a passion for Backend Development, currently using MERN Stack.</p>

    {/* <div className="flex align-center mt-4 mb-8">
      {actions.map((item) => (
        <div key={item.id} className="w-12 hover:text-gray-600">
          <a href={item.link}>
            {item.icon}
          </a>
        </div>
      ))}

    </div> */}
  </div>
 );
};

export default Banner;