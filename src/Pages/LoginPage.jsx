import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // Form verilerini localStorage'a kaydediyoruz
        localStorage.setItem("firstName", data.firstName);
        localStorage.setItem("lastName", data.lastName);
        localStorage.setItem("email", data.email);
        localStorage.setItem("phone", data.phone);
        localStorage.setItem("password", data.password);

        // Kaydolma işlemi tamamlandığında ana sayfaya yönlendirme
        navigate("/home-page");
        alert("Kayıt Başarılı")
    };

    const firstNameValue = watch("firstName", "");

    return (
        <div className="flex justify-center items-center h-screen my-40">
            <div className="w-8/12 lg:w-6/12 bg-gray-100 p-10 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-8 text-center">Login Page</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Ad */}
                    <label className="block text-lg font-semibold mb-2">Ad</label>
                    <input
                        type="text"
                        {...register("firstName", {
                            required: "Ad gereklidir",
                            minLength: {
                                value: 3,
                                message: "En az 3 harf içermelidir",
                            },
                            pattern: {
                                value: /^[A-Za-z]+$/,
                                message: "Sadece harfler içermelidir",
                            },
                        })}
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                        onFocus={() => setIsFirstNameFocused(true)}
                        onBlur={() => setIsFirstNameFocused(false)}
                    />
                    {isFirstNameFocused && firstNameValue.length < 3 && (
                        <p className="text-red-500">{errors.firstName?.message || "En az 3 harf içermelidir"}</p>
                    )}

                    {/* Diğer form alanları */}
                    <label className="block text-lg font-semibold mb-2">Soyad</label>
                    <input
                        type="text"
                        {...register("lastName", {
                            required: "Soyad gereklidir",
                            pattern: { value: /^[A-Za-z]+$/, message: "Sadece harfler içermelidir" },
                        })}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                    />
                    {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}

                    <label className="block text-lg font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email gereklidir",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Geçerli bir email adresi giriniz",
                            },
                        })}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <label className="block text-lg font-semibold mb-2">Telefon</label>
                    <input
                        type="text"
                        {...register("phone", {
                            required: "Telefon numarası gereklidir",
                            pattern: { value: /^[0-9]{11}$/, message: "Telefon numarası 11 haneli olmalıdır" },
                        })}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                    />
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

                    <label className="block text-lg font-semibold mb-2">Şifre</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Şifre gereklidir",
                            minLength: { value: 6, message: "Şifre en az 6 karakter olmalıdır" },
                        })}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                    <label className="block text-lg font-semibold mb-2">Şifre Tekrarı</label>
                    <input
                        type="password"
                        {...register("confirmPassword", {
                            required: "Şifre tekrarı gereklidir",
                            validate: (value) => value === watch("password") || "Şifreler eşleşmiyor",
                        })}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                    />
                    {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

                    {/* Kaydol Butonu */}
                    <button
                        type="submit"
                        className="w-1/2 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center flex justify-center mb-10"
                    >
                        Kaydol
                    </button>

                    {/* Become a Member Linki */}
                    <Link
                        to="/member-page"
                        className="w-1/2 p-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 text-center flex justify-center"
                    >
                        Become a Member
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
