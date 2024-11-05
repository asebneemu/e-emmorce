
// src/pages/SignUpPage.js

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Toastify imports
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedRole, setSelectedRole] = useState("Customer");

    useEffect(() => {
        // Fetch roles on component mount
        const fetchRoles = async () => {
            try {
                const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/roles");
                setRoles(response.data);
            } catch (error) {
                toast.error("Failed to load roles");
            }
        };
        fetchRoles();
    }, []);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await axios.post("https://workintech-fe-ecommerce.onrender.com/signup", data);
            toast.success("You need to click the link in the email to activate your account!");
            navigate(-1); // Go to previous page
        } catch (error) {
            toast.error("Sign-up failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Watch password fields for validation
    const password = watch("password");

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <ToastContainer />
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            {...register("name", { required: "Name is required", minLength: 3 })}
                        />
                        {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
                        />
                        {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            {...register("password", { 
                                required: "Password is required", 
                                minLength: 8,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/ 
                            })}
                        />
                        {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            {...register("confirmPassword", {
                                validate: value => value === password || "Passwords do not match"
                            })}
                        />
                        {errors.confirmPassword && <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Role</label>
                        <select
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            {...register("role_id", { required: "Role is required" })}
                            onChange={(e) => setSelectedRole(e.target.value)}
                        >
                            {roles.map((role) => (
                                <option key={role.id} value={role.id}>{role.name}</option>
                            ))}
                        </select>
                        {errors.role_id && <p className="text-sm text-red-600">{errors.role_id.message}</p>}
                    </div>

                    {selectedRole === "Store" && (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Store Name</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    {...register("store.name", { required: "Store name is required", minLength: 3 })}
                                />
                                {errors.store?.name && <p className="text-sm text-red-600">{errors.store.name.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Store Phone</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    {...register("store.phone", { 
                                        required: "Store phone is required", 
                                        pattern: /^(\+90|0)?5\d{9}$/ 
                                    })}
                                />
                                {errors.store?.phone && <p className="text-sm text-red-600">{errors.store.phone.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Store Tax ID</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    {...register("store.tax_no", { 
                                        required: "Tax ID is required", 
                                        pattern: /^T\d{10}$/ 
                                    })}
                                />
                                {errors.store?.tax_no && <p className="text-sm text-red-600">{errors.store.tax_no.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Store Bank Account</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    {...register("store.bank_account", { 
                                        required: "Bank account is required", 
                                        pattern: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/ 
                                    })}
                                />
                                {errors.store?.bank_account && <p className="text-sm text-red-600">{errors.store.bank_account.message}</p>}
                            </div>
                        </>
                    )}

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none disabled:opacity-50"
                    >
                        {loading ? "Submitting..." : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
