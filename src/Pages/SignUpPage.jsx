import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedRole, setSelectedRole] = useState("Customer");

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/roles");
                setRoles(response.data);
            } catch (error) {
                console.error("Roles fetch error:", error);
                toast.error("Failed to load roles");
            }
        };
        fetchRoles();
    }, []);

    const onSubmit = async (formData) => {
        setLoading(true);
        const data = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role_id: formData.role_id,
            store: selectedRole === "Store" ? {
                name: formData.store?.name,
                phone: formData.store?.phone,
                tax_no: formData.store?.tax_no,
                bank_account: formData.store?.bank_account
            } : undefined,
        };

        try {
            await axios.post("https://workintech-fe-ecommerce.onrender.com/signup", data);
            dispatch(login(data));
            toast.success("Registration successful! Please activate your account via email.");
            navigate("/home-page");
        } catch (error) {
            console.error("Sign-up error:", error);
            toast.error("Sign-up failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const password = watch("password");

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <ToastContainer />
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required", minLength: 3 })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register("email", { 
                                required: "Email is required", 
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Invalid email address"
                                }
                            })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            {...register("password", { 
                                required: "Password is required", 
                                minLength: 8,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/ 
                            })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            {...register("confirmPassword", {
                                validate: value => value === password || "Passwords do not match"
                            })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.confirmPassword && <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>}
                    </div>

                    {/* Role */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Role</label>
                        <select
                            {...register("role_id", { required: "Role is required" })}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Select a role</option>
                            {roles.map((role) => (
                                <option key={role.id} value={role.id}>{role.name}</option>
                            ))}
                        </select>
                        {errors.role_id && <p className="text-sm text-red-600">{errors.role_id.message}</p>}
                    </div>

                    {/* Store Fields */}
                    {selectedRole === "Store" && (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Store Name</label>
                                <input
                                    type="text"
                                    {...register("store.name", { required: "Store name is required", minLength: 3 })}
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.store?.name && <p className="text-sm text-red-600">{errors.store.name.message}</p>}
                            </div>
                            {/* Other store-specific fields can be added similarly */}
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
