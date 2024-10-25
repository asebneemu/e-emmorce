import resim1 from "../assets/featured/bir.jfif";
import resim2 from "../assets/featured/iki.jfif";

const FeaturedProducts2 = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center my-40">
      <div className="w-10/12 lg:w-8/12 flex space-x-6">
        {/* İlk div - İçinde h1, p ve img */}
        <div className="flex flex-col justify-between w-1/2">
          <div>
            <h1 className="text-6xl font-bold mb-4">Featured Product</h1>
            <p className="text-lg mb-4">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</p>
          </div>
          <img
            src={resim1}
            alt="Product"
            className="w-[450px] h-[500px] object-cover"
          />
        </div>

        {/* İkinci div - Sadece img */}
        <div className="w-1/2">
          <img
            src={resim2}
            alt="Product"
            className="w-[450px] h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts2;
