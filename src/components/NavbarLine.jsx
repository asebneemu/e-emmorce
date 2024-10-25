import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';
import User from './User';
import React, { useEffect, useState } from "react";

export default function NavbarLine() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  return (
    <div className="hidden md:flex justify-center items-center h-full w-full px-0">
      <div className="flex justify-between items-center w-full p-4 shadow-md px-10 bg-[#23856D] text-white">
        
        {/* İlk div: Telefon ve Mail bilgileri */}
        <div className="flex md:flex-col 1190:flex-row md:items-start md:text-left 1190:items-center space-x-4 w-1/3 gap-4">
          <div className="flex items-center space-x-2 md:ml-5">
            <FiPhone className="w-5 h-5" />
            <p className="text-base font-medium">0542 548 51 88</p>
          </div>
          <div className="flex items-center space-x-2 md:ml-5">
            <FiMail className="w-5 h-5" />
            <p className="text-base font-medium">sebnemucak.a@gmail.com</p>
          </div>
        </div>

        {/* Ortadaki div: Koşullu olarak `User` bileşeni */}
        <div className="w-1/3 text-center">
          {isLoggedIn && <User />}
        </div>

        {/* Sağdaki div: Sosyal Medya Takip İkonları */}
        <div className="flex items-center w-1/3 justify-end mr-5 md:gap-x-6">
          <p className="text-base font-medium">Follow us:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between md:gap-y-6 lg:gap-x-6">
            <div className="flex justify-center items-center">
              <button className="p-2 rounded-full">
                <FaInstagram className="w-6 h-6" />
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="p-2 rounded-full">
                <FaYoutube className="w-6 h-6" />
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="p-2 rounded-full">
                <FaFacebook className="w-6 h-6" />
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="p-2 rounded-full">
                <FaTwitter className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
