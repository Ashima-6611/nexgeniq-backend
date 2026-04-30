import React from 'react';
import Courses from '../components/Courses.jsx';

const CoursesPage = () => {
  return (
    <div className="pt-32 min-h-screen bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 italic underline decoration-brand-cyan/30 underline-offset-[12px]">All <span className="text-brand-cyan">AI Tracks</span></h1>
        <p className="text-white/50 text-xl max-w-2xl">
          Explore our complete catalog of industry-leading courses designed for the next generation of engineers.
        </p>
      </div>
      <Courses />
    </div>
  );
};

export default CoursesPage;
