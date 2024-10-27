import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../store/userSlice"; // Çıkış yapma işlemi için
import { logout } from "../store/authSlice"; // Oturum durumunu sıfırlamak için

const UserPage = () => {
  // Redux store'dan kullanıcı bilgilerini alıyoruz
  const { firstName, lastName, email, phone } = useSelector((state) => state.auth.currentUser || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Çıkış yapma fonksiyonu
  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(logout());
    navigate("/home-page"); // Kullanıcıyı giriş sayfasına yönlendiriyoruz
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
