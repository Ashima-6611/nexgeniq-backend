import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-[#0B0F2A]">
      {/* Futuristic AI Classroom Background */}
      <div
        className="absolute inset-0 z-0 bg-[length:150%_auto] bg-[position:center_top] md:bg-cover md:bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}hero_classroom.jpg')` }}
      ></div>

      {/* Depth Overlays (Clearer Mask) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F2A] via-[#0B0F2A]/80 md:via-[#0B0F2A]/50 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B0F2A] md:hidden z-0 mt-[40vh]"></div>
      <div className="absolute inset-0 bg-[#0B0F2A]/30 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center flex-grow justify-center">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center space-x-2 px-5 py-2 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/5 mb-6 shadow-[0_0_15px_rgba(0,229,255,0.1)] backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-[#00E5FF]" />
          <span className="text-[#00E5FF] text-sm font-medium tracking-wide">Build Skills. Create Intelligence. Lead the Future</span>
        </motion.div>

        {/* Main Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-4 text-white leading-tight">
            Welcome to <span className="text-[#00E5FF] drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]">NexGeniq</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white/80 font-light mb-6">
            Built for the next generation of <span className="text-[#FF6A00] font-semibold drop-shadow-[0_0_15px_rgba(255,106,0,0.5)]">AI thinkers</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/60 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Master Python, Data Science, and AI Automation with industry-expert instructors. <br className="hidden md:block" />
            Transform your career with hands-on projects and real-world applications.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 w-full"
        >
          <a href={`${import.meta.env.BASE_URL}#contact`} className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#00D4AA] text-[#0B0F2A] font-bold text-lg hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all duration-300 transform hover:-translate-y-1">
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </a>

          <a href={`${import.meta.env.BASE_URL}#courses`} className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-transparent border border-[#00E5FF]/40 text-[#00E5FF] font-medium text-lg hover:bg-[#00E5FF]/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]">
            <span>Explore Courses</span>
          </a>
        </motion.div>

        {/* Stats Grid at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-auto"
        >
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center py-10 px-6 rounded-2xl bg-[#091136]/50 border border-white/5 backdrop-blur-md shadow-2xl hover:border-[#00E5FF]/30 transition-colors duration-300">
            <div className="text-4xl sm:text-5xl font-bold text-[#00E5FF] mb-3">45+</div>
            <div className="text-white/60 text-sm tracking-wide font-medium">Days Training</div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center py-10 px-6 rounded-2xl bg-[#091136]/50 border border-white/5 backdrop-blur-md shadow-2xl hover:border-[#FF6A00]/30 transition-colors duration-300">
            <div className="text-4xl sm:text-5xl font-bold text-[#FF6A00] mb-3">3</div>
            <div className="text-white/60 text-sm tracking-wide font-medium">Advanced Courses</div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center py-10 px-6 rounded-2xl bg-[#091136]/50 border border-white/5 backdrop-blur-md shadow-2xl hover:border-[#00E5FF]/30 transition-colors duration-300">
            <div className="text-4xl sm:text-5xl font-bold text-[#00D4AA] mb-3">100+</div>
            <div className="text-white/60 text-sm tracking-wide font-medium">Students Trained</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
