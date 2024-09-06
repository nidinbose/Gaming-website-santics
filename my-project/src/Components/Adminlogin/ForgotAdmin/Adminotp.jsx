import React, { useState } from 'react';

const OtpForm = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  // Handle OTP input change
  const handleChange = (value, index) => {
    if (value.length > 1) return; 

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input automatically
    if (value && index < 3) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  // Handle OTP submission
  const handleSubmit = () => {
    const otpValue = otp.join('');
    console.log('Entered OTP:', otpValue);
    // Here you can add your verification logic
  };

  // Handle OTP resend
  const handleResendOtp = () => {
    console.log('Resending OTP...');
    // Add resend OTP logic here
  };

  return (
    <div className="max-w-md mx-auto border max-w-sm mt-20 rounded">
      <form className="shadow-md px-4 py-6">
        <div className="flex justify-center gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
              type="text"
              maxLength="1"
              pattern="[0-9]"
              inputMode="numeric"
              autoComplete="one-time-code"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              required
            />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Verify
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800 ml-4"
            href="#"
            onClick={handleResendOtp}
          >
            Resend OTP
          </a>
        </div>
      </form>
    </div>
  );
};

export default OtpForm;
