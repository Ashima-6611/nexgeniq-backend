import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Lazy loading components for performance
const LandingPage = lazy(() => import('./pages/LandingPage.jsx'));
const CoursesPage = lazy(() => import('./pages/CoursesPage.jsx'));
const CourseDetail = lazy(() => import('./pages/CourseDetail.jsx'));

function App() {
  return (
    <Router basename="/training">
      <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-cyan/30">
        {/* Animated Neural Grid Overlay */}
        <div className="fixed inset-0 neural-overlay pointer-events-none z-0 opacity-40"></div>
        
        <Navbar />
        
        <main className="relative z-10">
          <Suspense fallback={
            <div className="h-screen flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-brand-cyan border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/course/:id" element={<CourseDetail />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
