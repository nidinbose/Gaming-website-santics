import React, { useState } from "react";
import axios from 'axios'; 
import { Link, useNavigate } from "react-router-dom";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const AdminRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    cpassword: '',
    role: 'admin', // The role is hardcoded as 'admin' for this form
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);
  const toggleConfirmPasswordVisibility = () => setConfirmPasswordShown((cur) => !cur);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure password and confirm password match
    if (formData.password !== formData.cpassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3003/api/adminregester', formData); 

      if (response.status === 201) {
        console.log('Registration successful');
        navigate('/adminlogin');  // Redirect to login page after successful registration
      } else {
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <section className="grid h-screen place-items-center p-8 bg-white">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2 text-center font-semibold">
          Create an Admin Account
        </Typography>
        <Typography className="mb-16 text-center text-gray-600 font-normal text-[18px]">
          Enter your details to register an account
        </Typography>
        <form onSubmit={handleSubmit} className="mx-auto max-w-[24rem]">
          {/* Email Field */}
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
          </div>

          {/* Username Field */}
          <div className="mb-6">
            <label htmlFor="username">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Username
              </Typography>
            </label>
            <Input
              id="username"
              color="gray"
              size="lg"
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              className="w-full placeholder:opacity-100 focus:border-primary border-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>

          {/* Password Field */}
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
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6 relative">
            <label htmlFor="cpassword">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Confirm Password
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-primary border-blue-gray-200"
              type={confirmPasswordShown ? "text" : "password"}
              name="cpassword" // Ensure name matches the state
              value={formData.cpassword}
              onChange={handleChange}
              icon={
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-2/4 transform -translate-y-2/4"
                >
                  {confirmPasswordShown ? (
                    <EyeIcon className="h-5 w-5 text-gray-700" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5 text-gray-700" />
                  )}
                </button>
              }
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" color="gray" size="lg" className="mt-6 h-12" fullWidth>
            Register
          </Button>

          {/* Link to Sign In */}
          <Typography
            variant="small"
            color="gray"
            className="mt-4 text-center font-normal"
          >
            Already registered?{" "}
            <Link to={`/adminlogin`} className="font-medium text-gray-900">
              Sign in
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
};

export default AdminRegister;



