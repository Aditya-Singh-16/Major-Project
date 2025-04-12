import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';


// Use your image path
const bannerImage = new URL('../assets/tori.jpg', import.meta.url).href;

function Banner() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-10"
      >
      <div>  
        {/* Left Side */}
        <div className="w-full md:w-1/2 space-y-6 md:space-y-10 mt-6 md:mt-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight">
            Hello, welcome here to learn something{' '}
            <span className="text-teal-500">new everyday!!!</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Welcome to <span className="font-semibold text-blue-600">Book Haven</span>, your one-stop destination for a world of stories, 
            knowledge, and imagination. Discover a vast collection of books across all genres, from timeless 
            classics to the latest bestsellers. Whether you're a fiction lover, a self-help enthusiast, or a 
            student seeking academic resources, we have something for everyone. Start your reading journey today! 📚✨
          </p>
        </div>
`       <label className="input input-bordered flex items-center gap-2">
        <Mail className="w-5 h-5 test-gray-500"/>
        <input type="text" className="grow" placeholder="Enter your email to login" />
      ` </label>
        <button className="btn m-3 btn-secondary">Secondary</button>
        </div>
        
        {/* Right Side */}
        <div className="w-full md:w-10/12 flex justify-center items-center">
          <motion.img
            src={bannerImage}
            alt="Book Banner"
            className="w-80 h-92 max-w-sm rounded-2xl shadow-xl object-cover border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Banner;
