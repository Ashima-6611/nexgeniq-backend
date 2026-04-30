import React from 'react';
import { Cpu, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 relative bg-brand-dark border-t border-white/5 overflow-hidden">
       {/* Small Decorative Glow */}
       <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[100px] -z-10"></div>

       <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
             
             {/* Brand Column */}
             <div className="col-span-1 md:col-span-1">
                <a href="/" className="flex items-center space-x-3 group mb-8 no-underline">
                   <div className="relative flex-shrink-0">
                     <img 
                       src={`${import.meta.env.BASE_URL}NexGeniqLogo.png`} 
                       alt="NexGeniq Logo" 
                       className="w-10 h-10 object-contain group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,229,255,1)] transition-all duration-500" 
                     />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-2xl font-bold tracking-tight leading-none text-white">
                       Nex<span className="text-brand-cyan">Gen</span><span className="text-white opacity-80">iq</span>
                     </span>
                     <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.15em] mt-1.5 uppercase">
                       <span className="text-white">Learn</span><span className="text-brand-cyan/50 mx-1">.</span><span className="text-brand-blue">Evolve</span>
                     </span>
                   </div>
                </a>
                <p className="text-white/40 text-sm leading-relaxed mb-8">
                   Think next. Learn smart. Built for the next generation of AI thinkers and architects.
                </p>
                <div className="flex space-x-6">
                   <a href="#" className="text-white/40 hover:text-brand-cyan transition-colors"><Twitter size={20} /></a>
                   <a href="#" className="text-white/40 hover:text-brand-cyan transition-colors"><Github size={20} /></a>
                   <a href="#" className="text-white/40 hover:text-brand-cyan transition-colors"><Linkedin size={20} /></a>
                   <a href="#" className="text-white/40 hover:text-brand-cyan transition-colors"><Instagram size={20} /></a>
                </div>
             </div>

             {/* Links Columns */}
             <div className="col-span-1">
                <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-cyan opacity-80">Platform</h4>
                <ul className="space-y-4 text-sm text-white/50">
                   <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                   <li><a href="/courses" className="hover:text-white transition-colors">All Courses</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
                </ul>
             </div>

             <div className="col-span-1">
                <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-cyan opacity-80">Resources</h4>
                <ul className="space-y-4 text-sm text-white/50">
                   <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">AI Blog</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">Open Source</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                </ul>
             </div>

             {/* Newsletter */}
             <div className="col-span-1">
                <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-cyan opacity-80">Newsletter</h4>
                <p className="text-xs text-white/40 mb-4">Stay updated with the latest AI trends.</p>
                <div className="flex">
                   <input 
                     type="email" 
                     placeholder="Email" 
                     className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-xs w-full outline-none focus:border-brand-cyan transition-all"
                   />
                   <button className="bg-brand-cyan text-brand-dark px-4 py-2 rounded-r-lg font-bold text-xs">Join</button>
                </div>
             </div>

          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/20 tracking-widest uppercase">
             <span>© 2026 NexGeniq Inc. All rights reserved.</span>
             <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Security</a>
             </div>
          </div>
       </div>
    </footer>
  );
};

export default Footer;
