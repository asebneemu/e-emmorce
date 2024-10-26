// PricingPlans.jsx

import { useState } from 'react';
import PricingCard from './PricingCard';
import { pricingData } from '../../data';

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex flex-col items-center gap-10 my-20">
      {/* Başlık ve Açıklama */}
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Pricing</h2>
      <p className="text-sm md:text-base text-gray-600 mb-4 text-center">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>
      
      {/* Toggle: Monthly / Yearly */}
      <div className="flex items-center mb-6">
        <span className={`text-sm md:text-lg font-medium ${!isYearly ? 'text-blue-600' : 'text-gray-500'}`}>Monthly</span>
        <button
          className="mx-2 bg-gray-200 rounded-full w-12 h-6 flex items-center p-1 transition duration-300 focus:outline-none"
          onClick={() => setIsYearly(!isYearly)}
        >
          <div
            className={`bg-blue-600 w-4 h-4 rounded-full shadow-md transform ${
              isYearly ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
        <span className={`text-sm md:text-lg font-medium ${isYearly ? 'text-blue-600' : 'text-gray-500'}`}>Yearly</span>
        {isYearly && <span className="ml-4 text-sm md:text-base text-blue-600 font-semibold">Save 25%</span>}
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {pricingData.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
