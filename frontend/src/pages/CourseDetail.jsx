import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, BookOpen, User } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  
  // Custom course data matching the IDs
  const courseData = {
    'python': { 
      title: 'Advanced Python Mastery',
      duration: '45 Days',
      instructor: 'Dr. Nex Gen Architect',
      desc: 'Master the art of high-performance Python programming including asynchronous tasking and deep algorithmic optimizations.',
      syllabus: ['Advanced Decorators & Meta-programming', 'Asyncio & Concurrency Hub', 'Distributed Computing with Python', 'Designing Scalable APIs']
    },
    'ai-ml': { 
      title: 'AI & Machine Learning Engineering',
      duration: '2 Months',
      instructor: 'Lead AI Engineer',
      desc: 'Build and deploy production-grade machine learning models from scratch using the latest neural network architectures.',
      syllabus: ['Deep Learning with PyTorch', 'Hyperparameter Optimization', 'Computer Vision Architectures', 'Natural Language Transformers']
    },
    'gen-ai': { 
       title: 'Generative & Agentic AI Systems',
       duration: '3 Months',
       instructor: 'GenAI Specialist',
       desc: 'The frontier of AI training. Learn to engineer autonomous agents and implement LLM-driven complex workflows.',
       syllabus: ['LLM Orchestration with LangChain', 'RAG (Retrieval-Augmented Generation)', 'Autonomous Agent Reasoning', 'Fine-tuning Foundry']
    }
  };

  const course = courseData[id] || courseData['python'];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-dark">
      <div className="container mx-auto px-6">
        <Link to="/courses" className="inline-flex items-center text-brand-cyan hover:underline mb-8">
           <ArrowLeft size={16} className="mr-2" /> Back to all courses
        </Link>
        
        <div className="grid lg:grid-cols-3 gap-12">
           {/* Left: Main Details */}
           <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">{course.title}</h1>
              <p className="text-xl text-white/60 mb-12 leading-relaxed">{course.desc}</p>
              
              <div className="flex flex-wrap gap-6 mb-16">
                 <div className="glass px-6 py-4 rounded-2xl flex items-center space-x-3">
                    <Clock className="text-brand-cyan" />
                    <div>
                       <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Duration</div>
                       <div className="font-bold">{course.duration}</div>
                    </div>
                 </div>
                 <div className="glass px-6 py-4 rounded-2xl flex items-center space-x-3">
                    <User className="text-brand-cyan" />
                    <div>
                       <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Instructor</div>
                       <div className="font-bold">{course.instructor}</div>
                    </div>
                 </div>
                 <div className="glass px-6 py-4 rounded-2xl flex items-center space-x-3">
                    <BookOpen className="text-brand-cyan" />
                    <div>
                       <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Curriculum</div>
                       <div className="font-bold">{course.syllabus.length} Core Modules</div>
                    </div>
                 </div>
              </div>

              <h3 className="text-2xl font-bold mb-8">Curriculum <span className="text-brand-cyan">Syllabus</span></h3>
              <div className="space-y-4">
                 {course.syllabus.map((item, idx) => (
                   <div key={idx} className="glass p-6 rounded-2xl flex items-center space-x-6 border-white/5 group hover:border-brand-cyan/30">
                      <div className="text-2xl font-bold text-white/10 group-hover:text-brand-cyan/20">{idx + 1}</div>
                      <div className="text-lg font-medium">{item}</div>
                      <CheckCircle className="ml-auto text-brand-cyan/30" />
                   </div>
                 ))}
              </div>
           </div>

           {/* Right: Enrollment Sticky Card */}
           <div className="lg:col-span-1">
              <div className="glass p-8 rounded-[2rem] border-brand-cyan/20 sticky top-32">
                 <h4 className="text-2xl font-bold mb-4">Enroll in track</h4>
                 <div className="text-4xl font-extrabold text-brand-cyan mb-8">₹ Industry Best</div>
                 
                 <ul className="space-y-4 mb-10">
                    <li className="flex items-center text-white/70 text-sm"><CheckCircle size={16} className="text-brand-cyan mr-2" /> Live Interactive Classes</li>
                    <li className="flex items-center text-white/70 text-sm"><CheckCircle size={16} className="text-brand-cyan mr-2" /> 24/7 Mentor Support</li>
                    <li className="flex items-center text-white/70 text-sm"><CheckCircle size={16} className="text-brand-cyan mr-2" /> Industry Certification</li>
                    <li className="flex items-center text-white/70 text-sm"><CheckCircle size={16} className="text-brand-cyan mr-2" /> Resume & Interview Prep</li>
                 </ul>

                 <button className="btn-primary w-full py-5 text-xl">Confirm Seat</button>
                 <p className="text-center text-[10px] text-white/30 uppercase mt-4 tracking-widest">Limited slots for this batch</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
