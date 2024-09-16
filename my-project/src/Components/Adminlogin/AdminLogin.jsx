import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import axios from "axios"; // Import Axios

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => setPasswordShown(!passwordShown);

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
      const response = await axios.post("http://localhost:3003/api/adminlogin", {
        email: formData.email,
        password: formData.password,
      });

      const { token, userId } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);

      navigate("/admin");
    } catch (error) {
      setErrors({ submit: error.response?.data?.error || "incorrect password/email" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid h-screen place-items-center p-8 bg-white">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2 text-center font-semibold">
          Sign In to Santics Admin Dashboard
        </Typography>
        <Typography className="mb-16 text-center text-gray-600 font-normal text-[18px]">
          Enter your email and password to sign in
        </Typography>
        {errors.submit && (
          <Typography variant="small" className="mb-4 text-red-600 text-center">
            {errors.submit}
          </Typography>
        )}
        <form onSubmit={handleSubmit} className="mx-auto max-w-[24rem]">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full placeholder:opacity-100 focus:border-primary border-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
            {errors.email && (
              <Typography variant="small" color="red" className="mt-1">
                {errors.email}
              </Typography>
            )}
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-primary border-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              icon={
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-2/4 transform -translate-y-2/4"
                >
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5 text-gray-700" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5 text-gray-700" />
                  )}
                </button>
              }
            />
            {errors.password && (
              <Typography variant="small" color="red" className="mt-1">
                {errors.password}
              </Typography>
            )}
          </div>
          <Button type="submit" color="gray" size="lg" className="mt-6 h-12" fullWidth>
            {loading ? "Signing in..." : "Sign in"}
          </Button>
          <div className="mt-4 flex justify-end">
           <Link to={`/adminforgotpassword`}>
           <Typography
              as="a"
                        color="blue-gray"
              variant="small"
              className="font-medium"
            >
              Forgot password?
            </Typography>
           </Link>
          </div>
          <Button
            variant="outlined"
            size="lg"
            className="mt-6 flex h-12 items-center justify-center gap-2"
            fullWidth
          >
            <img
              src="https://www.material-tailwind.com/logos/logo-google.png"
              alt="google"
              className="h-6 w-6"
            />
            Sign in with Google
          </Button>
          <Typography
            variant="small"
            color="gray"
            className="mt-4 text-center font-normal"
          >
            Not registered?{`adminregester`}
            <Link to={`/adminregester`} className="font-medium text-gray-900">
              Create an account
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
