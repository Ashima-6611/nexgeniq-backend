import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const RoadMap = () => {
  const steps = [
    { 
       course: 'Python Mastery', 
       duration: '45 Days',
       desc: 'Foundations to advanced modules including multi-threading, network programming, and secure coding.',
       color: 'bg-yellow-400' 
    },
    { 
       course: 'AI & ML Engineering', 
       duration: '2 Months',
       desc: 'Deep learning implementation, training models on real datasets, and optimization strategies.',
       color: 'bg-brand-purple' 
    },
    { 
       course: 'Data Science Core', 
       duration: '3 Months',
       desc: 'Statistical modeling, big data handling, and predictive analytics with high-end visualization.',
       color: 'bg-brand-blue' 
    },
  ];

  return (
    <section className="py-16 lg:py-24 relative bg-brand-dark overflow-hidden">
       {/* Ambient Backlight that causes a pseudo-parallax feel when scrolling past */}
       <motion.div 
         initial={{ y: -100, opacity: 0 }}
         whileInView={{ y: 0, opacity: 0.3 }}
         transition={{ duration: 1.5, ease: "easeOut" }}
         className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none"
       ></motion.div>

       <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="text-center mb-24"
          >
             <h2 className="text-5xl font-black mb-6 tracking-tighter">Your Journey <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Forward</span></h2>
             <p className="text-white/60 text-lg md:text-xl font-medium">Follow the architect's pathway from basic networking to multi-modal generative intelligence.</p>
          </motion.div>

          <div className="relative border-l-2 border-brand-cyan/20 ml-6 md:ml-0 md:flex md:flex-col md:items-center">
             {steps.map((step, idx) => (
               <motion.div
                 key={idx}
                 whileInView={{ opacity: 1, x: 0 }}
                 initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 50 }}
                 className="mb-12 md:mb-20 relative w-full md:flex md:justify-between items-center group"
               >
                  {/* Glowing Node Point */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="absolute left-[-11px] md:left-1/2 md:translate-x-[-11px] w-5 h-5 rounded-full glass border-brand-cyan shadow-[0_0_15px_rgba(100,200,255,0.5)] z-20 group-hover:scale-150 group-hover:bg-brand-cyan group-hover:shadow-[0_0_30px_rgba(100,200,255,0.8)] transition-all duration-300"
                  ></motion.div>

                  {/* Content Container */}
                  <div className={`ml-8 md:ml-0 md:w-[45%] ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto md:text-right'} p-8 glass-card border border-white/5 group-hover:border-brand-cyan/50 transition-all duration-500 hover:-translate-y-2`}>
                     <h3 className="text-2xl font-black mb-2 tracking-tight group-hover:text-brand-cyan transition-colors">{step.course}</h3>
                     <span className="text-xs font-black text-brand-purple uppercase tracking-widest">{step.duration} Intensive</span>
                     <p className="text-base text-white/60 mt-4 leading-relaxed font-medium">{step.desc}</p>
                  </div>
               </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default RoadMap;
