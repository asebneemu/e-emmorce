import React from 'react';
import Card from './Card'; // Card componentini içe aktar

const Cards = () => {
  return (
    <div className="mt-10 w-full md:w-[85%] md:h-[75vh] flex flex-col gap-10 md:gap-0 items-center justify-center md:flex-row md:mx-auto mb-10"> {/* Yüksekliği %80 olarak ayarlandı */}
      {/* İlk Card */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start md:h-full">
        <Card 
          imageSrc="pictures/ucbir.png" 
          title="Top Product Of the Week" 
        />
      </div>

      {/* İki Card'ı saran div */}
      <div className="flex flex-col w-full 4xs:items-center md:w-1/2 h-full space-y-10 md:space-y-4">
        <Card
          imageSrc="pictures/uciki.png" 
          title="Another Top Product" 
        />
        <Card 
          imageSrc="pictures/ucuc.png" 
          title="Yet Another Product" 
        />
      </div>
    </div>
  );
};

export default Cards;
