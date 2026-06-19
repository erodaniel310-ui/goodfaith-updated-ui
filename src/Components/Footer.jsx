import logo from "../assets/logo.png";

const NAV_LINKS = ["Home", "About Us", "Our Businesses", "Why Choose Us", "Contact Us"];

export default function Footer (){
    return (
          <footer className="bg-[#0B1F4D] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
             <img src={logo} alt="logo" className="w-7 h-7" /> 
                <div className="leading-tight">
                  <div className="text-xs font-bold tracking-widest uppercase text-white">Good-Faith</div>
                  <div className="text-[9px] tracking-widest uppercase text-gray-500">Multinational Oil & Gas Services Ltd</div>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Building today.<br />Powering tomorrow.<br />Transforming Africa.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-5">Quick Links</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link}>
                    <a
                      href={link === "Home" ? "#" : `#${link.toLowerCase().replace(/ /g, "-")}`}
                      onClick={(e) => {
                        if (link === "Home") {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className="text-gray-400 text-xs hover:text-amber-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-5">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400 text-xs">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  +234 000 000 0000
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-xs">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  info@goodfaithgroup.com
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-xs">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Lagos, Nigeria
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
              © 2024 Good-Faith Multinational Oil & Gas Services Ltd. All Rights Reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-9 h-9 border border-amber-500 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </footer>
    )
}