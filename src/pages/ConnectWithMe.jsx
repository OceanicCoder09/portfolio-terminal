import React, { useState, useEffect } from 'react';
import '../App.css';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function ConnectWithMe() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-[#1e1f29] via-[#2e2f3a] to-[#1e1f29] flex flex-col items-center justify-center px-4 pt-24 pb-10 font-mono">

      {/* Responsive Navigation */}
      <div className="absolute top-4 left-0 right-0 px-4 overflow-x-auto scrollbar-hide flex gap-2 sm:gap-4 flex-nowrap sm:flex-wrap justify-center sm:justify-end sm:right-6">
        <Button label="Home" variant="outline" onClick={() => navigate('/')} />
        <Button label="About Me" variant="outline" onClick={() => navigate('/about')} />
        <Button label="Projects" variant="outline" onClick={() => navigate('/projects')} />
        <Button label="Skills" variant="outline" onClick={() => navigate('/skills')} />
        <Button label="Coding Profiles" variant="outline" onClick={() => navigate('/coding')} />
        <Button label="Connect With Me" variant="outline" onClick={() => navigate('/connect')} />
      </div>

      {/* Contact Section */}
      <div className={`bg-[#1c1c1e] border border-gray-700 rounded-xl p-5 sm:p-6 shadow-xl w-full max-w-2xl transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
      }`}>
        
        <div className="text-green-400 text-sm sm:text-base mb-4">
          <span className="text-gray-400">sarthak@portfolio:~$ </span>
          <span className="text-white">echo </span>
          <span className="text-green-300">"Let's connect!"</span>
          <span className="text-gray-400 animate-blink">|</span>
        </div>

        <div className="text-cyan-300 text-sm sm:text-base space-y-4">
          <ContactRow
            icon={<Mail size={18} className="text-yellow-200" />}
            label="Email"
            value="sarthak.mahadik@walchandsangli.ac.in"
            href="mailto:sarthak.mahadik@walchandsangli.ac.in"
            isVisible={isVisible}
            delay={0}
            ariaLabel="Email me"
          />
          <ContactRow
            icon={<Github size={18} className="text-purple-300" />}
            label="GitHub"
            value="github.com/OceanicCoder09"
            href="https://github.com/OceanicCoder09"
            isVisible={isVisible}
            delay={150}
            ariaLabel="Visit my GitHub profile"
          />
          <ContactRow
            icon={<Linkedin size={18} className="text-blue-400" />}
            label="LinkedIn"
            value="linkedin.com/in/sarthak-mahadik-b675141ba"
            href="https://www.linkedin.com/in/sarthak-mahadik-b675141ba/"
            isVisible={isVisible}
            delay={300}
            ariaLabel="Connect with me on LinkedIn"
          />
          <ContactRow
            icon={<Twitter size={18} className="text-sky-300" />}
            label="Twitter"
            value="twitter.com/yourtwitter"
            href="https://twitter.com/yourtwitter"
            isVisible={isVisible}
            delay={450}
            ariaLabel="Follow me on Twitter"
          />
        </div>
      </div>
    </div>
  );
}

function ContactRow({ icon, label, value, href, isVisible, delay, ariaLabel }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={`flex items-center gap-3 text-white hover:text-green-300 transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay + 300}ms` }}
    >
      {icon}
      <span className="text-gray-400">{label}:</span>
      <span className="underline break-all">{value}</span>
    </a>
  );
}

export default ConnectWithMe;
