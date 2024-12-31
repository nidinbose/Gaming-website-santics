import React from 'react';

const CustomerCare = () => {
  return (
    <div className="customer-care-container bg-black text-white min-h-screen flex items-center justify-center py-10 px-5">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6 font-mono text-red-600">Customer Care</h1>
        <p className="text-lg mb-8 font-mono">
          At Santics Gaming, we value our customers and are here to assist you with any questions or issues you may have. Feel free to reach out to us via email or phone.
        </p>
        <div className="bg-white/10 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 font-mono">Contact Us</h2>
          <div className="mb-4">
            <p className="text-lg font-mono">📧 <span className="font-semibold">Email:</span> <a href="mailto:support@santicsgaming.com" className="text-blue-400 underline">support@santicsgaming.com</a></p>
          </div>
          <div>
            <p className="text-lg font-mono">📞 <span className="font-semibold">Phone:</span> <a href="tel:+18001234567" className="text-blue-400 underline">+1-800-123-4567</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCare;
