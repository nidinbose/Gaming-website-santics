import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import axios from "axios"; // Import Axios

const UserResetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    otp: "",
    newPassword: "",
    confirmPassword: "",
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
    if (!formData.otp) {
      formErrors.otp = "OTP is required";
    }
    if (!formData.newPassword) {
      formErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 6) {
      formErrors.newPassword = "Password must be at least 6 characters long";
    }
    if (formData.newPassword !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
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
      const response = await axios.post("http://localhost:3003/api/resetuserpassword", {
        otp: formData.otp, // OTP is included here
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword,
      });

      // If password reset is successful, redirect to login page
      navigate("/login");
    } catch (error) {
      setErrors({ submit: error.response?.data?.error || "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid h-screen place-items-center p-8 bg-white">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2 text-center font-semibold">
          Reset Your Password
        </Typography>
        <Typography className="mb-16 text-center text-gray-600 font-normal text-[18px]">
          Enter the OTP sent to your email and a new password to reset it.
        </Typography>
        {errors.submit && (
          <Typography variant="small" className="mb-4 text-red-600 text-center">
            {errors.submit}
          </Typography>
        )}
        <form onSubmit={handleSubmit} className="mx-auto max-w-[24rem]">
          <div className="mb-6">
            <label htmlFor="otp">
              <Typography variant="small" className="mb-2 block font-medium text-gray-900">
                OTP
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="Enter OTP"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-primary border-blue-gray-200"
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
            />
            {errors.otp && (
              <Typography variant="small" color="red" className="mt-1">
                {errors.otp}
              </Typography>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="newPassword">
              <Typography variant="small" className="mb-2 block font-medium text-gray-900">
                New Password
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
              name="newPassword"
              value={formData.newPassword}
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
            {errors.newPassword && (
              <Typography variant="small" color="red" className="mt-1">
                {errors.newPassword}
              </Typography>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword">
              <Typography variant="small" className="mb-2 block font-medium text-gray-900">
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
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <Typography variant="small" color="red" className="mt-1">
                {errors.confirmPassword}
              </Typography>
            )}
          </div>
          <Button type="submit" color="gray" size="lg" className="mt-6 h-12" fullWidth>
            {loading ? "Resetting Password..." : "Reset Password"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default UserResetPassword;
