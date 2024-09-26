import React from 'react';

const About = () => {
  return (
    <div className="font-sans max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
        <div className="max-md:order-1 max-md:text-center z-50 relative">
          <h2 className="text-gray-800 lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px]">
            <span className="text-blue-600">Smart</span> Business with <span className="text-blue-600">Smart</span> People
          </h2>
          <p className="text-gray-600 mt-6 text-base leading-relaxed">
            Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.
          </p>

          <button
            type="button"
            className="mt-6 bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5"
            onClick={() => alert('Get Started Clicked')}
          >
            Get Started
          </button>

          <div className="mt-12">
            <div className="grid sm:grid-cols-3 gap-4 items-center">
              <div className="flex flex-col items-center text-center">
                <h5 className="text-gray-800 font-bold text-xl mb-2">10+</h5>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h5 className="text-gray-800 font-bold text-xl mb-2">890</h5>
                <p className="text-gray-600">Cases Solved</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h5 className="text-gray-800 font-bold text-xl mb-2">250</h5>
                <p className="text-gray-600">Business Partners</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:h-[550px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-[#DEE2E5] before:h-[120%] before:w-[120%] before:right-0 before:z-0">
          <img
            src={`/images/Santics.png`}
            className="rounded-md lg:w-4/5 z-50 relative object-cover h-full"
            alt="Dining Experience"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 z-50 relative md:px-4 max-md:mt-12 mb-12">
        {[
          { title: 'Customization', description: 'Tailor our product to suit your needs.' },
          { title: 'Support', description: '24/7 support to assist you.' },
          { title: 'Innovation', description: 'Bringing the latest technology.' },
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 shadow rounded-md transition-transform transform hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-11 h-11 mb-4 inline-block bg-blue-100 p-3 rounded-md"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              {/* SVG Path here */}
            </svg>
            <h3 className="text-gray-800 text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <a href="#" className="text-blue-600 font-bold inline-block text-sm hover:underline mt-4">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
