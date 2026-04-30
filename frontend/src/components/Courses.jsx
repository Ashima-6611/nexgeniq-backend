import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Bot, Sparkles, ChevronRight, Layers, Cpu, Code2 } from 'lucide-react';

const courses = [
  {
    title: 'Advanced Python',
    duration: '45 Days',
    level: 'Beginner to Advanced',
    icon: Code2,
    color: 'from-yellow-400 to-orange-500',
    iconColor: 'text-yellow-400',
    points: ['Scientific Computing', 'Web Frameworks', 'Data Processing', 'Automation'],
  },
  {
    title: 'AI & Machine Learning',
    duration: '2 Months',
    level: 'Intermediate',
    icon: Brain,
    color: 'from-brand-purple to-pink-500',
    iconColor: 'text-brand-purple',
    points: ['Neural Networks', 'Deep Learning', 'Computer Vision', 'NLP'],
  },
  {
    title: 'Generative & Agentic AI',
    duration: '3 Months',
    level: 'Advanced',
    icon: NetworkIcon,
    color: 'from-brand-cyan to-brand-blue',
    iconColor: 'text-brand-cyan',
    points: ['LLM Orchestration', 'AI Agents', 'Stable Diffusion', 'Fine-tuning'],
  },
];

// Re-using Bot for the 3rd icon as Network is not exported in the original list, 
// wait, I'll just map it to Bot or Layers for safety.
function NetworkIcon(props) {
  return <Bot {...props} />;
}

const CourseCard = ({ course, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card group flex flex-col h-full"
    >
      {/* Dynamic Background Glows for the specific card color */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.color} rounded-full blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-500`}></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header: Icon & Tag */}
        <div className="mb-8 flex justify-between items-start">
           <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500`}>
              <course.icon size={32} className={`${course.iconColor} drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`} />
           </div>
           <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase font-bold tracking-widest text-white/60 shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
              {course.level}
           </span>
        </div>

        {/* Title & Meta */}
        <h3 className="text-3xl font-black mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">{course.title}</h3>
        
        <div className="flex items-center space-x-3 mb-8">
           <span className={`px-3 py-1 rounded-md bg-white/5 text-xs font-bold uppercase tracking-wider ${course.iconColor}`}>
             {course.duration}
           </span>
           <span className="text-sm text-white/40 font-medium">Intensive Program</span>
        </div>

        {/* Syllabus Points */}
        <ul className="space-y-4 mb-10 flex-grow">
           {course.points.map((point, idx) => (
             <li key={idx} className="flex items-center text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors">
                <div className={`w-1.5 h-1.5 rounded-full mr-3 bg-gradient-to-r ${course.color}`}></div>
                {point}
             </li>
           ))}
        </ul>

        {/* Action Button */}
        <a href={`${import.meta.env.BASE_URL}#contact`} className="w-full mt-auto flex items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-gradient-to-r group-hover:from-brand-purple group-hover:to-brand-blue group-hover:border-transparent transition-all duration-300 font-bold text-white/80 group-hover:text-white shadow-[0_0_0_transparent] group-hover:shadow-[0_10px_20px_-5px_rgba(155,93,229,0.4)]">
           View Syllabus <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

const Courses = () => {
  return (
    <section id="courses" className="py-16 lg:py-24 relative overflow-hidden bg-brand-dark">
      {/* Animated Deep Glows in Section Background */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-brand-cyan/10 rounded-full blur-[180px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-brand-cyan/30 text-brand-cyan text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(100,200,255,0.1)]"
          >
            <Layers size={16} />
            <span>Curriculum Ecosystem</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter"
          >
            Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">Pathway.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-xl md:text-2xl font-medium leading-relaxed"
          >
             Transform from beginner to industry-ready AI engineer with our immersive, hands-on syllabus.
          </motion.p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {courses.map((course, idx) => (
            <CourseCard key={idx} index={idx} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
