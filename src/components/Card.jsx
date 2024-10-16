import React from 'react';

const Card = ({ imageSrc, title }) => {
  return (
    <div className="w-11/12 relative overflow-hidden">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 w-full h-1/2 bg-blue-500 bg-opacity-60 p-10 flex flex-col items-start justify-center gap-5 md:w-[65%]">
        <h2 className="text-white text-4xl">{title}</h2>
        <button className="mt-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded hover:bg-white hover:text-blue-500 transition duration-300">
          EXPLORE ITEMS
        </button>
      </div>
    </div>
  );
};

export default Card;
