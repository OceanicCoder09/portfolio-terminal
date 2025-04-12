import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Button from '../components/Button';

function Coding() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-[#1e1f29] via-[#2e2f3a] to-[#1e1f29] flex flex-col items-center pt-24 sm:pt-20 pb-10 px-4 font-mono">

      {/* Hamburger Menu Button (mobile only) */}
      <div className="sm:hidden absolute top-4 right-4 z-50">
        <button 
          className="flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${showMobileMenu ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${showMobileMenu ? 'opacity-0' : 'mb-1.5'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all ${showMobileMenu ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Navigation - Desktop (hidden on mobile) */}
      <div className="hidden sm:flex absolute top-4 left-0 right-0 px-4 justify-center sm:justify-end sm:right-6 gap-2 sm:gap-4">
        <Button label="Home" variant="outline" onClick={() => navigate('/')} />
        <Button label="About Me" variant="outline" onClick={() => navigate('/about')} />
        <Button label="Projects" variant="outline" onClick={() => navigate('/projects')} />
        <Button label="Skills" variant="outline" onClick={() => navigate('/skills')} />
        <Button label="Coding Profiles" variant="outline" onClick={() => navigate('/coding')} />
        <Button label="Connect" variant="outline" onClick={() => navigate('/connect')} />
      </div>

      {/* Mobile Menu (only visible when toggled) */}
      {showMobileMenu && (
        <div className="sm:hidden absolute top-16 right-4 bg-[#1c1c1e] border border-gray-700 rounded-lg p-4 z-40 w-48 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-2">
            <Button label="Home" variant="outline" onClick={() => { navigate('/'); setShowMobileMenu(false); }} fullWidth />
            <Button label="About Me" variant="outline" onClick={() => { navigate('/about'); setShowMobileMenu(false); }} fullWidth />
            <Button label="Projects" variant="outline" onClick={() => { navigate('/projects'); setShowMobileMenu(false); }} fullWidth />
            <Button label="Skills" variant="outline" onClick={() => { navigate('/skills'); setShowMobileMenu(false); }} fullWidth />
            <Button label="Coding Profiles" variant="outline" onClick={() => { navigate('/coding'); setShowMobileMenu(false); }} fullWidth />
            <Button label="Connect" variant="outline" onClick={() => { navigate('/connect'); setShowMobileMenu(false); }} fullWidth />
          </div>
        </div>
      )}

      {/* Terminal Card */}
      <div className={`bg-[#1c1c1e] border border-gray-700 rounded-xl p-4 sm:p-6 shadow-xl text-left w-full max-w-2xl transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
      }`}>
        <div className="text-green-400 text-sm sm:text-base mb-4">
          <span className="text-gray-400">sarthak@portfolio:~$ </span>
          <span className="text-white">cat </span>
          <span className="text-purple-300">coding.txt</span>
          <span className="text-gray-400 animate-blink">|</span>
        </div>

        {/* Coding Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 text-sm sm:text-base">
          <CodingCard
            name="LeetCode"
            stats="400+ problems solved"
            url="https://leetcode.com/u/sarthak0910/"
            emoji="🧩"
            isVisible={isVisible}
            delay={0}
          />
          <CodingCard
            name="CodeChef"
            stats="3★ Rated"
            url="https://www.codechef.com/users/brill_flutter"
            emoji="🔥"
            isVisible={isVisible}
            delay={200}
          />
          <CodingCard
            name="GeeksforGeeks"
            stats="400+ problems"
            url="https://www.geeksforgeeks.org/user/sarthakkta4/"
            emoji="📘"
            isVisible={isVisible}
            delay={400}
          />
        </div>
      </div>
    </div>
  );
}

function CodingCard({ name, stats, url, emoji, isVisible, delay }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`border border-gray-700 rounded-lg p-4 sm:p-5 hover:border-yellow-400 hover:shadow-md transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
        isVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0 rotate-2'
      }`}
      style={{ transitionDelay: `${delay + 300}ms` }}
    >
      <div className="text-green-300 text-base sm:text-lg mb-1">{emoji} {name}</div>
      <p className="text-gray-300 text-sm sm:text-base">{stats}</p>
    </a>
  );
}

export default Coding;