import resim1 from '../../assets/pictures/bestsellers/c19.jpeg';
import resim2 from '../../assets/pictures/bestsellers/c12.jpeg';
import resim3 from '../../assets/pictures/bestsellers/c14.jpeg';
import resim4 from '../../assets/pictures/bestsellers/b49.jpeg';
import resim5 from '../../assets/pictures/bestsellers/b64.jpeg';

const ByChotles = () => {
  return (
    <div className="w-full my-16">
      <div className="w-[80%] mx-auto flex 3xs:flex-col 3xs:items-center md:flex-row gap-2">
        <div className="3xs:w-[70%] md:w-[20%] aspect-square bg-cover bg-center relative" style={{ backgroundImage: `url(${resim1})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-0"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-2xl font-bold absolute top-8 transform -translate-y-1/2">CLOTHS</h2>
            <p className="text-lg absolute bottom-4 right-4">5 Items</p>
          </div>
        </div>
        <div className="3xs:w-[70%] md:w-[20%] aspect-square bg-cover bg-center relative" style={{ backgroundImage: `url(${resim2})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-bold absolute top-8 transform -translate-y-1/2">CLOTHS</h2>
            <p className="text-lg absolute bottom-4 right-4">5 Items</p>
          </div>
        </div>
        <div className="3xs:w-[70%] md:w-[20%] aspect-square bg-cover bg-center relative" style={{ backgroundImage: `url(${resim3})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-0"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-2xl font-bold absolute top-8 transform -translate-y-1/2">CLOTHS</h2>
            <p className="text-lg absolute bottom-4 right-4">5 Items</p>
          </div>
        </div>
        <div className="3xs:w-[70%] md:w-[20%] aspect-square bg-cover bg-center relative" style={{ backgroundImage: `url(${resim4})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-2xl font-bold absolute top-8 transform -translate-y-1/2">CLOTHS</h2>
            <p className="text-lg absolute bottom-4 right-4">5 Items</p>
          </div>
        </div>
        <div className="3xs:w-[70%] md:w-[20%] aspect-square bg-cover bg-center relative" style={{ backgroundImage: `url(${resim5})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-0"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-2xl font-bold absolute top-8 transform -translate-y-1/2">CLOTHS</h2>
            <p className="text-lg absolute bottom-4 right-4">5 Items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByChotles;


<div className="w-[20%] aspect-square bg-cover bg-center relative" style={{ backgroundImage: `url(${resim2})` }}>
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
    <h2 className="text-2xl font-bold">CLOTHS</h2>
    <p className="text-lg">5 Items</p>
  </div>
</div>