import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Award, Cpu, Target, Briefcase, Code, Database, Terminal, Bot, Network } from 'lucide-react';

const WhySection = () => {
  const benefits = [
    {
      title: 'Learn from Experts. Build Like a Pro',
      desc: 'Get guided by industry professionals and work on real problems — not just theory.',
      icon: Users,
      color: 'text-fuchsia-400',
      borderGlow: 'border-fuchsia-400/80',
      shadowGlow: 'shadow-[0_0_15px_rgba(232,121,249,0.4)]'
    },
    {
      title: 'Practice First. Theory Next',
      desc: 'Real skills come from doing — and that’s exactly what we train you for.',
      icon: Target,
      color: 'text-pink-500',
      borderGlow: 'border-pink-500/80',
      shadowGlow: 'shadow-[0_0_15px_rgba(236,72,153,0.4)]'
    },
    {
      title: 'From Learning to Real-World Execution',
      desc: 'Create real-world applications that make your portfolio stand out instantly.',
      icon: Briefcase,
      color: 'text-cyan-400',
      borderGlow: 'border-cyan-400/80',
      shadowGlow: 'shadow-[0_0_15px_rgba(34,211,238,0.4)]'
    },
    {
      title: 'Learn What Companies Actually Need',
      desc: 'Our curriculum is built around real industry demands — not outdated syllabus.',
      icon: Award,
      color: 'text-purple-400',
      borderGlow: 'border-purple-400/80',
      shadowGlow: 'shadow-[0_0_15px_rgba(192,132,252,0.4)]'
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 relative overflow-hidden bg-brand-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Column: Orbit Animation */}
          <div className="relative flex justify-center items-center h-[600px] w-full lg:sticky lg:top-32">
            {/* Neon Glow */}
            <div className="absolute inset-0 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Inner Orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute z-10 border-2 border-dashed border-white/5 w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] rounded-full flex items-center justify-center"
            >
              <div className="absolute top-0 transform translate-x-[-125px] sm:translate-x-[-160px] w-12 h-12 glass rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <div className="w-3 h-3 bg-brand-cyan rounded-full animate-pulse shadow-[0_0_10px_#64c8ff]"></div>
              </div>
              <div className="absolute bottom-0 transform translate-x-[125px] sm:translate-x-[160px] w-12 h-12 glass rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <div className="w-3 h-3 bg-brand-purple rounded-full animate-pulse shadow-[0_0_10px_#9b5de5]"></div>
              </div>
            </motion.div>

            {/* Outer Orbit (Tools & Frameworks) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="absolute z-20 border border-solid border-white/5 w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] rounded-full flex items-center justify-center"
            >
              {/* Tool 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute top-0 left-1/2 ml-[-24px] mt-[-24px] w-12 h-12 bg-[#1a1432] rounded-xl flex items-center justify-center border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.2)]"
              >
                <Code className="text-yellow-400 w-6 h-6" />
              </motion.div>

              {/* Tool 2 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 right-[-24px] mt-[-24px] w-12 h-12 bg-[#1a1432] rounded-xl flex items-center justify-center border border-brand-cyan/30 shadow-[0_0_15px_rgba(100,200,255,0.2)]"
              >
                <Network className="text-brand-cyan w-6 h-6" />
              </motion.div>

              {/* Tool 3 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-[-24px] left-1/2 ml-[-24px] w-12 h-12 bg-[#1a1432] rounded-xl flex items-center justify-center border border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.2)]"
              >
                <Database className="text-orange-400 w-6 h-6" />
              </motion.div>

              {/* Tool 4 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-[-24px] mt-[-24px] w-12 h-12 bg-[#1a1432] rounded-xl flex items-center justify-center border border-brand-purple/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
              >
                <Bot className="text-brand-purple w-6 h-6" />
              </motion.div>
            </motion.div>

            {/* Core Brain */}
            <div className="absolute z-30 w-40 h-40 sm:w-56 sm:h-56 rounded-full glass flex items-center justify-center shadow-[inset_0_0_30px_rgba(100,200,255,0.1)]">
              <Brain className="w-20 h-20 sm:w-28 sm:h-28 text-brand-cyan drop-shadow-[0_0_20px_rgba(100,200,255,0.8)]" />
              <div className="absolute inset-0 border-[3px] border-brand-cyan/30 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black mb-12 leading-tight tracking-tight"
            >
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">NexGeniq</span> is the <br />
              Choice for AI Thinkers
            </motion.h2>

            {/* New Vertical Stack Design matching Image */}
            <div className="flex flex-col space-y-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.15, duration: 0.6, type: "spring", stiffness: 60 }}
                  className="group flex items-center space-x-6 p-6 sm:p-8 rounded-2xl bg-[#110e26] border border-white/5 hover:bg-[#1a1432] transition-colors duration-300 shadow-xl"
                >
                  {/* Glowing Icon Box */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-[1.25rem] flex items-center justify-center border-2 ${benefit.borderGlow} ${benefit.shadowGlow} bg-[#0B0F2A] transition-transform duration-300 group-hover:scale-110`}>
                    <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col">
                    <h3 className={`text-xl sm:text-2xl font-bold mb-2 tracking-tight ${benefit.color}`}>{benefit.title}</h3>
                    <p className="text-sm sm:text-base font-medium text-white/50 leading-relaxed max-w-lg">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhySection;
