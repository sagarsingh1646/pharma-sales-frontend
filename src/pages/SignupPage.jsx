import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../api/authAPI";
import { useDispatch, useSelector } from "react-redux";
import { signUpFailure, signUpStart, signUpSuccess } from "../features/auth/AuthSlice";

export default function Signup() {
      const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
   e.preventDefault();
      dispatch(signUpStart());
  
      try {
        const data = await signupUser(formData);
        if (data) {
        dispatch(signUpSuccess());
          navigate("/login");
        }
      } catch (err) {
        dispatch(signUpFailure(err.message || "Signup failed"));
      }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-white border border-gray-200 rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">Sign Up</h1>
        <p className="text-gray-500 text-center mb-16">Create a new account</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name Input */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-black"
            required
          />

          {/* Last Name Input */}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-black"
            required
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-black"
            required
          />

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-black"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
