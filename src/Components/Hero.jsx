import { motion } from "framer-motion";
import Heroimg from "../assets/heroimg.mp4"


export default function Hero() {
  const leftContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.18,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  return (
<section className="w-full overflow-hidden bg-[#0B1F4D] py-26 lg:py-24 rounded-b-3xl">

  <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0">

    {/* Left Content */}
    <div className="flex items-center">
      <motion.div
        variants={leftContentVariants}
        initial="hidden"
        animate="visible"
        className="max-w-xl"
      >

        <motion.h1
          variants={fadeUpVariants}
          className="text-3xl md:text-5xl font-bold"
        >
          <span className="text-white block">Building Today.</span>
          <span className="text-[#D4AF37] block">Powering Tomorrow.</span>
        </motion.h1>

        <motion.p
          variants={fadeUpVariants}
          className="mt-8 text-gray-200 text-md leading-relaxed"
        >
          Good-Faith Multinational Oil & Gas Services Ltd is a proudly
          Nigerian-owned company delivering integrated solutions in oil &
          gas, real estate, and general construction for a stronger Africa.
        </motion.p>

        <motion.button
          variants={fadeUpVariants}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 bg-[#D4AF37] hover:bg-[#c19a2b] text-white font-semibold px-7 py-3 rounded"
          onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contact Us
        </motion.button>

      </motion.div>
    </div>

    {/* Right Images */}
    <div className="w-full lg:flex lg:justify-end lg:items-center lg:h-full">
      <div className="w-full h-96 sm:h-[28rem] lg:h-[26rem] lg:w-auto lg:flex-1">
        <video
          src={Heroimg}
          className="w-full h-full object-cover rounded-xl shadow-lg"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>

  </div>
</section>
    )
}
