import React from 'react';

const galleryItems = [
  {
    title: 'Image 1',
    url: 'https://via.placeholder.com/600x400', // Replace with your image URL
  },
  {
    title: 'Image 2',
    url: 'https://via.placeholder.com/600x400', // Replace with your image URL
  },
  {
    title: 'Image 3',
    url: 'https://via.placeholder.com/600x400', // Replace with your image URL
  },
  {
    title: 'Image 4',
    url: 'https://via.placeholder.com/600x400', // Replace with your image URL
  },
  {
    title: 'Image 5',
    url: 'https://via.placeholder.com/600x400', // Replace with your image URL
  },
];

const Download = () => {
  // Function to handle file download
  const handleDownload = (url, title) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title}.jpg`; // Set the default filename
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-900 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Download Gallery</h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg border border-gray-700 bg-gray-800"
            >
              {/* Image */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform transform group-hover:scale-105"
              />

              {/* Download Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleDownload(item.url, item.title)}
                  className="bg-emerald-500 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-400 transition"
                >
                  Download
                </button>
              </div>

              {/* Title */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Download;
