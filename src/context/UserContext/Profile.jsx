// src/components/Profile.js

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/userSlice";
import { logout, updateUser } from "../../store/authSlice";
import { clearCart } from "../../store/cartSlice";
import { clearFavorites } from "../../store/favoritesSlice";
import { FaPen } from "react-icons/fa"; // Kalem ikonu

const Profile = () => {
  const { firstName, lastName, email, phone } = useSelector((state) => state.auth.currentUser || {});
  const cartItems = useSelector((state) => state.cart.cartItems);
  const favoriteItems = useSelector((state) => state.favorites.favoriteItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(null); // Profil resmini saklar
  
  const [isEditingFirstName, setIsEditingFirstName] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName || "");

  const [isEditingLastName, setIsEditingLastName] = useState(false);
  const [newLastName, setNewLastName] = useState(lastName || "");

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [newEmail, setNewEmail] = useState(email || "");

  // Resim Yükleme Fonksiyonu - Yalnızca yeni bir resim yüklendiğinde güncellenir
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem(`profileImage`, reader.result); // 4.1 Profil resmi genel bir anahtarla saklanır
      };
      reader.readAsDataURL(file);
    }
  };

  // İlk yüklendiğinde `localStorage`daki resmi kontrol etme
  useEffect(() => {
    const savedImage = localStorage.getItem(`profileImage`);
    const savedUser = JSON.parse(localStorage.getItem(`user_${email}`));
    if (savedImage) {
      setProfileImage(savedImage); // Sadece `localStorage`'daki resim yüklendiğinde ayarlanır
    }
    if (savedUser) {
      setNewFirstName(savedUser.firstName || firstName);
      setNewLastName(savedUser.lastName || lastName);
      setNewEmail(savedUser.email || email);
    }
  }, [email, firstName, lastName]);

  const handleSave = () => {
    const updatedUser = {
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
      phone,
    };

    dispatch(updateUser(updatedUser)); // Redux ve localStorage güncellemeleri için updateUser dispatch edildi
    localStorage.setItem(`user_${newEmail}`, JSON.stringify(updatedUser)); // Yeni email ile user verisi kaydedildi
    localStorage.setItem("currentUser", JSON.stringify(updatedUser)); // Yeni email ile currentUser bilgisi kaydedildi
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-8 p-4 space-y-4 md:space-y-0 md:space-x-12 max-w-4xl mx-auto">
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

      {/* Kullanıcı Bilgileri */}
      <div className="flex-1 flex justify-center max-w-xs">
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold mb-4">Kullanıcı Bilgileri</p>
          <div className="text-lg text-gray-700 space-y-3">
            <div className="flex items-center justify-between">
              <span>Ad: </span>
              {isEditingFirstName ? (
                <div className="flex-grow">
                  <input
                    type="text"
                    value={newFirstName}
                    onChange={(e) => setNewFirstName(e.target.value)}
                    className="ml-2 p-1 border border-gray-300 rounded w-full"
                  />
                  <button onClick={() => { setIsEditingFirstName(false); handleSave(); }} className="ml-2 text-blue-500">Kaydet</button>
                </div>
              ) : (
                <div className="flex-grow flex justify-between">
                  <span className="mr-5">{newFirstName}</span>
                  <FaPen onClick={() => setIsEditingFirstName(true)} className="cursor-pointer text-gray-500" />
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <span>Soyad: </span>
              {isEditingLastName ? (
                <div className="flex-grow">
                  <input
                    type="text"
                    value={newLastName}
                    onChange={(e) => setNewLastName(e.target.value)}
                    className="ml-2 p-1 border border-gray-300 rounded w-full"
                  />
                  <button onClick={() => { setIsEditingLastName(false); handleSave(); }} className="ml-2 text-blue-500">Kaydet</button>
                </div>
              ) : (
                <div className="flex-grow flex justify-between">
                  <span className="mr-5">{newLastName}</span>
                  <FaPen onClick={() => setIsEditingLastName(true)} className="cursor-pointer text-gray-500" />
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <span>Email: </span>
              {isEditingEmail ? (
                <div className="flex-grow">
                  <input
                    type="text"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="ml-2 p-1 border border-gray-300 rounded w-full"
                  />
                  <button onClick={() => { setIsEditingEmail(false); handleSave(); }} className="ml-2 text-blue-500">Kaydet</button>
                </div>
              ) : (
                <div className="flex-grow flex justify-between">
                  <span className="mr-5">{newEmail}</span>
                  <FaPen onClick={() => setIsEditingEmail(true)} className="cursor-pointer text-gray-500" />
                </div>
              )}
            </div>
          </div>

          {/* Çıkış Yap Butonu */}
          <button 
            onClick={() => {
              if (newEmail) {
                localStorage.setItem(`cart_${newEmail}`, JSON.stringify(cartItems)); 
                localStorage.setItem(`favorites_${newEmail}`, JSON.stringify(favoriteItems));
              }
              dispatch(clearCart());
              dispatch(clearFavorites());
              dispatch(logoutUser());
              dispatch(logout());
              navigate("/home-page");
            }} 
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
