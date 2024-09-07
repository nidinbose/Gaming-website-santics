import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';  // Import useNavigate and Link
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    cpassword: '',
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const navigate = useNavigate(); 

  const togglePasswordVisibility = () => setPasswordShown(!passwordShown);
  const toggleConfirmPasswordVisibility = () => setConfirmPasswordShown(!confirmPasswordShown);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.cpassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!validatePassword(formData.password)) {
      alert(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      return;
    }

    try {
      const response = await axios.post('http://localhost:3003/api/user', formData);
      alert('Signup successful!');
      navigate('/login');  // Navigate to the login page after signup
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Signup failed!');
    }
  };

  return (
    <section className="grid h-screen place-items-center p-8 bg-white">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2 text-center font-semibold">
          Create an user Account
        </Typography>
        <Typography className="mb-16 text-center text-gray-600 font-normal text-[18px]">
          Enter your details to register an account
        </Typography>
        <form onSubmit={handleSubmit} className="mx-auto max-w-[24rem]">
          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email">
              <Typography variant="small" className="mb-2 block font-medium text-gray-900">
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
              onChange={handleInputChange}
              className="w-full placeholder:opacity-100 focus:border-primary border-blue-gray-200"
              labelProps={{ className: "hidden" }}
            />
          </div>

          {/* Username Field */}
          <div className="mb-6">
            <label htmlFor="username">
              <Typography variant="small" className="mb-2 block font-medium text-gray-900">
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
              onChange={handleInputChange}
              className="w-full placeholder:opacity-100 focus:border-primary border-blue-gray-200"
              labelProps={{ className: "hidden" }}
            />
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <label htmlFor="password">
              <Typography variant="small" className="mb-2 block font-medium text-gray-900">
                Password
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              labelProps={{ className: "hidden" }}
              className="w-full placeholder:opacity-100 focus:border-primary border-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
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
              <Typography variant="small" className="mb-2 block font-medium text-gray-900">
                Confirm Password
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              labelProps={{ className: "hidden" }}
              className="w-full placeholder:opacity-100 focus:border-primary border-blue-gray-200"
              type={confirmPasswordShown ? "text" : "password"}
              name="cpassword"
              value={formData.cpassword}
              onChange={handleInputChange}
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
          <Typography variant="small" color="gray" className="mt-4 text-center font-normal">
            Already registered?{" "}
            <Link to={`/adminlogin`} className="font-medium text-gray-900">
              Sign in
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default Signup;
