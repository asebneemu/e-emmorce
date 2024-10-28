// src/pages/UserPage.js

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../store/userSlice"; // Çıkış yapma işlemi için
import { logout } from "../store/authSlice"; // Oturum durumunu sıfırlamak için
import { clearCart } from "../store/cartSlice"; // Sepeti sıfırlamak için
import { clearFavorites } from "../store/favoritesSlice"; // Favorileri sıfırlamak için

const UserPage = () => {
  // Redux store'dan kullanıcı bilgilerini alıyoruz
  const { firstName, lastName, email, phone } = useSelector((state) => state.auth.currentUser || {});
  const cartItems = useSelector((state) => state.cart.cartItems);
  const favoriteItems = useSelector((state) => state.favorites.favoriteItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Çıkış yapma fonksiyonu
  const handleLogout = () => {
    if (email) { // Eğer kullanıcı email bilgisine sahipse (yani giriş yapılmışsa)
      // Sepetteki ürünleri email adresine özel olacak şekilde localStorage'a kaydediyoruz
      localStorage.setItem(`cart_${email}`, JSON.stringify(cartItems)); 

      // Favori ürünleri email adresine özel olacak şekilde localStorage'a kaydediyoruz
      localStorage.setItem(`favorites_${email}`, JSON.stringify(favoriteItems));
    }

    dispatch(clearCart()); // Sepeti sıfırlamak için clearCart action'ını dispatch ediyoruz
    dispatch(clearFavorites()); // Favorileri sıfırlamak için clearFavorites action'ını dispatch ediyoruz
    dispatch(logoutUser()); // Kullanıcı bilgilerini sıfırlamak için logoutUser action'ını dispatch ediyoruz
    dispatch(logout()); // Oturum durumunu sıfırlamak için logout action'ını dispatch ediyoruz
    navigate("/home-page"); // Kullanıcıyı anasayfa (home-page) rotasına yönlendiriyoruz
  };

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Kullanıcı Bilgileri */}
      <p className="text-2xl font-bold mb-4">Kullanıcı Bilgileri</p>
      <div className="text-lg text-gray-700 mb-1">
        <p>Ad: {firstName}</p>
        <p>Soyad: {lastName}</p>
        <p>Telefon: {phone}</p>
        <p>Email: {email}</p>
      </div>

      {/* Çıkış Yap Butonu */}
      <button 
        onClick={handleLogout} 
        className="bg-red-500 text-white px-4 py-2 rounded-lg mt-10"
      >
        Çıkış Yap
      </button>
    </div>
  );
};

export default UserPage;
