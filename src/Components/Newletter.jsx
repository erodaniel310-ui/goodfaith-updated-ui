import { useState } from "react";
import { Mail, Phone, Send, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import bgVideo from "../assets/image.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const GOLD = "#D4AF37";
const GOLD_DARK = "#B8941F";
const NAVY = "#0B1F4D";
const NAVY_LIGHT = "#102660";

export default function ContactSection({ id }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [focused, setFocused] = useState(null);
  const [office, setOffice] = useState("abuja");

  const officeInfo = {
    abuja: [
      {
        icon: <Mail size={18} />,
        label: "Email us",
        value: "Abuja@goodfaith.com.ng",
        delay: 4,
      },
      {
        icon: <Phone size={18} />,
        label: "Call us",
        value: "+234 7071738110",
        delay: 5,
      },
      {
        icon: <MapPin size={18} />,
        label: "Headquarters",
        value: "No 5A Mohammad Abu Ali Crescant Jahi, Abuja, Nigeria",
        delay: 6,
      },
    ],
    lagos: [
      {
        icon: <Mail size={18} />,
        label: "Email us",
        value: "Lagos@goodfaith.com.ng",
        delay: 4,
      },
      {
        icon: <Phone size={18} />,
        label: "Call us",
        value: "+234 8101234567",
        delay: 5,
      },
      {
        icon: <MapPin size={18} />,
        label: "Office",
        value: "No 12 Victoria Island, Lagos, Nigeria",
        delay: 6,
      },
    ],
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const inputBase = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(212,175,55,0.2)",
    borderRadius: "10px",
    padding: "11px 14px",
    fontSize: "14px",
    color: "#fff",
    outline: "none",
    transition: "border-color 0.25s, box-shadow 0.25s, background 0.25s",
    fontFamily: "inherit",
  };

  const inputFocused = {
    borderColor: GOLD,
    boxShadow: `0 0 0 3px rgba(212,175,55,0.18)`,
    background: "rgba(212,175,55,0.04)",
  };

  const getInputStyle = (field) =>
    focused === field ? { ...inputBase, ...inputFocused } : inputBase;

  const labelStyle = {
    display: "block",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.09em",
    textTransform: "uppercase",
    color: "rgba(212,175,55,0.8)",
    marginBottom: "6px",
  };

  return (
    <section id={id || "contact-us"}
      style={{
        background: `linear-gradient(135deg, ${NAVY} 0%, #0d2660 55%, #091840 100%)`,
        position: "relative",
        overflow: "hidden",
        padding: "96px 24px",
      }}
    >
<video
  src={bgVideo}
  autoPlay
  muted
  loop
  playsInline
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.28,
    zIndex: 0,
    pointerEvents: "none",
  }}
/>

<div
  aria-hidden="true"
  style={{
    position: "absolute",
    inset: 0,
    background: "rgba(11,31,77,0.72)",
    zIndex: 1,
    pointerEvents: "none",
  }}
/>
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "64px",
          }}
        >
        
       
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "64px",
              alignItems: "start",
            }}
          >
          {/* ── Left panel ── */}
          <div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                fontSize: "clamp(28px, 4vw, 46px)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
              }}
            >
              Let's Build Something{" "}
              <span style={{ color: GOLD }}>Exceptional</span> Together
            </motion.h2>

            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                width: "48px",
                height: "3px",
                background: `linear-gradient(90deg, ${GOLD}, ${GOLD_DARK})`,
                borderRadius: "2px",
                marginBottom: "24px",
              }}
            />

            <motion.p
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "15px",
                lineHeight: 1.75,
                marginBottom: "32px",
                maxWidth: "420px",
              }}
            >
              Whether you require oil &amp; gas support, construction services,
              precision engineering, or real estate development — our team of
              seasoned professionals is ready to deliver results at scale.
            </motion.p>

            <div style={{ display: "flex", gap: "12px", marginBottom: "30px" }}>
              {[
                { key: "abuja", label: "Abuja Office" },
                { key: "lagos", label: "Lagos Office" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setOffice(key)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "999px",
                    border: office === key ? `1px solid ${GOLD}` : "1px solid rgba(255,255,255,0.18)",
                    background: office === key ? "rgba(212,175,55,0.12)" : "transparent",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: 600,
                    transition: "all 0.2s ease",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Contact cards */}
            {officeInfo[office].map(({ icon, label, value, delay }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                custom={delay}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 20px",
                  marginBottom: "12px",
                  borderRadius: "12px",
                  border: "1px solid rgba(212,175,55,0.12)",
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(8px)",
                  cursor: "default",
                  transition: "background 0.2s",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    background: "rgba(212,175,55,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: GOLD,
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(212,175,55,0.6)",
                      margin: 0,
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.85)",
                      margin: "2px 0 0",
                      fontWeight: 500,
                    }}
                  >
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Right: Form card ── */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(212,175,55,0.15)",
              borderRadius: "20px",
              padding: "40px 36px",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(212,175,55,0.12)",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "4px",
              }}
            >
              Start a Conversation
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "28px",
              }}
            >
              We respond within one business day.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gap: "18px" }}>

                {/* Name + Email row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "14px",
                  }}
                >
                  <div>
                    <label htmlFor="cf-name" style={labelStyle}>Full Name</label>
                    <input
                      id="cf-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      style={getInputStyle("name")}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-email" style={labelStyle}>Email</label>
                    <input
                      id="cf-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      style={getInputStyle("email")}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone + Service row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "14px",
                  }}
                >
                  <div>
                    <label htmlFor="cf-phone" style={labelStyle}>Phone</label>
                    <input
                      id="cf-phone"
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      style={getInputStyle("phone")}
                      placeholder="+234..."
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-service" style={labelStyle}>Service</label>
                    <select
                      id="cf-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      onFocus={() => setFocused("service")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...getInputStyle("service"),
                        cursor: "pointer",
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23D4AF37' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        paddingRight: "36px",
                      }}
                    >
                      <option value="" style={{ background: NAVY }}>Select…</option>
                      <option style={{ background: NAVY }}>Oil &amp; Gas Services</option>
                      <option style={{ background: NAVY }}>Real Estate Development</option>
                      <option style={{ background: NAVY }}>Construction</option>
                      <option style={{ background: NAVY }}>Engineering Consultancy</option>
                      <option style={{ background: NAVY }}>General Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="cf-message" style={labelStyle}>Message</label>
                  <textarea
                    id="cf-message"
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...getInputStyle("message"),
                      resize: "vertical",
                      minHeight: "100px",
                    }}
                    placeholder="Describe your project or inquiry…"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: "100%",
                    padding: "14px 24px",
                    borderRadius: "10px",
                    border: "none",
                    background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)`,
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    boxShadow: `0 8px 24px rgba(212,175,55,0.3)`,
                    transition: "box-shadow 0.2s",
                    fontFamily: "inherit",
                  }}
                >
                  Send Message
                  <Send size={14} />
                </motion.button>

                <p
                  style={{
                    textAlign: "center",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.25)",
                    marginTop: "4px",
                  }}
                >
                  Your information is kept strictly confidential.
                </p>
              </div>
            </form>
          </motion.div>
          </div>
        </div>
    </section>
  );
}