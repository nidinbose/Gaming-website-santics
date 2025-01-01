import React from 'react';

const Sales = () => {
   const products = [
    {
      id: 1,
      name: 'Gaming Mouse',
      price: 2499,
      quantitySold: 120,
    },
    {
      id: 2,
      name: 'Gaming Headset',
      price: 2999,
      quantitySold: 80,
    },
    {
      id: 3,
      name: 'Mechanical Gaming Keyboard',
      price: 3999,
      quantitySold: 50,
    },
    {
      id: 4,
      name: 'Ergonomic Gaming Chair',
      price: 7999,
      quantitySold: 40,
    },
  ];

   const totalRevenue = products.reduce(
    (total, product) => total + product.price * product.quantitySold,
    0
  );

  return (
    <div className="bg-black text-black min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-8">
          Sales Report - Santics Gaming
        </h1>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-white/10">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Product</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Price (₹)</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Quantity Sold</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Total Sales (₹)</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-t hover:bg-gray-100">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{product.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{product.price}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{product.quantitySold}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    ₹{product.price * product.quantitySold}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-400">Total Revenue:</div>
          <div className="text-2xl font-bold text-red-600">₹{totalRevenue}</div>
        </div>
        <div className="text-center mt-10">
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-red-700">
            Generate PDF Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sales;
