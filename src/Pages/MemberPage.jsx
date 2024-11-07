// src/pages/MemberPage.js

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { setCart } from "../store/cartSlice"; // Sepeti güncellemek için
import { setFavorites } from "../store/favoritesSlice"; // Favorileri güncellemek için
import { useNavigate } from "react-router-dom";

const MemberPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogin = (data) => {
        // Kullanıcının email adresine göre `localStorage`'dan kayıtlı kullanıcı bilgilerini alıyoruz
        const savedUser = JSON.parse(localStorage.getItem(`user_${data.email}`));

        // Eğer kullanıcı kayıtlıysa ve şifre doğruysa giriş işlemi yapılıyor
        if (savedUser && data.password === savedUser.password) {
            // Kullanıcı bilgilerini güncelle
            dispatch(login({
                firstName: savedUser.firstName,
                lastName: savedUser.lastName,
                email: savedUser.email,
                phone: savedUser.phone
            }));

            // Kullanıcının email adresine özel kaydedilen sepet verisini yükle
            const savedCart = JSON.parse(localStorage.getItem(`cart_${data.email}`)) || [];
            dispatch(setCart(savedCart)); // Sepeti Redux store'a geri yükle

            // Kullanıcının email adresine özel kaydedilen favori verilerini yükle
            const savedFavorites = JSON.parse(localStorage.getItem(`favorites_${data.email}`)) || [];
            dispatch(setFavorites(savedFavorites)); // Favorileri Redux store'a geri yükle

            navigate("/home-page"); // Başarılı girişten sonra yönlendir
        } else {
            alert("Email veya şifre yanlış.");
        }
    };

    return (
        <div className="flex flex-col items-center p-4">
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

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Giriş Yap
                </button>

                <button type="button" onClick={() => navigate("/login-page")} className="mt-4 text-blue-500">
                    Hesabınız yok mu? Kayıt Ol
                </button>
            </form>
        </div>
    );
};

export default MemberPage;
