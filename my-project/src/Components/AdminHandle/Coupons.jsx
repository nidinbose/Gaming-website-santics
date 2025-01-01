import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Coupons = () => {
  const coupons = [
    {
      id: 1,
      code: 'GAMER10',
      discount: 10, 
      description: 'Get 10% off on your first purchase!',
    },
    {
      id: 2,
      code: 'HEADSET15',
      discount: 15, 
      description: '15% off on Gaming Headsets',
    },
    {
      id: 3,
      code: 'MOUSE5',
      discount: 5, 
      description: '5% off on all Gaming Mice',
    },
    {
      id: 4,
      code: 'FREESHIP',
      discount: 0, 
      description: 'Free Shipping on orders above ₹2000',
    },
  ];

  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const applyCoupon = (coupon) => {
    setAppliedCoupon(coupon);
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  return (
    <div className="bg-black text-black min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-8">
          Coupons - Santics Gaming
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {coupons.map((coupon) => (
            <div key={coupon.id} className="bg-white/10 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-300 mb-4">{coupon.code}</h3>
              <p className="text-sm text-gray-400 mb-4">{coupon.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-red-600">
                  {coupon.discount > 0 ? `${coupon.discount}% Off` : 'Free Shipping'}
                </span>
                <button
                  onClick={() => applyCoupon(coupon)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Apply Coupon
                </button>
              </div>
            </div>
          ))}
        </div>

           {appliedCoupon && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Coupon Applied: {appliedCoupon.code}
            </h3>
            <p className="text-lg text-gray-700 mb-4">{appliedCoupon.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold text-red-600">
                {appliedCoupon.discount > 0 ? `${appliedCoupon.discount}% Off` : 'Free Shipping'}
              </span>
              <button
                onClick={removeCoupon}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Remove Coupon
              </button>
            </div>
          </div>
        )}
        {!appliedCoupon && (
          <div className="text-center mt-10">
            <Link to={`http://localhost:5173/admin/productslist`}>
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-red-700">
              View All Products
            </button>
            </Link>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default Coupons;
