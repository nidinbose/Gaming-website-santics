import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.email) {
      formErrors.email = "Email is required";
    }
    if (!formData.password) {
      formErrors.password = "Password is required";
    }
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await fetch("http://localhost:3003/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      const { token, userId } = result; // Extract userId from the result
      localStorage.setItem("token", token); // Store the token in localStorage
      localStorage.setItem("userId", userId); // Store the user ID in localStorage

      // Navigate to the home page or another appropriate page after login
      navigate("/");
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center flex-col md:flex-row xl:mt-[200px]">
        <div className="logo mb-6 md:mb-0">
          <img src="" alt="logo" className="w-24 md:w-36 lg:w-48 xl:w-60" />
        </div>

        <div className="lp flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="image">
            <img
              src="/"
              alt=""
              className="w-80 h-auto md:w-96 md:h-[70vh] lg:w-[55vw] lg:h-[70vh] object-cover"
            />
          </div>

          <div className="field p-4 md:w-1/2">
            <h1 className="text-lg font-semibold mb-4">Welcome Back :)</h1>
            <b className="text-sm text-gray-500 mb-8">
              To keep connected with us, please login with your personal
              information using your email address and password.
            </b>

            <form onSubmit={handleSubmit}>
              <div className="email mb-4 bg-gray-100 p-2 rounded-lg relative mt-4">
                <p className="text-xs text-gray-400 font-semibold">
                  Email Address
                </p>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email1"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-none bg-transparent text-black mt-2 focus:outline-none text-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-2">{errors.email}</p>
                )}
              </div>

              <div className="password mb-4 bg-gray-100 p-2 rounded-lg relative">
                <p className="text-xs text-gray-400 font-semibold">Password</p>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border-none bg-transparent text-black mt-2 focus:outline-none text-sm"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-2">{errors.password}</p>
                )}
              </div>

              <div className="forgot-password mb-4 text-right">
                <Link to="/signup" className="text-pink-500 text-sm hover:underline">
                  Forgot Password?
                </Link>
              </div>

              {errors.submit && (
                <p className="text-red-500 text-xs mb-4">{errors.submit}</p>
              )}

              <div className="btn flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

