import React from 'react';

const Pcategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Gaming Mice',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHXtR0FHM1LtnGBUYUwZ5xY9tRfNaLwD9Jg&s',
      description: 'High precision, ergonomic gaming mice for every gamer.',
    },
    {
      id: 2,
      name: 'Gaming Keyboards',
      image: 'https://elitehubs.com/cdn/shop/files/rz03-04690100-r3m1-image-4-600x600.webp?v=1694172086',
      description: 'RGB backlighting, mechanical switches, and more for pro gamers.',
    },
    {
      id: 3,
      name: 'Gaming Headsets',
      image: 'https://down-my.img.susercontent.com/file/63fc79ab9bf4c7806322de82110dfd00',
      description: 'Immersive sound and noise-canceling for a competitive edge.',
    },
    {
      id: 4,
      name: 'Gaming Chairs',
      image: 'https://robbreport.com/wp-content/uploads/2020/09/scorpion01.jpg?w=1000',
      description: 'Ergonomic gaming chairs for comfort during long sessions.',
    },
    {
      id: 5,
      name: 'Game Controllers',
      image: 'https://eu.aimcontrollers.com/wp-content/uploads/2024/05/1-12-1400x700.jpg',
      description: 'Responsive controllers for seamless gameplay.',
    },
  ];

  return (
    <div className="bg-black text-black min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-8">
          Explore Our Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white/10 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-400 mb-4">{category.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{category.description}</p>
                <a
                  href="#"
                  className="text-red-600 hover:text-red-700 font-semibold"
                >
                  View Products
                </a>
              </div>  
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pcategories;
