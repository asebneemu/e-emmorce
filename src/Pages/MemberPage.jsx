// src/pages/MemberPage.js

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/authSlice"; // loginUser thunk import edildi
import { setCart } from "../store/cartSlice"; // Sepeti güncellemek için
import { setFavorites } from "../store/favoritesSlice"; // Favorileri güncellemek için
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Toastify imports
import "react-toastify/dist/ReactToastify.css";
import md5 from "md5"; // Gravatar için md5 eklendi
import { useState } from "react";
import { login } from "../store/authSlice";


const MemberPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(false); // "Remember me" durumu

    const onLogin = async (data) => {
        // Gönderilen giriş verilerini kontrol etmek için
        console.log("Giriş verileri:", data);
    
        // Kullanıcı girişi için sunucuya POST isteği gönderiyoruz
        const result = await dispatch(loginUser(data));
    
        if (result.meta.requestStatus === "fulfilled") {
            const savedUser = result.payload;
    
            // Sunucudan alınan kullanıcı verilerini kontrol etmek için
            console.log("Sunucu yanıtı (başarılı):", savedUser);
    
            // Gravatar URL'si oluşturuluyor
            const gravatarUrl = `https://www.gravatar.com/avatar/${md5(savedUser.email.trim().toLowerCase())}`;
    
            // Kullanıcı bilgilerini güncelle
            dispatch(login({
                ...savedUser,
                gravatar: gravatarUrl,
            }));
    
            // Kullanıcının email adresine özel kaydedilen sepet verisini yükle
            const savedCart = JSON.parse(localStorage.getItem(`cart_${data.email}`)) || [];
            dispatch(setCart(savedCart)); // Sepeti Redux store'a geri yükle
    
            // Kullanıcının email adresine özel kaydedilen favori verilerini yükle
            const savedFavorites = JSON.parse(localStorage.getItem(`favorites_${data.email}`)) || [];
            dispatch(setFavorites(savedFavorites)); // Favorileri Redux store'a geri yükle
    
            // "Remember me" seçeneği işaretli ise token'ı localStorage'a kaydet
            if (rememberMe) {
                localStorage.setItem("authToken", savedUser.token);
            }
    
            navigate("/home-page"); // Başarılı girişten sonra yönlendirme
        } else {
            // Hata durumunu kontrol etmek için
            console.log("Hata mesajı:", result.error.message);
            console.log("Result payload (hata):", result.payload);
            
            toast.error("Email veya şifre yanlış."); // Hata mesajı göster
        }
    };
    

    return (
        <div className="flex flex-col items-center p-4">
            <ToastContainer />
            <h1 className="text-2xl font-bold mb-4">Giriş Yap</h1>
            <form onSubmit={handleSubmit(onLogin)} className="flex flex-col space-y-4 w-full max-w-md">
                
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: "Email gereklidir" })}
                        className="p-2 border border-gray-300 rounded w-full"
                        autoComplete="email" // Email alanı için autocomplete
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                <div>
                    <input
                        type="password"
                        placeholder="Şifre"
                        {...register("password", { required: "Şifre gereklidir" })}
                        className="p-2 border border-gray-300 rounded w-full"
                        autoComplete="current-password" // Şifre alanı için autocomplete
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        className="mr-2"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    <label htmlFor="rememberMe">Beni Hatırla</label>
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Giriş Yap
                </button>

                <button type="button" onClick={() => navigate("/sign")} className="mt-4 text-blue-500">
                    Hesabınız yok mu? Kayıt Ol
                </button>
            </form>
        </div>
    );
};

export default MemberPage;
