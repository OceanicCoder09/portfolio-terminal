import React, { useState, useEffect } from "react";
import '../App.css';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function About() {
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
    <div className="w-screen min-h-screen bg-gradient-to-b from-[#1e1f29] via-[#2e2f3a] to-[#1e1f29] flex flex-col items-center pt-20 pb-10 px-4 font-mono">
      
      {/* Navigation Buttons */}
      <div className='absolute top-6 right-6 flex gap-4 flex-wrap'>
        <Button label="Home" variant="outline" onClick={() => navigate('/')} />
        <Button label="About Me" variant="outline" onClick={() => navigate('/about')} />
        <Button label="Projects" variant="outline" onClick={() => navigate('/projects')} />
        <Button label="Skills" variant="outline" onClick={() => navigate('/skills')} />
        <Button label="Coding Profiles" variant="outline" onClick={() => navigate('/coding')} />
        <Button label="Connect With Me" variant="outline" onClick={() => navigate('/connect')} />
      </div>

      {/* Terminal Header */}
      <div 
        className={`bg-[#1c1c1e] border border-gray-700 rounded-t-xl p-4 shadow-xl w-[90%] max-w-4xl transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="text-green-400">
          <span className="text-gray-400">sarthak@portfolio:~$ </span>
          <span className="text-white">cat </span>
          <span className="text-purple-300">about_me.txt</span>
          <span className="text-gray-400 animate-blink">|</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        className={`bg-[#1c1c1e] border border-gray-700 border-t-0 rounded-b-xl p-6 shadow-xl w-[90%] max-w-4xl text-gray-300 transition-all duration-700 hover:shadow-2xl hover:scale-[1.01] hover:border-green-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        {/* Developer Profile */}
        <HoverBlock 
          title="developer_profile" 
          text="I'm a passionate full-stack developer and a 3rd-year Computer Science student with a strong foundation in web technologies. With hands-on experience from personal projects, I build responsive, user-friendly applications using React.js, Node.js, and the MERN stack. I enjoy both frontend finesse and backend logic—turning creative ideas into real-world solutions."
          delay={0}
          isVisible={isVisible}
        />

        {/* Tech Philosophy */}
        <HoverBlock 
          title="tech_philosophy" 
          text="For me, coding is not just about functionality—it's about crafting immersive and meaningful digital experiences. I blend technical proficiency with creativity to design solutions that not only work but also resonate. Whether it's a sleek UI or an efficient backend system, I aim to create with both logic and heart." 
          delay={100}
          isVisible={isVisible}
        />

        {/* Problem Solving */}
        <HoverBlock 
          title="problem_solving" 
          text="Challenges fuel my growth. I approach each problem like a game level—breaking it into parts, analyzing patterns, and building efficient solutions. From DSA to debugging, I constantly learn, adapt, and level up my coding skills to solve problems effectively." 
          delay={200}
          isVisible={isVisible}
        />

        {/* Mission Statement */}
        <HoverBlock 
          title="mission_statement" 
          text="I strive to develop software that creates impact—be it for businesses, communities, or individuals. My mission is to build high-quality, performance-optimized applications that make everyday tasks easier and experiences more enjoyable. Through innovation and dedication, I aim to contribute meaningfully to the tech world." 
          delay={300}
          isVisible={isVisible}
        />

        {/* Terminal Footer */}
        <div className={`mt-6 text-green-400 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '500ms' }}>
          <span className="text-gray-400">sarthak@portfolio:~$ </span>
          <span className="text-white">cd </span>
          <span className="text-purple-300">../</span>
          <span className="text-gray-400 animate-blink">|</span>
        </div>
      </div>
    </div>
  );
}

function HoverBlock({ title, text, delay, isVisible }) {
  return (
    <div 
      className={`mb-6 group transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:border-green-400 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay + 300}ms` }}
    >
      <div className="text-green-300 mb-2 transition-colors group-hover:text-green-400">
        <span className="text-gray-400">$ </span>{title}
      </div>
      <p className="ml-4 transition-colors duration-200 group-hover:text-white">
        <span className="text-purple-400">// </span>{text}
      </p>
    </div>
  );
}

export default About;