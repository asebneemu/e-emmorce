// src/pages/MemberPage.js

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const MemberPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogin = (data) => {
        const savedEmail = localStorage.getItem("email") || null;
        const savedPassword = localStorage.getItem("password") || null;

        console.log("Kayıtlı email:", savedEmail); // Debugging için
        console.log("Kayıtlı şifre:", savedPassword); // Debugging için
        console.log("Girilen email:", data.email); // Debugging için
        console.log("Girilen şifre:", data.password); // Debugging için

        // Eğer email ve şifre eşleşiyorsa giriş yapma işlemi
        if (data.email === savedEmail && data.password === savedPassword) {
            dispatch(login({
                firstName: localStorage.getItem("firstName"),
                lastName: localStorage.getItem("lastName"),
                email: data.email,
                phone: localStorage.getItem("phone")
            }));
            navigate("/home-page");
        } else {
            alert("Email veya şifre yanlış.");
        }
    };

    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-4">Giriş Yap</h1>
            <form onSubmit={handleSubmit(onLogin)} className="flex flex-col space-y-4">
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
                    {...register("password", { required: "Şifre gereklidir" })}
                    className="p-2 border border-gray-300 rounded"
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}

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
