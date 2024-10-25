import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const MemberPage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    // localStorage'daki email ve şifreyi al ve inputlara varsayılan olarak yerleştir
    const savedEmail = localStorage.getItem("email") || "";
    const savedPassword = localStorage.getItem("password") || "";
    setValue("email", savedEmail);
    setValue("password", savedPassword);
  }, [setValue]);

  const onLogin = (data) => {
    // localStorage'daki kayıtlı email ve şifreyi kontrol et
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (data.email === savedEmail && data.password === savedPassword) {
      alert("Giriş başarılı!");
      navigate("/home-page"); // Giriş başarılıysa ana sayfaya yönlendir
    } else {
      alert("Email veya şifre hatalı!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen my-40">
      <div className="w-8/12 lg:w-6/12 bg-gray-100 p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center">Member Login</h1>
        <form onSubmit={handleSubmit(onLogin)}>
          <label className="block text-lg font-semibold mb-2">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label className="block text-lg font-semibold mb-2">Şifre</label>
          <input
            type="password"
            {...register("password")}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <button
            type="submit"
            className="w-1/2 p-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default MemberPage;
