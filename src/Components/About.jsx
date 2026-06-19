import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export default function About () {
    return (
       <section id="about-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-amber-500 font-semibold tracking-[0.25em] uppercase text-xs mb-2">
              About Us
            </motion.p>
            <motion.div variants={fadeUp} className="h-0.5 w-10 bg-amber-500 mx-auto mb-6" />
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-[#1a2744]">
              Driven by Innovation. Built on Integrity.
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-5 text-gray-600 text-sm leading-relaxed"
            >
              <motion.p variants={fadeUp}>
                Founded on June 6th, 2023, Good-Faith Multinational Oil & Gas Services Ltd is a proudly Nigerian-owned
                enterprise with a bold vision to transform key sectors that drive economic growth and development.
              </motion.p>
              <motion.p variants={fadeUp}>
                We are committed to innovation, leveraging modern technologies and best practices to deliver efficient,
                sustainable, and cost-effective solutions across oil & gas, real estate, and general construction.
              </motion.p>
              <motion.p variants={fadeUp}>
                Integrity is at the heart of everything we do. Through transparent practices and ethical standards,
                we've built lasting relationships and a strong reputation in Nigeria and beyond.
              </motion.p>
              <motion.p variants={fadeUp}>
                With a team of skilled professionals and a drive for excellence, we are reshaping Africa's
                infrastructure and energy landscape for a better tomorrow.
              </motion.p>
              <motion.a
                variants={fadeUp}
                href="#our-businesses"
                className="inline-block mt-4 bg-[#1a2744] hover:bg-[#243560] text-white font-bold px-7 py-3 text-xs tracking-widest uppercase transition-colors"
              >
                Learn More About Us
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="overflow-hidden rounded-sm shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80"
                alt="Modern city skyline representing development"
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>   
    )
}