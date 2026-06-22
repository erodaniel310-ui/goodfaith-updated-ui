
import { motion } from "framer-motion";
import apartment from "../assets/apartment.jpg";
import oil from "../assets/oil.jpg";
import construct from "../assets/construct.jpg";
const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const BUSINESSES = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect x="8" y="16" width="24" height="18" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="8" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="15" y="22" width="4" height="6" rx="0.5" fill="currentColor"/>
        <rect x="21" y="22" width="4" height="6" rx="0.5" fill="currentColor"/>
      </svg>
    ),
    title: "Real Estate & Property Development",
    desc: "Residential, commercial, and mixed-use developments that redefine living and working spaces.",
    img: apartment,
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <path d="M20 6v28M14 12l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="20" cy="34" rx="8" ry="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 20c0 4 3 6 8 6s8-2 8-6" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Oil & Gas",
    desc: "Energy solutions through petroleum product trading, logistics, and reliable distribution networks.",
    img: oil,
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect x="6" y="28" width="28" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 28V16M20 28V12M28 28V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 16h8M16 12h8M22 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "General Construction",
    desc: "Engineering and construction services covering residential, industrial, and infrastructural projects.",
    img: construct,
  },
];



export default function Business() {
    return (

      <section id="our-businesses" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-amber-500 font-semibold tracking-[0.25em] uppercase text-xs mb-2">
              Our Businesses
            </motion.p>
            <motion.div variants={fadeUp} className="h-0.5 w-10 bg-amber-500 mx-auto mb-6" />
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-[#1a2744]">
              We operate across these major industries
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {BUSINESSES.map((biz, i) => (
              <motion.div
                key={biz.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6 }}
                className="bg-white rounded-sm shadow-md overflow-hidden group cursor-pointer"
              >
                <div className="p-6 flex items-start gap-4 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-[#1a2744] text-amber-400 flex items-center justify-center flex-shrink-0">
                    {biz.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a2744] text-base leading-tight mb-2">{biz.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{biz.desc}</p>
                  </div>
                </div>
                <div className="overflow-hidden h-44">
                  <img
                    src={biz.img}
                    alt={biz.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    )
}