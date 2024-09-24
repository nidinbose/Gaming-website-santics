
import React from 'react'

const Cards = () => {
  return (
    <div className='w-full bg-white/95 py-8 xl:p-20'
    style={{ backgroundImage: "url('/images/asd.mp4')" }}>
      <div className=''>
        <h1 className='text-center text-5xl font-bold mb-5 text-white '>HOT PRODUCTS</h1>
        <p className='text-center text-md font-semibold mt-7 mb-2 xl:mb-[15vh] text-red-500'>View All Motherboards</p>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>
          {/* Card 1 */}
          <div className=' bg-white/10 overflow-hidden p-10 '>
            <img 
              src="https://dlcdnwebimgs.asus.com/gain/671F4AAE-3667-4578-B3AD-04847C7C8F56/w300" 
              alt="Product 1" 
              className='w-full h-64 object-cover' 
            />
            <div className='p-4 text-center'>
              <p className='text-black text-2xl mb-5 mt-5 font-bold'>Dare to Be Green</p>
              <h2 className='text-sm mediem'>When only the fastest will do, ROG X870E/X870 motherboards DDR5 memory support, AMD EXPO™ technology and PCIe® 5.0 support for both graphics and NVMe, you can play the most demanding games and deliver your biggest projects with the revolutionary performance of an ROG X870E/X870 motherboard and AMD Ryzen™ 9000, 8000, and 7000 Series processors.</h2>
            </div>
          </div>
          {/* Card 2 */}
          <div className='border border-transparant bg-white overflow-hidden p-10'>
            <img 
              src="https://dlcdnwebimgs.asus.com/gain/671F4AAE-3667-4578-B3AD-04847C7C8F56/w300" 
              alt="Product 1" 
              className='w-full h-64 object-cover' 
            />
            <div className='p-4 text-center'>
              <p className='text-black text-2xl mb-5 mt-5 font-bold'>Dare to Be Green</p>
              <h2 className='text-sm mediem'>When only the fastest will do, ROG X870E/X870 motherboards DDR5 memory support, AMD EXPO™ technology and PCIe® 5.0 support for both graphics and NVMe, you can play the most demanding games and deliver your biggest projects with the revolutionary performance of an ROG X870E/X870 motherboard and AMD Ryzen™ 9000, 8000, and 7000 Series processors.</h2>
            </div>
          </div>
          {/* Card 3 */}
          <div className='border border-transparant bg-white overflow-hidden p-10'>
            <img 
              src="https://dlcdnwebimgs.asus.com/gain/671F4AAE-3667-4578-B3AD-04847C7C8F56/w300" 
              alt="Product 1" 
              className='w-full h-64 object-cover' 
            />
            <div className='p-4 text-center'>
              <p className='text-black text-2xl mb-5 mt-5 font-bold'>Dare to Be Green</p>
              <h2 className='text-sm mediem'>When only the fastest will do, ROG X870E/X870 motherboards DDR5 memory support, AMD EXPO™ technology and PCIe® 5.0 support for both graphics and NVMe, you can play the most demanding games and deliver your biggest projects with the revolutionary performance of an ROG X870E/X870 motherboard and AMD Ryzen™ 9000, 8000, and 7000 Series processors.</h2>
            </div>
          </div>
          {/* Card 4 */}
          <div className='border border-transparant bg-white overflow-hidden p-10'>
            <img 
              src="https://dlcdnwebimgs.asus.com/gain/671F4AAE-3667-4578-B3AD-04847C7C8F56/w300" 
              alt="Product 1" 
              className='w-full h-64 object-cover' 
            />
            <div className='p-4 text-center'>
              <p className='text-black text-2xl mb-5 mt-5 font-bold'>Dare to Be Green</p>
              <h2 className='text-sm mediem'>When only the fastest will do, ROG X870E/X870 motherboards DDR5 memory support, AMD EXPO™ technology and PCIe® 5.0 support for both graphics and NVMe, you can play the most demanding games and deliver your biggest projects with the revolutionary performance of an ROG X870E/X870 motherboard and AMD Ryzen™ 9000, 8000, and 7000 Series processors.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards