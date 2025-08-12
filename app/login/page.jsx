"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ Email: "", Password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("/api/login", formData);
      if (res.status === 200) {
        router.push("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="relative">
        <img
          src="https://t4.ftcdn.net/jpg/02/22/07/49/360_F_222074985_CwcuLMkQ0NBU2Qv1lqHD5XpHYtkY8mAB.jpg"
          alt="Background"
          className="w-full h-96 md:h-full object-cover p-2 rounded-3xl"
        />
        <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 text-white max-w-sm drop-shadow-lg">
          <h2 className="text-xl md:text-4xl font-bold">
            One Tap to Everything You Need
          </h2>
          <p className="text-xs md:text-sm mt-2">
            Experience seamless access to everything you desire, curated with
            care.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-10">
        <div className="mb-6 flex justify-center">
          <img src="/images/logo.png" alt="Logo" className="h-10" />
        </div>

        <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
        <p className="text-gray-500 text-center mb-6">
          Enter your email and password to access your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-200"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Password *
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-200 pr-10"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a
              href="/forgot-password"
              className="text-green-700 hover:underline"
            >
              Forgot Password
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-gray-900 transition"
          >
            {loading ? "Logging in..." : "Sign In"}
          </button>
          <button
            type="button"
            className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition"
          >
            <FaGoogle className="text-green-500" />
            Sign In with Google
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-green-700 font-medium hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
