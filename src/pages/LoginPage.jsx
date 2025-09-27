import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // TODO: Dispatch Redux action to login user
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-white border border-gray-200 rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">Login</h1>
        <p className="text-gray-500 text-center mb-16">Sign in to your account</p>

        <form onSubmit={handleSubmit} className="space-y-6">
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
            Sign In
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-4 text-center text-gray-600 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
