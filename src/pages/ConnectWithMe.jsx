import React, { useState, useEffect } from 'react';
import '../App.css';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function ConnectWithMe() {
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

      {/* Terminal-style contact section */}
      <div className={`bg-[#1c1c1e] border border-gray-700 rounded-xl p-6 shadow-xl font-mono text-left w-full max-w-2xl transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
      }`}>
        
        <div className="text-green-400 text-base md:text-lg mb-4">
          <span className="text-gray-400">sarthak@portfolio:~$ </span>
          <span className="text-white">echo </span>
          <span className="text-green-300">"Let's connect!"</span>
          <span className="text-gray-400 animate-blink">|</span>
        </div>

        <div className="text-cyan-300 text-sm md:text-base space-y-4">
          <ContactRow
            icon={<Mail size={18} className="text-yellow-200" />}
            label="Email"
            value="sarthak.mahadik@walchandsangli.ac.in"
            href="mailto:sarthak.mahadik@walchandsangli.ac.in"
            isVisible={isVisible}
            delay={0}
          />
          <ContactRow
            icon={<Github size={18} className="text-purple-300" />}
            label="GitHub"
            value="github.com/OceanicCoder09"
            href="https://github.com/OceanicCoder09"
            isVisible={isVisible}
            delay={150}
          />
          <ContactRow
            icon={<Linkedin size={18} className="text-blue-400" />}
            label="LinkedIn"
            value="linkedin.com/in/sarthak-mahadik-b675141ba"
            href="https://www.linkedin.com/in/sarthak-mahadik-b675141ba/"
            isVisible={isVisible}
            delay={300}
          />
          <ContactRow
            icon={<Twitter size={18} className="text-sky-300" />}
            label="Twitter"
            value="twitter.com/yourtwitter"
            href="https://twitter.com/yourtwitter"
            isVisible={isVisible}
            delay={450}
          />
        </div>
      </div>
    </div>
  );
}

function ContactRow({ icon, label, value, href, isVisible, delay }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center gap-3 text-white hover:text-green-300 transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay + 300}ms` }}
    >
      {icon}
      <span className="text-gray-400">{label}:</span>
      <span className="underline">{value}</span>
    </a>
  );
}

export default ConnectWithMe;