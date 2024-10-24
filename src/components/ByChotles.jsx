import React from 'react';
import b1 from '../assets/pictures/bestsellers/b86.jpeg';
import b2 from '../assets/pictures/bestsellers/b77.jpeg';
import b3 from '../assets/pictures/bestsellers/b90.jpeg';
import b4 from '../assets/pictures/bestsellers/b46.jpeg';
import b5 from '../assets/pictures/bestsellers/b62.jpeg';

const ByChotles = () => {
  return (
    <div className="w-full my-16">
      <div className="w-[80%] mx-auto flex gap-2">
        <div className="w-[20%] aspect-square bg-cover bg-center relative" style={{ backgroundImage: `url(${b1})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-bold">CLOTHS</h2>
            <p className="text-lg">5 Items</p>
          </div>
        </div>
        <div className="w-[20%] aspect-square bg-cover bg-center relative" style={{ backgroundImage: `url(${b2})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-bold">CLOTHS</h2>
            <p className="text-lg">5 Items</p>
          </div>
        </div>
        <div className="w-[20%] aspect-square bg-cover bg-center relative" style={{ backgroundImage: `url(${b3})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-bold">CLOTHS</h2>
            <p className="text-lg">5 Items</p>
          </div>
        </div>
        <div className="w-[20%] aspect-square bg-cover bg-center relative" style={{ backgroundImage: `url(${b4})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-bold">CLOTHS</h2>
            <p className="text-lg">5 Items</p>
          </div>
        </div>
        <div className="w-[20%] aspect-square bg-cover bg-center relative" style={{ backgroundImage: `url(${b5})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-bold">CLOTHS</h2>
            <p className="text-lg">5 Items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByChotles;
