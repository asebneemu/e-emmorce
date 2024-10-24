
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";  // İkonları import et

export default function TeamCart({ image, name, status, instagram, github, linkedin }) {
    return (
        <div className="w-full flex flex-col items-center p-6 bg-white rounded-lg shadow-lg mt-20">
            {/* Takım üyesinin resmi */}
            <img src={image} alt={name} className="w-80 h-80 object-cover rounded-full mb-4" />

            {/* İsim ve statü */}
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-500 text-sm mb-4">{status}</p>

            {/* Sosyal medya ikonları */}
            <div className="flex space-x-4">
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-gray-500 hover:text-pink-500 transition duration-300" size={24} />
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-500 hover:text-black transition duration-300" size={24} />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-gray-500 hover:text-blue-600 transition duration-300" size={24} />
                </a>
            </div>
        </div>
    );
}
