import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/userSlice";
import { logout, updateUser } from "../../store/authSlice";
import { clearCart } from "../../store/cartSlice";
import { clearFavorites } from "../../store/favoritesSlice";
import { FaPen } from "react-icons/fa";
import md5 from "md5"; // Gravatar desteği için

const Profile = () => {
  const { name, email, phone } = useSelector((state) => state.auth.currentUser || {});
  const cartItems = useSelector((state) => state.cart.cartItems);
  const favoriteItems = useSelector((state) => state.favorites.favoriteItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(null);
  
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState(name || "");
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [newEmail, setNewEmail] = useState(email || "");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem(`profileImage`, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const savedImage = localStorage.getItem(`profileImage`);
    const savedUser = JSON.parse(localStorage.getItem(`user_${email}`));
    const gravatarUrl = `https://www.gravatar.com/avatar/${md5(newEmail.trim().toLowerCase())}`;

    if (savedImage) {
        setProfileImage(savedImage);
    } else {
        setProfileImage(gravatarUrl); // Eğer yüklenmiş profil resmi yoksa Gravatar kullanılır
    }

    if (savedUser) {
      setNewName(savedUser.name || name);
      setNewEmail(savedUser.email || email);
    }
  }, [email, name, newEmail]);

  const handleSave = () => {
    const updatedUser = {
      name: newName,
      email: newEmail,
      phone,
    };

    dispatch(updateUser(updatedUser));
    localStorage.setItem(`user_${newEmail}`, JSON.stringify(updatedUser));
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-8 p-4 space-y-4 md:space-y-0 md:space-x-12 max-w-4xl mx-auto">
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

      <div className="flex-1 flex justify-center max-w-xs">
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold mb-4">Kullanıcı Bilgileri</p>
          <div className="text-lg text-gray-700 space-y-3">
            <div className="flex items-center justify-between">
              <span>Ad: </span>
              {isEditingName ? (
                <div className="flex-grow">
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="ml-2 p-1 border border-gray-300 rounded w-full"
                  />
                  <button onClick={() => { setIsEditingName(false); handleSave(); }} className="ml-2 text-blue-500">Kaydet</button>
                </div>
              ) : (
                <div className="flex-grow flex justify-between">
                  <span className="mr-5">{newName}</span>
                  <FaPen onClick={() => setIsEditingName(true)} className="cursor-pointer text-gray-500" />
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
