import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // FontAwesome ikonlarını ekliyoruz

const SputnikFooter = () => {
  return (
    <div className="w-full bg-gray-100 py-10 my-16">
      {/* İç Div */}
      <div className="w-[80%] mx-auto flex flex-col md:flex-row md:justify-between md:items-center py-4">
        {/* Başlık */}
        <h1 className="text-4xl font-bold mb-4 md:mb-0">Sputnik</h1>

        {/* İkonlar İçin Div */}
        <div className="flex gap-4 md:gap-6"> {/* İkonlar yan yana olacak, arada boşluk olacak */}
          <FaFacebook className="text-blue-600" size={30} /> {/* Facebook İkonu */}
          <FaInstagram className="text-blue-600" size={30} /> {/* Instagram İkonu */}
          <FaTwitter className="text-blue-600" size={30} /> {/* Twitter İkonu */}
        </div>
      </div>
    </div>
  );
};

export default SputnikFooter;
