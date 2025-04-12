import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Button from '../components/Button';
import {
  FaJava, FaJs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaDatabase, FaGitAlt, FaFigma,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiRedux, SiMongodb, SiFirebase, SiMysql, SiExpress, SiPostman, SiFramer,
} from 'react-icons/si';

const skillIcons = {
  Java: <FaJava />,
  JavaScript: <FaJs />,
  'C++': <span>C++</span>,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  'React.js': <FaReact />,
  'Tailwind CSS': <SiTailwindcss />,
  Redux: <SiRedux />,
  'HTML Canvas': <span>🖌️</span>,
  'Framer Motion': <SiFramer />,
  'Node.js': <FaNodeJs />,
  'Express.js': <SiExpress />,
  JWT: <span>🔐</span>,
  'REST APIs': <span>🌐</span>,
  MongoDB: <SiMongodb />,
  Firebase: <SiFirebase />,
  MySQL: <SiMysql />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  'VS Code': <span>🧠</span>,
  Postman: <SiPostman />,
  Figma: <FaFigma />,
  DSA: <span>📊</span>,
  'Problem Solving': <span>🧠</span>,
  'UI/UX Basics': <span>🎨</span>,
};

function Skills() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-[#1e1f29] via-[#2e2f3a] to-[#1e1f29] flex flex-col items-center pt-24 sm:pt-20 pb-10 px-4 font-mono">

      {/* Hamburger Menu Button (mobile only) */}
      <div className="sm:hidden absolute top-4 right-4 z-50">
        <button 
          className="flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          aria-label="Toggle menu"
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

      {/* Main Card */}
      <div className={`bg-[#1c1c1e] border border-gray-700 rounded-xl p-4 sm:p-6 shadow-xl text-left w-full max-w-3xl transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
      }`}>

        {/* Terminal-style Header */}
        <div className="text-green-400 text-sm sm:text-base mb-4">
          <span className="text-gray-400">sarthak@portfolio:~$ </span>
          <span className="text-white">echo </span>
          <span className="text-purple-300">"skills.txt"</span>
          <span className="text-gray-400 animate-blink">|</span>
        </div>

        {/* Skills Grid */}
        <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
          <SkillSection title="Languages" skills={["Java", "JavaScript", "C++", "HTML", "CSS"]} isVisible={isVisible} delay={0} />
          <SkillSection title="Frontend" skills={["React.js", "Tailwind CSS", "Redux", "HTML Canvas", "Framer Motion"]} isVisible={isVisible} delay={100} />
          <SkillSection title="Backend" skills={["Node.js", "Express.js", "JWT", "REST APIs"]} isVisible={isVisible} delay={200} />
          <SkillSection title="Database" skills={["MongoDB", "Firebase", "MySQL"]} isVisible={isVisible} delay={300} />
          <SkillSection title="Tools & Platforms" skills={["Git", "GitHub", "VS Code", "Postman", "Figma"]} isVisible={isVisible} delay={400} />
          <SkillSection title="Other Skills" skills={["DSA", "Problem Solving", "UI/UX Basics"]} isVisible={isVisible} delay={500} />
        </div>
      </div>
    </div>
  );
}

function SkillSection({ title, skills, isVisible, delay }) {
  return (
    <section
      className={`transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay + 300}ms` }}
      aria-labelledby={title.toLowerCase().replace(/\s+/g, '-')}>
      <h3 id={title.toLowerCase().replace(/\s+/g, '-')} className="text-green-400 text-base sm:text-lg mb-2">{title}</h3>
      <ul className="text-sm text-gray-300 list-disc list-inside space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="hover:text-green-300 transition-all duration-300 flex items-center gap-2">
            <span className="text-lg">{skillIcons[skill] || '💡'}</span>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;