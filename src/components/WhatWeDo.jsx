import resimBir from "../assets/pictures/whatwedo/wwd1.jfif";
import resimIki from "../assets/pictures/whatwedo/wwd2.jfif";

const WhatWeDo = () => {
  return (
    <div className="w-full py-10 md:w-[90%] md:mx-auto">
      {/* İlk Div - Hem Mobil Hem MD ve Üstü İçin */}
      <div className="flex flex-col gap-8 px-[10%] md:flex-row md:justify-between md:items-center md:px-[10%] md:gap-20">
        {/* İçerik (MD'de sağa hizalanacak) */}
        <div className="md:w-[50%] flex flex-col gap-8 md:order-2">
          <h4 className="text-base font-medium text-blue-600">Featured Products</h4>
          <h1 className="text-7xl font-bold">We love what we do</h1>
          <p className="text-base">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <p className="text-base">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Resimlerin Bulunduğu Div (MD'de sola hizalanacak) */}
        <div className="w-[92%] md:w-[50%] flex gap-4 mt-6 justify-center mx-auto md:mt-0 md:justify-start md:order-1">
          {/* İlk Resim */}
          <div className="w-[40%] h-[400px] overflow-hidden">
            <img src={resimBir} alt="Resim 1" className="w-full h-full object-cover" />
          </div>
          {/* İkinci Resim */}
          <div className="w-[60%] h-[400px] overflow-hidden">
            <img src={resimIki} alt="Resim 2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
