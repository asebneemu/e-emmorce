import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa'; // İkonlar için react-icons kullanıyoruz
import { FiPhone, FiMail } from 'react-icons/fi'; // Telefon ve mail ikonları için

export default function NavbarLine() {
  return (
    <div className="hidden md:flex justify-center items-center h-full w-full px-0">
      {/* Sayfanın ortasında duran dış div */}
      <div className="flex justify-between items-center w-full p-4 shadow-md px-10 bg-[#252B42] text-white">

        {/* İlk div: iki alt div, her birinde bir ikon ve p olacak */}
        <div className="flex md:flex-col 1190:flex-row md:items-start md:text-left 1190:items-center space-x-4 w-1/3 gap-4">
          <div className="flex items-center space-x-2 md:ml-5">
            <FiPhone className="w-5 h-5" /> {/* Telefon ikonu */}
            <p className="text-base font-medium">0542 548 51 88</p> {/* Telefon numarası */}
          </div>
          <div className="flex items-center space-x-2">
            <FiMail className="w-5 h-5" /> {/* Mail ikonu */}
            <p className="text-base font-medium">sebnemucak.a@gmail.com</p> {/* Mail adresi */}
          </div>
        </div>

        {/* İkinci div: sadece bir p */}
        <div className="w-1/3 text-center">
          <p className="text-lg font-medium">Follow Us and get a chance to win 80% off</p> {/* Yazı boyutunu text-lg yaptık */}
        </div>

        {/* Üçüncü div: bir p ve içinde butonlar olan bir div */}
        <div className="flex items-center w-1/3 justify-end mr-5 md:gap-x-6">
          <p className="text-base font-medium">Follow us:</p>

          {/* Butonlar */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between md:gap-y-6 lg:gap-x-6"> {/* md'de column, lg'de row */}
            <div className="flex justify-center items-center">
              <button className="p-2 rounded-full">
                <FaInstagram className="w-6 h-6" /> {/* Instagram ikonu */}
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="p-2 rounded-full">
                <FaYoutube className="w-6 h-6" /> {/* YouTube ikonu */}
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="p-2 rounded-full">
                <FaFacebook className="w-6 h-6" /> {/* Facebook ikonu */}
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="p-2 rounded-full">
                <FaTwitter className="w-6 h-6" /> {/* Twitter ikonu */}
              </button>
            </div>
          </div>

        </div>



      </div>
    </div>
  );
}
