// src/pages/LoginPage.js
/*
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Toastify importları
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Sayfa yüklenme kontrolü ve hata mesajı için async işlevi
        const checkPageLoad = async () => {
            try {
                // Burada sayfanın yüklenmesi için yapılacak bir işlev koyabilirsiniz
                // Eğer hata durumu simüle etmek istiyorsanız throw yeni bir Error() oluşturabilirsiniz
                // throw new Error("Yüklenme hatası"); // Bu satır hata simülasyonu içindir
            } catch (error) {
                // Hata durumunda toast mesajını göster
                toast.error("Şimdilik Hizmet Veremiyoruz, Üzgünüz!", {
                    position: "top-center",
                    autoClose: 3000,
                });
            }
        };

        checkPageLoad();
    }, []);

    const onRegister = (data) => {
        const userData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            phone: data.phone
        };
        localStorage.setItem(`user_${data.email}`, JSON.stringify(userData));

        dispatch(login({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone
        }));

        toast.success("Ailemize Hoşgeldin!", {
            position: "top-center",
            autoClose: 3000,
        });

        console.log("Kayıt başarılı, giriş yapıldı.");
        navigate("/home-page");
    };

    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-4">Kayıt Ol</h1>
            <form onSubmit={handleSubmit(onRegister)} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Ad"
                    {...register("firstName", { required: "Ad gereklidir" })}
                    className="p-2 border border-gray-300 rounded"
                />
                {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                
                <input
                    type="text"
                    placeholder="Soyad"
                    {...register("lastName", { required: "Soyad gereklidir" })}
                    className="p-2 border border-gray-300 rounded"
                />
                {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                
                <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: "Email gereklidir" })}
                    className="p-2 border border-gray-300 rounded"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                
                <input
                    type="password"
                    placeholder="Şifre"
                    {...register("password", { required: "Şifre gereklidir", minLength: { value: 6, message: "Şifre en az 6 karakter olmalıdır" } })}
                    className="p-2 border border-gray-300 rounded"
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                <input
                    type="password"
                    placeholder="Şifre Tekrarı"
                    {...register("confirmPassword", { 
                        required: "Şifre tekrarı gereklidir", 
                        validate: (value) => value === watch("password") || "Şifreler eşleşmiyor"
                    })}
                    className="p-2 border border-gray-300 rounded"
                />
                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Kayıt Ol
                </button>
            </form>
            <ToastContainer /> {/* Toast mesajlarını göstermek için *//*}
        </div>
    );
};

export default LoginPage;*/