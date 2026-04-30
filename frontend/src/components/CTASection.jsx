import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  AlertCircle,
} from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Asker Ahmed",
      role: "AI Engineer",
      content:
        "NexGeniq completely transformed my thinking about Python.Mentor ship was incredible. The AI focus is incredible.",
    },
    {
      name: "Priya S.",
      role: "Data Scientist",
      content:
        "The best hands-on training I've ever experienced. Real-world projects and conduct hackathons were the key.",
    },
    {
      name: "Bala Murugan",
      role: "Graduate",
      content:
        "The 45-day AI Bootcamp is intense but highly rewarding. A must-attend for tech enthusiasts.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-brand-dark">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-black text-center mb-20 tracking-tighter">
          Alumni{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">
            Success
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-card flex flex-col justify-between group"
            >
              <p className="text-lg text-white/80 italic mb-8 leading-relaxed">
                "{rev.content}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-purple to-brand-cyan p-[2px]">
                  <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center text-xl font-bold text-white/50 group-hover:text-white transition-colors">
                    {rev.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {rev.name}
                  </div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
                    {rev.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { sendContact } from "../services/contactService.ts";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      await sendContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        programPathway: formData.course,
      });
      setSuccess("Enrollment successful! We'll contact you soon.");
      setFormData({ name: "", phone: "", email: "", course: "" });
    } catch (err) {
      setError("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-10 lg:py-16 relative overflow-hidden bg-brand-dark"
    >
      {/* Background Deep Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[200px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-2 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card !p-0 border border-white/10 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]"
        >
          {/* Left: Info Column */}
          <div className="lg:w-2/5 p-8 lg:p-10 bg-white/5 backdrop-blur-3xl overflow-hidden relative flex flex-col justify-between">
            {/* Decorative Ambient Sphere */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black mb-4 tracking-tighter leading-tight">
                Secure Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                  Future
                </span>{" "}
                Today.
              </h2>
              <p className="text-white/60 mb-8 text-base lg:text-lg font-medium leading-relaxed">
                Join the next era of AI intelligence. Next batch mapping is
                currently underway.
              </p>

              <div className="space-y-6 mb-8">
                <a
                  href="tel:+919894868963"
                  className="flex items-center space-x-6 group cursor-pointer no-underline"
                >
                  <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-brand-cyan shadow-[0_0_15px_rgba(100,200,255,0.1)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(100,200,255,0.3)] transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div className="text-base font-bold text-white/90 group-hover:text-white transition-colors">
                    +91 98948 68963
                  </div>
                </a>
                <a
                  href="mailto:nexovadigital.growth@gmail.com"
                  className="flex items-center space-x-2  group cursor-pointer w-full no-underline"
                >
                  <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-brand-cyan shadow-[0_0_15px_rgba(100,200,255,0.1)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(100,200,255,0.3)] transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div className="text-base font-bold text-white/90 group-hover:text-white transition-colors">
                    nexovadigital.growth@gmail.com
                  </div>
                </a>
                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-brand-blue shadow-[0_0_15px_rgba(58,134,255,0.1)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(58,134,255,0.3)] transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div className="text-base font-bold text-white/90 group-hover:text-white transition-colors">
                    Tenkasi, Tamil Nadu
                  </div>
                </div>
              </div>
            </div>
                  <a target="_blank" rel="noopener noreferrer" href="https://wa.me/919894868963" className="relative group w-full flex items-center justify-center space-x-3 py-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold text-lg hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.1)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] overflow-hidden z-10 mt-6">
                     <div className="absolute inset-0 bg-[#25D366] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 -z-10"></div>
                     <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="relative z-10">
                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                     </svg>
                     <span className="relative z-10 tracking-wide">Message on WhatsApp</span>
                  </a>
          </div>

          {/* Right: Premium Form Column */}
          <div className="lg:w-3/5 p-8 lg:p-10 bg-[#0a0a2e]/60 backdrop-blur-md relative">
            {/* High Urgency Indicator */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
              <AlertCircle size={14} className="animate-pulse" />
              <span>Limited Seats Per Batch — Enrolling Now</span>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:bg-brand-cyan/5 focus:border-brand-cyan outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(100,200,255,0.15)] font-medium"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:bg-brand-purple/5 focus:border-brand-purple outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(155,93,229,0.15)] font-medium"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:bg-brand-blue/5 focus:border-brand-blue outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(58,134,255,0.15)] font-medium"
                  required
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
                  Select Program Pathway
                </label>
                <div className="relative">
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white focus:bg-brand-cyan/5 focus:border-brand-cyan outline-none transition-all duration-300 appearance-none font-medium cursor-pointer focus:shadow-[0_0_20px_rgba(100,200,255,0.15)]"
                    required
                  >
                    <option value="" className="text-brand-dark">
                      Choose your intensive track...
                    </option>
                    <option value="python" className="text-brand-dark">
                      Advanced Python (45 Days)
                    </option>
                    <option value="ai-ml" className="text-brand-dark">
                      AI & Machine Learning (2 Months)
                    </option>
                    <option value="gen-ai" className="text-brand-dark">
                      Generative & Agentic AI (3 Months)
                    </option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-white/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="relative group w-full overflow-hidden rounded-xl p-[1px] mt-6 disabled:opacity-60"
                disabled={loading}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-blue opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-[pulse_2s_linear_infinite]"></span>
                <div className="relative flex items-center justify-center space-x-3 bg-brand-dark/90 backdrop-blur-md px-8 py-3 rounded-xl transition-all duration-300 group-hover:bg-transparent">
                  <Send
                    size={20}
                    className="text-brand-cyan group-hover:text-white transition-colors"
                  />
                  <span className="text-xl font-bold tracking-wide text-white">
                    {loading ? "Submitting..." : "SUBMIT"}
                  </span>
                </div>
              </motion.button>

              {success && (
                <div className="text-green-400 font-bold text-center mt-4">
                  {success}
                </div>
              )}
              {error && (
                <div className="text-red-400 font-bold text-center mt-4">
                  {error}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { Testimonials, CTASection };
