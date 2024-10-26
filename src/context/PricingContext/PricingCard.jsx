// PricingCard.jsx
import React from 'react';

const PricingCard = ({ title, price, frequency, features, isNew }) => {
  return (
    <div className="relative flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg text-center shadow-md">
      {isNew && (
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
          New
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 mb-2">Organize across all apps by hand</p>
      <p className="text-3xl text-blue-600 font-semibold">{price}</p>
      <p className="text-gray-500 mb-4">{frequency}</p>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold mb-6">
        Try for free
      </button>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center ${
              feature.included ? 'text-green-600' : 'text-gray-400'
            }`}
          >
            <span className="mr-2">
              {feature.included ? '✔️' : '✖️'}
            </span>
            {feature.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
