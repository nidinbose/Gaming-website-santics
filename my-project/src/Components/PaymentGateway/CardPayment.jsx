import React from 'react'

const CardPayment = () => {
  return (
    <div>

<section className="h-full bg-gray-100">
      <div className="container mx-auto py-5">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-8">
                <div className="lg:flex">
                  {/* Left side (Product List) */}
                  <div className="lg:w-7/12 px-5 py-4">
                    <h3 className="text-3xl text-center font-bold uppercase mb-5">
                      Your Products
                    </h3>
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex items-center mb-5">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-36"
                        />
                        <div className="flex-grow ml-4">
                          <button
                            className="float-right text-black"
                            onClick={() => handleRemoveItem(index)}
                          >
                            &times;
                          </button>
                          <h5 className="text-primary text-xl">{item.name}</h5>
                          <p className="text-gray-600">Color: {item.color}</p>
                          <div className="flex items-center mt-2">
                            <p className="font-bold mr-5">${item.price}</p>
                            <div className="flex items-center border rounded-lg">
                              <button
                                className="px-2"
                                onClick={() => handleQuantityChange(index, -1)}
                              >
                                -
                              </button>
                              <input
                                type="number"
                                className="w-12 text-center outline-none"
                                min="1"
                                value={item.quantity}
                                readOnly
                              />
                              <button
                                className="px-2"
                                onClick={() => handleQuantityChange(index, 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <hr className="border-t-2 border-blue-500 my-4" />

                    <div className="flex justify-between">
                      <p className="font-bold">Discount:</p>
                      <p className="font-bold">$95</p>
                    </div>
                    <div className="flex justify-between p-2 mt-2 bg-blue-100">
                      <h5 className="font-bold">Total:</h5>
                      <h5 className="font-bold">${totalPrice}</h5>
                    </div>
                  </div>

                  {/* Right side (Payment) */}
                  <div className="lg:w-5/12 px-5 py-4">
                    <h3 className="text-3xl text-center font-bold uppercase mb-5">
                      Payment
                    </h3>
                    <form className="mb-5">
                      <div className="mb-5">
                        <label className="block mb-2">Card Number</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border rounded-lg"
                          defaultValue="1234 5678 9012 3457"
                        />
                      </div>

                      <div className="mb-5">
                        <label className="block mb-2">Name on Card</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border rounded-lg"
                          defaultValue="John Smith"
                        />
                      </div>

                      <div className="flex gap-5">
                        <div className="w-1/2">
                          <label className="block mb-2">Expiration</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg"
                            defaultValue="01/22"
                            placeholder="MM/YYYY"
                          />
                        </div>
                        <div className="w-1/2">
                          <label className="block mb-2">CVV</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg"
                            placeholder="&#9679;&#9679;&#9679;"
                            defaultValue="&#9679;&#9679;&#9679;"
                          />
                        </div>
                      </div>

                      <button
                        className="w-full py-2 mt-5 bg-blue-500 text-white font-bold rounded-lg"
                        onClick={handleCheckout}
                        type="button"
                      >
                        Buy now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default CardPayment