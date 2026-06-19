
import { motion } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const WHY_US = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
    title: "Multi-Sector Expertise",
    desc: "We don't just focus on one industry — we excel in three. From oil & gas to real estate and general construction, we offer integrated solutions that meet diverse needs.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Commitment To Quality",
    desc: "Every project is delivered with precision, safety, and world-class standards. We don't cut corners, we build budget-friendly legacies, as we believe quality doesn't have to be costly.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
      </svg>
    ),
    title: "Reliability You Can Count On",
    desc: "Our partners trust us because we deliver on time, every time. Whether it's a housing estate, an energy supply, or an infrastructure project, we keep our promises always.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
      </svg>
    ),
    title: "Customer Satisfaction",
    desc: "We listen, we adapt, and we deliver solutions tailored to your unique needs. Your satisfaction isn't just a goal; it's the measure of our success.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
      </svg>
    ),
    title: "Local Insight, Global Standards",
    desc: "Proudly Nigerian with a global outlook, we understand the local market while applying best international practices.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.92 7.02C17.45 4.18 14.97 2 12 2c-2.97 0-5.45 2.18-5.92 5.02C3.97 7.55 2 9.69 2 12c0 2.97 2.41 5.38 5.38 5.38h13.24C21.59 17.38 24 14.97 24 12c0-2.31-1.97-4.45-4.08-4.98zM19 12.5H5v-1h14v1z"/>
      </svg>
    ),
    title: "Sustainability and Impact",
    desc: "We believe business is not just about profit but about impact — creating jobs, building communities, and contributing to national growth.",
  },
];

const highlightAnimation = {
  animate: (i) => ({
    backgroundColor: [
      "rgba(217, 119, 6, 0)",
      "rgba(217, 119, 6, 0.2)",
      "rgba(217, 119, 6, 0)",
    ],
    transition: {
      delay: i * 0.4,
      duration: 2.4,
      repeat: Infinity,
    },
  }),
};


export default function WhyChooseUs() {
    return (
      <>
        <section id="why-choose-us" className="py-24 bg-[#0B1F4D]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-amber-400 font-semibold tracking-[0.25em] uppercase text-xs mb-2">
              Why Clients Choose Us
            </motion.p>
            <motion.div variants={fadeUp} className="h-0.5 w-10 bg-amber-400 mx-auto" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="flex gap-4 group"
              >
                <motion.div
                  custom={i}
                  animate="animate"
                  variants={highlightAnimation}
                  className="w-11 h-11 rounded-full border border-amber-400/40 flex items-center justify-center text-amber-400 flex-shrink-0 transition-colors"
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


    </>
    );
}