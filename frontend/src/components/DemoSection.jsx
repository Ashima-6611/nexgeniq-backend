import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Cpu, Sparkles, Code2, Layers } from 'lucide-react';

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState('python');

  const tabs = [
    { 
      id: 'python', 
      label: 'Python Engine', 
      icon: Terminal, 
      code: (
        <>
          <span className="text-brand-purple font-bold">def</span> <span className="text-brand-cyan font-bold">train_ai_model</span>(data):<br />
          <span className="text-white/40 italic">  # Advanced deep learning core logic</span><br />
          <span className="text-brand-blue font-semibold">  model</span> = NexGeniqEngine.<span className="text-brand-cyan">load</span>(<span className="text-yellow-300">'v4_hyper'</span>)<br />
          <span className="text-brand-blue font-semibold">  optimizer</span> = HighPerformanceOptimizer(lr=<span className="text-orange-400">0.001</span>)<br />
          <span className="text-brand-purple font-bold">  return</span> model.<span className="text-brand-cyan">optimize</span>(data)
        </>
      )
    },
    { 
      id: 'dashboard', 
      label: 'AI Dashboard', 
      icon: Database, 
      code: (
        <>
          <span className="text-white/40 italic">// Real-time Insight Metrics Stream</span><br />
          insight.engine.<span className="text-brand-cyan">process_streams</span>({'{'}<br />
          <span className="text-brand-blue">  source:</span> <span className="text-yellow-300">"NexGeniq_Telemetry"</span>,<br />
          <span className="text-brand-blue">  mode:</span> <span className="text-yellow-300">"Realtime_Learning"</span>,<br />
          <span className="text-brand-blue">  confidence_threshold:</span> <span className="text-orange-400">0.999</span><br />
          {'}'});
        </>
      )
    },
    { 
      id: 'agent', 
      label: 'Agentic Flow', 
      icon: Cpu, 
      code: (
        <>
          <span className="text-brand-purple font-bold">async function</span> <span className="text-brand-cyan font-bold">createAgent</span>() {'{'}<br />
          <span className="text-brand-purple font-bold">  const</span> agent = <span className="text-brand-purple font-bold">new</span> <span className="text-blue-400">AutonomousAgent</span>();<br />
          <span className="text-brand-purple font-bold">  await</span> agent.<span className="text-brand-cyan">initiateMission</span>({'{'}<br />
          <span className="text-brand-blue">    objective:</span> <span className="text-yellow-300">"Master Generative AI"</span>,<br />
          <span className="text-brand-blue">    autonomous:</span> <span className="text-brand-purple font-bold">true</span><br />
          <span className="text-white/40 italic">    // Deploying reasoning chains...</span><br />
          <span className="text-brand-purple font-bold">  </span>{'}'});<br />
          {'}'}
        </>
      )
    },
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-brand-dark container-glass">
       {/* Ambient Backlights */}
       <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-brand-blue/10 rounded-full blur-[180px] -z-10 pointer-events-none"></div>

       <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
             
             {/* Left: Code Editor UI Terminal */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="w-full lg:w-3/5 relative group"
             >
                {/* Glowing Animated Outer Border Layer */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-blue rounded-[2rem] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-[pulse_3s_ease-in-out_infinite]"></div>
                
                {/* Core IDE Window */}
                <div className="relative glass-card !p-0 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[450px]">
                   
                   {/* MacOS Style Window Header */}
                   <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex items-center justify-between backdrop-blur-md">
                      <div className="flex space-x-2.5">
                         <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.5)]"></div>
                         <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.5)]"></div>
                         <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.5)]"></div>
                      </div>
                      <div className="flex bg-black/40 px-4 py-1.5 rounded-full border border-white/5">
                        <Code2 size={14} className="text-brand-cyan mr-2 opacity-70" />
                        <span className="text-[11px] text-white/50 font-mono tracking-widest uppercase">{activeTab}_module.jsx</span>
                      </div>
                      <div className="w-16"></div> {/* Spacer for pure centering */}
                   </div>

                   {/* Code Editor Body */}
                   <div className="bg-[#050515]/80 flex-grow p-8 flex flex-col justify-center relative overflow-hidden backdrop-blur-3xl">
                      {/* Editor Watermark */}
                      <Layers className="absolute right-[-10%] bottom-[-20%] w-[400px] h-[400px] text-white/5 pointer-events-none" />
                      
                      <AnimatePresence mode="wait">
                         <motion.div
                           key={activeTab}
                           initial={{ opacity: 0, y: 15 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: -15 }}
                           transition={{ duration: 0.25, ease: "easeInOut" }}
                           className="font-mono text-sm sm:text-base md:text-lg leading-[1.8] text-white/90 relative z-10"
                         >
                            <pre className="whitespace-pre-wrap drop-shadow-md">
                               <code>{tabs.find(t => t.id === activeTab).code}</code>
                            </pre>
                         </motion.div>
                      </AnimatePresence>

                      <div className="absolute bottom-6 right-6 flex items-center space-x-2">
                        <Sparkles size={16} className="text-brand-cyan animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan/50">NexGeniq Runtime</span>
                      </div>
                   </div>
                </div>

                {/* Floating Aesthetic Element */}
                <motion.div 
                  animate={{ y: [-15, 15, -15] }} 
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 -right-8 w-28 h-28 glass rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(100,200,255,0.2)] border-brand-cyan/30"
                >
                   <Cpu className="text-brand-cyan w-12 h-12 drop-shadow-[0_0_15px_rgba(100,200,255,0.8)]" />
                </motion.div>
             </motion.div>

             {/* Right: Interaction Details */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="w-full lg:w-2/5"
             >
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-brand-purple/30 bg-brand-purple/5 text-brand-purple text-[10px] font-black tracking-[0.2em] uppercase mb-6 shadow-[0_0_15px_rgba(155,93,229,0.1)]">
                  <span>Interactive Workspace</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-tight">
                  Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan">SaaS-Grade</span> Performance.
                </h2>
                
                <p className="text-white/60 mb-12 leading-relaxed text-lg font-medium">
                   Our training modules aren't just video tutorials. They are fully-featured, <strong className="text-white">high-performance sandbox environments</strong> designed to simulate real-world AI engineering at scale.
                </p>

                <div className="space-y-4">
                   {tabs.map((tab) => (
                     <button
                       key={tab.id}
                       onClick={() => setActiveTab(tab.id)}
                       className={`w-full group relative overflow-hidden flex items-center justify-between p-5 rounded-2xl glass transition-all duration-300 ${
                          activeTab === tab.id 
                            ? 'border-brand-cyan shadow-[0_0_30px_rgba(100,200,255,0.15)] bg-white/10' 
                            : 'border-white/5 hover:border-white/20 hover:bg-white/5'
                       }`}
                     >
                        <div className="flex items-center space-x-4 relative z-10">
                          <div className={`p-2.5 rounded-lg transition-colors duration-300 ${activeTab === tab.id ? 'bg-brand-cyan/20 text-brand-cyan' : 'bg-white/5 text-white/40 group-hover:text-white/80'}`}>
                            <tab.icon className="w-5 h-5" />
                          </div>
                          <span className={`font-bold uppercase tracking-wider text-sm transition-colors duration-300 ${activeTab === tab.id ? 'text-white' : 'text-white/50 group-hover:text-white/90'}`}>
                            {tab.label}
                          </span>
                        </div>
                        
                        {/* Selected Indicator Pill */}
                        {activeTab === tab.id && (
                          <motion.div layoutId="activeTabIndicator" className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(100,200,255,0.8)]"></motion.div>
                        )}
                     </button>
                   ))}
                </div>
             </motion.div>

          </div>
       </div>
    </section>
  );
};

export default DemoSection;
