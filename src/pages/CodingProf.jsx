import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Button from '../components/Button';

function Coding() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  // Effect to trigger the entrance animation when component mounts
  useEffect(() => {
    // Small delay to ensure the animation is noticeable
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#1e1f29] via-[#2e2f3a] to-[#1e1f29] flex items-center justify-center px-4">
      
      {/* Navigation Buttons */}
      <div className='absolute top-6 right-6 flex gap-4 flex-wrap'>
        <Button label="Home" variant="outline" onClick={() => navigate('/')} />
        <Button label="About Me" variant="outline" onClick={() => navigate('/about')} />
        <Button label="Projects" variant="outline" onClick={() => navigate('/projects')} />
        <Button label="Skills" variant="outline" onClick={() => navigate('/skills')} />
        <Button label="Coding Profiles" variant="outline" onClick={() => navigate('/coding')} />
        <Button label="Connect With Me" variant="outline" onClick={() => navigate('/connect')} />
      </div>

      {/* Terminal Card */}
      <div className={`bg-[#1c1c1e] border border-gray-700 rounded-xl p-6 shadow-xl font-mono text-left w-full max-w-2xl transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
      }`}>
        
        {/* Terminal-style heading */}
        <div className="text-green-400 text-base md:text-lg mb-4">
          <span className="text-gray-400">sarthak@portfolio:~$ </span>
          <span className="text-white">cat </span>
          <span className="text-purple-300">coding.txt</span>
          <span className="text-gray-400 animate-blink">|</span>
        </div>

        {/* Coding Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-sm">
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
      className={`border border-gray-700 rounded-lg p-4 hover:border-yellow-400 hover:shadow-md transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0 rotate-2'
      }`}
      style={{ transitionDelay: `${delay + 300}ms` }}
    >
      <div className="text-green-300 text-lg mb-2">{emoji} {name}</div>
      <p className="text-gray-300">{stats}</p>
    </a>
  );
}

export default Coding;