import React from "react";
import { motion } from "framer-motion";
// import './CSS/Community.css';

const Community = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/images/community-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-center font-mono"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to <span className="text-red-600"> Santics Gaming</span> Community
          </motion.h1>
        </div>
      </div>

   
      <div className="container mx-auto px-4 py-8">
       
        <section className="mb-12">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4 font-mono text-red-600"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Trending Discussions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
            {["Tips to Improve Your KD Ratio", "Upcoming Game Releases", "Favorite Gaming Accessories"].map((title, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white/10 rounded-lg hover:bg-gray-700 transition"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 + index * 0.2 }}
              >
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Join the conversation and share your thoughts with fellow gamers.
                </p>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4 font-mono text-red-600"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Member Highlights
          </motion.h2>
          <div className="flex space-x-4 overflow-x-auto">
            {["PlayerOne", "GameMaster", "ShadowHunter"].map((name, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-64 p-4 bg-white/10 rounded-lg hover:bg-gray-700 transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 + index * 0.2 }}
              >
                <div className="w-full h-32 bg-gray-700 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold font-mono">{name}</h3>
                <p className="text-sm text-red-600 font-mono">Top scorer in the last tournament!</p>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4 font-mono text-red-600"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Upcoming Events
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Battle Royale Showdown", date: "June 30, 2024" },
              { name: "LAN Party Extravaganza", date: "July 14, 2024" },
              { name: "Game Development Workshop", date: "August 10, 2024" },
            ].map((event, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white/10 rounded-lg hover:bg-gray-700 transition font-mono"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 + index * 0.2 }}
              >
                <h3 className="text-xl font-semibold">{event.name}</h3>
                <p className="text-sm text-gray-400 mt-2">{event.date}</p>
              </motion.div>
            ))}
          </div>
        </section>

               <section className="text-center py-8 bg-white/10 rounded-lg font-mono">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Join the Santics Gaming Community Today!
          </motion.h2>
          <p className="text-gray-400 mb-4">
            Connect with gamers around the world and share your passion for gaming.
          </p>
          <button className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
            Sign Up Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default Community;
