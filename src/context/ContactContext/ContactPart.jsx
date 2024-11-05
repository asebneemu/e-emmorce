import resim from "../../assets/contact-logo.jfif";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Font Awesome ikonları

const ContactPart = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center px-10"
      style={{ backgroundImage: `url(${resim})` }} // Arkaplan resmi buraya doğru şekilde ekleniyor
    >
      <div className="flex flex-col items-center justify-center space-y-20">
        {/* h1 olan div */}
        <div className="text-center">
          <h1 className="3xs:text-3xl md:text-6xl font-bold text-black">Get answers to all your questions.</h1>
        </div>

        {/* p olan div */}
        <div className="text-center">
          <p className="text-lg text-black">Problems trying to resolve the conflict between the two major realms of Classical physics:</p>
        </div>

        {/* button olan div */}
        <div className="text-center">
          <button className="bg-transparent text-black px-6 py-2 rounded text-4xl border border-black">
            Contact Us
          </button>
        </div>

        {/* İkonlar olan div */}
        <div className="flex space-x-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black text-4xl">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black text-4xl">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black text-4xl">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black text-4xl">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPart;
