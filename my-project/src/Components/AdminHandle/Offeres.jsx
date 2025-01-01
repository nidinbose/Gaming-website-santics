import React from 'react';
import {Link} from 'react-router-dom'

const Offers = () => {

  const offers = [
    {
      id: 1,
      title: 'Buy 1 Get 1 Free on Gaming Mice',
      description: 'Get a free gaming mouse when you buy one! Limited time offer.',
      discount: 'Buy 1, Get 1 Free',
      image: 'https://i.ytimg.com/vi/gWyVQw1u5To/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB98ynDJxLMgnrrpjKvA8ocA01adA',
    },
    {
      id: 2,
      title: 'Up to 50% Off on Gaming Headsets',
      description: 'Save up to 50% on all gaming headsets. Don\'t miss out!',
      discount: 'Up to 50% Off',
      image: 'https://i.ytimg.com/vi/gWyVQw1u5To/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB98ynDJxLMgnrrpjKvA8ocA01adA',
    },
    {
      id: 3,
      title: 'Free Shipping on Orders Above ₹2000',
      description: 'Get free shipping on your orders over ₹2000. No coupon needed.',
      discount: 'Free Shipping',
      image: 'https://i.ytimg.com/vi/gWyVQw1u5To/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB98ynDJxLMgnrrpjKvA8ocA01adA',
    },
    {
      id: 4,
      title: '10% Off on Gaming Chairs',
      description: 'Enjoy a comfortable gaming experience with 10% off on gaming chairs.',
      discount: '10% Off',
      image: 'https://i.ytimg.com/vi/gWyVQw1u5To/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB98ynDJxLMgnrrpjKvA8ocA01adA',
    },
  ];

  return (
    <div className="bg-black text-black min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-8">
          Special Offers - Santics Gaming
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white/10 rounded-lg shadow-lg overflow-hidden">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-200 mb-4">{offer.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{offer.description}</p>
                <span className="block text-lg font-semibold text-red-600 mb-4">
                  {offer.discount}
                </span>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full">
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>

    
        <div className="text-center mt-10">
         <Link to={`http://localhost:5173/admin/productslist`}>
         <button className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-red-700">
            View All Products
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Offers;
