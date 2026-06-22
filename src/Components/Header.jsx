import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import logo from "../assets/logo.png";

export default function Header() {
    const NAV_LINKS = ["Home", "About Us", "Our Businesses", "Why Choose Us", "Contact Us"];
    const SECTION_MAP = {
      "about-us": "About Us",
      "our-businesses": "Our Businesses",
      "why-choose-us": "Why Choose Us",
      "newsletter": "Contact Us",
    };
    const [activeLink, setActiveLink] = useState("Home");

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 40));
    return unsub;
  }, [scrollY]);

  useEffect(() => {
    const updateActiveLink = () => {
      const offset = window.innerHeight * 0.3;
      const scrollPosition = window.scrollY + offset;
      let current = "Home";

      Object.keys(SECTION_MAP).forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          current = SECTION_MAP[id];
        }
      });

      setActiveLink(current);
    };

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink);
    window.addEventListener("resize", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }, []);

  const getLinkHref = (link) => {
    if (link === "Home") return "#";
    if (link === "Contact Us") return "#newsletter";
    return `#${link.toLowerCase().replace(/ /g, "-")}`;
  };

    return (
              <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
           <img src={logo} alt="logo" className="w-7 h-7" /> 
            <div className="leading-tight">
              <div className={`text-xs font-bold tracking-widest uppercase ${scrolled ? "text-[#1a2744]" : "text-white"}`}>
                Good-Faith
              </div>
              <div className={`text-[9px] tracking-widest uppercase ${scrolled ? "text-gray-500" : "text-gray-300"}`}>
                Multinational Oil & Gas Services Ltd
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={getLinkHref(link)}
                onClick={() => setActiveLink(link)}
                className={`text-md font-medium tracking-wide transition-colors hover:text-amber-500 ${
                  scrolled ? "text-gray-700" : "text-white"
                } ${activeLink === link ? "border-b-2 border-amber-500 pb-0.5" : ""}`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden ${scrolled ? "text-gray-900" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
          <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#1a2744] overflow-hidden"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={getLinkHref(link)}
                  onClick={() => {
                    setActiveLink(link);
                    setMenuOpen(false);
                  }}
                  className={`block px-6 py-3 text-sm border-b border-white/10 transition-colors ${
                    activeLink === link ? "bg-amber-500/20 text-white" : "text-white hover:bg-amber-500/20"
                  }`}
                >
                  {link}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    )
}