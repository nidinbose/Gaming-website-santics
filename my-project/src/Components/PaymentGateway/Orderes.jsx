import React from 'react'

const Orderes = () => {
  return (
    <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
  <div class="flex justify-start item-start space-y-2 flex-col">
    <h1 class="text-3xl dark:text-red-600 lg:text-4xl font-semibold leading-7 lg:leading-9 text-red-600">Order #13432</h1>
    <p class="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">21st March 2021 at <span className='text-red-600'> 10</span>:34 PM</p>
  </div>
  <div class="mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
      <div class="flex flex-col justify-start items-start dark:white/10 bg-white/10 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p class="text-2xl md:text-xl dark:text-red-600 font-semibold leading-6 xl:leading-5 text-red-600">Customer’s Orders</p>
        
       
        <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
          <div class="pb-4 md:pb-8 w-full md:w-40">
            <img class="w-full hidden md:block" src="" alt="" />
            <img class="w-full md:hidden" src="" alt="" />
          </div>
          <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div class="w-full flex flex-col justify-start items-start space-y-8">
              <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">Premium Quality</h3>
              <div class="flex justify-start items-start flex-col space-y-2">
                <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Style: </span> Italic Minimal Design</p>
                <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Size: </span> Small</p>
                <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Color: </span> Light Blue</p>
              </div>
            </div>
            <div class="flex justify-between space-x-8 items-start w-full">
              <p class="text-base dark:text-white xl:text-lg leading-6">$36.00 <span class="text-red-300 line-through"> $45.00</span></p>
              <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
              <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
            </div>
          </div>
        </div>
        
       
        <div class="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
          <div class="w-full md:w-40">
            <img class="w-full hidden md:block" src="" alt="" />
            <img class="w-full md:hidden" src="" alt="" />
          </div>
          <div class="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
            <div class="w-full flex flex-col justify-start items-start space-y-8">
              <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">High Quality </h3>
              <div class="flex justify-start items-start flex-col space-y-2">
                <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Style: </span> Italic Minimal Design</p>
                <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Size: </span> Small</p>
                <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Color: </span> Light Blue</p>
              </div>
            </div>
            <div class="flex justify-between space-x-8 items-start w-full">
              <p class="text-base dark:text-white xl:text-lg leading-6">$20.00 <span class="text-red-300 line-through"> $30.00</span></p>
              <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
              <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">$20.00</p>
            </div>
          </div>
        </div>
      </div>

   
      <div class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-white/10 dark:bg-white/10 space-y-6">
          <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
          <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div class="flex justify-between w-full">
              <p class="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600">$56.00</p>
            </div>
            <div class="flex justify-between items-center w-full">
              <p class="text-base dark:text-white leading-4 text-gray-800">Discount <span class="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">STUDENT</span></p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600">-$28.00 (50%)</p>
            </div>
            <div class="flex justify-between items-center w-full">
              <p class="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600">$8.00</p>
            </div>
          </div>
          <div class="flex justify-between items-center w-full">
            <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
            <p class="text-base dark:text-red-600 font-semibold leading-4 text-red-600">$36.00</p>
          </div>
        </div>
        
        <div class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-white/10 dark:bg-white/10 space-y-6">
          <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Shipping</h3>
          <div class="flex justify-between items-start w-full">
            <div class="flex justify-center items-center space-x-4">
              <div class="w-8 h-8">
                <img class="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
              </div>
              <div class="flex flex-col justify-start items-center">
                <p class="text-lg leading-6 dark:text-white font-semibold text-gray-800">DPD Delivery<br /><span class="font-normal">Delivery within 24 Hours</span></p>
              </div>
            </div>
            <p class="text-lg font-semibold leading-6 dark:text-white text-gray-800">$8.00</p>
          </div>
          <div class="w-full flex justify-center items-center">
            <button class="hover:bg-black dark:bg-red-600 dark:text-gray-300 dark:hover:bg-red-600 transition ease-in duration-200 bg-red-600 text-white rounded-md w-full py-2">Change Address</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Orderes