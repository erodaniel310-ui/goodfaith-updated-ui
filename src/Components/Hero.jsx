import { motion } from "framer-motion";
import React from 'react';
import image from "../assets/images.jpg"


export default function Hero() {
  return (
<section className="w-full overflow-hidden bg-[#0B1F4D] py-16 lg:py-24 rounded-b-3xl">

  <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0">

    {/* Left Content */}
    <div className="flex items-center">
      <div className="max-w-xl">

        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold"
        >
          <span className="text-white block">Building Today.</span>
          <span className="text-[#D4AF37] block">Powering Tomorrow.</span>
        </motion.h1>

        <p
          className="mt-8 text-gray-200 text-md leading-relaxed"
        >
          Good-Faith Multinational Oil & Gas Services Ltd is a proudly
          Nigerian-owned company delivering integrated solutions in oil &
          gas, real estate, and general construction for a stronger Africa.
        </p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 bg-[#D4AF37] hover:bg-[#c19a2b] text-white font-semibold px-7 py-3 rounded"
        >
          LEARN MORE
        </motion.button>

      </div>
    </div>

    {/* Right Images */}
    <div className="w-full lg:flex lg:justify-end lg:items-center lg:h-full">
      <div className="w-full h-96 sm:h-[28rem] lg:h-[26rem] lg:w-auto lg:flex-1">
        <img src={image} alt="img" className="w-full h-full object-cover rounded-xl shadow-lg" />
      </div>
    </div>

  </div>
</section>
    )
}