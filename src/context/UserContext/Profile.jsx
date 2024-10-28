// src/components/Profile.js

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/userSlice";
import { logout } from "../../store/authSlice";
import { clearCart } from "../../store/cartSlice";
import { clearFavorites } from "../../store/favoritesSlice";

const Profile = () => {
  const { firstName, lastName, email, phone } = useSelector((state) => state.auth.currentUser || {});
  const cartItems = useSelector((state) => state.cart.cartItems);
  const favoriteItems = useSelector((state) => state.favorites.favoriteItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(null);

  // Resim yükleme fonksiyonu
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Çıkış yapma fonksiyonu
  const handleLogout = () => {
    if (email) {
      localStorage.setItem(`cart_${email}`, JSON.stringify(cartItems)); 
      localStorage.setItem(`favorites_${email}`, JSON.stringify(favoriteItems));
    }

    dispatch(clearCart());
    dispatch(clearFavorites());
    dispatch(logoutUser());
    dispatch(logout());
    navigate("/home-page");
  };

  return (
    <div className="flex flex-col md:flex-row items-center mt-8 p-4 space-y-4 md:space-y-0 md:space-x-8">
      {/* Profil Resmi Yükleme Butonu */}
      <div className="flex flex-col items-center">
        <label htmlFor="profileImageInput" className="cursor-pointer">
          <div className="w-96 h-96 bg-gray-200 rounded-full flex items-center justify-center">
            {profileImage ? (
              <img src={profileImage} alt="Profil Resmi" className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="text-center text-sm text-gray-600">Resim Ekle</span>
            )}
          </div>
        </label>
        <input
          type="file"
          id="profileImageInput"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
      </div>

      {/* Kullanıcı Bilgilerini Ortala */}
      <div className="flex-1 flex justify-center">
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold mb-4">Kullanıcı Bilgileri</p>
          <div className="text-lg text-gray-700 space-y-1">
            <p>Ad: {firstName}</p>
            <p>Soyad: {lastName}</p>
            <p>Telefon: {phone}</p>
            <p>Email: {email}</p>
          </div>

          {/* Çıkış Yap Butonu */}
          <button 
            onClick={handleLogout} 
            className="bg-red-500 text-white px-4 py-2 rounded-lg mt-6"
          >
            Çıkış Yap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
