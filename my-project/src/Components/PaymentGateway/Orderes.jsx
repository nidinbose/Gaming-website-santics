import React, { useState } from 'react';

const Orderes = () => {
  // Example state for orders. You can fetch real data from your backend.
  const [orders, setOrders] = useState([
   
  ]);

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id}>
            <div className="flex justify-start items-start space-y-2 flex-col">
              <h1 className="text-3xl dark:text-red-600 lg:text-4xl font-semibold leading-7 lg:leading-9 text-red-600">
                Order #{order.id}
              </h1>
              <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
                {order.date} at <span className="text-red-600">{order.time}</span>
              </p>
            </div>

            <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
              <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                <div className="flex flex-col justify-start items-start dark:bg-white/10 bg-white/10 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                  <p className="text-2xl md:text-xl dark:text-red-600 font-semibold leading-6 xl:leading-5 text-red-600">
                    Customer’s Orders
                  </p>

                  {order.items.map((item, index) => (
                    <div key={index} className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                      <div className="pb-4 md:pb-8 w-full md:w-40">
                        <img className="w-full hidden md:block" src="" alt={item.name} />
                        <img className="w-full md:hidden" src="" alt={item.name} />
                      </div>
                      <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                          <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                            {item.name}
                          </h3>
                          <div className="flex justify-start items-start flex-col space-y-2">
                            <p className="text-sm dark:text-white leading-none text-gray-800">
                              <span className="dark:text-gray-400 text-gray-300">Style: </span>
                              {item.style}
                            </p>
                            <p className="text-sm dark:text-white leading-none text-gray-800">
                              <span className="dark:text-gray-400 text-gray-300">Size: </span>
                              {item.size}
                            </p>
                            <p className="text-sm dark:text-white leading-none text-gray-800">
                              <span className="dark:text-gray-400 text-gray-300">Color: </span>
                              {item.color}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between space-x-8 items-start w-full">
                          <p className="text-base dark:text-white xl:text-lg leading-6">
                            ${item.price.toFixed(2)}{' '}
                            <span className="text-red-300 line-through">${item.originalPrice.toFixed(2)}</span>
                          </p>
                          <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">{item.quantity}</p>
                          <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-between items-center w-full">
                    <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                    <p className="text-base dark:text-red-600 font-semibold leading-4 text-red-600">
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="container mx-auto px-4 py-8 text-center text-white xl:mb-20 xl:mt-20">
    {/* Illustration or icon */}
    <div className="flex justify-center mb-6">
      <img
      src={`https://www.shutterstock.com/shutterstock/videos/1059212528/thumb/9.jpg?ip=x480`}
        alt="Empty Cart"
        className="w-60 h-40"
      />
    </div>

    {/* Main empty cart message */}
    <h2 className="text-2xl font-semibold mb-4 text-red-600">No Orders at the Moment</h2>
    <p className="text-lg mb-6">
      Looks like you haven't ordered anything.
    </p>

   
    <button
      className="bg-white/30 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out"
      onClick={() => {
               window.location.href = "/";
      }}
    >
      Start Shopping
    </button>
  </div>
      )}
    </div>
  );
};

export default Orderes;
