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

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-[#1e1f29] via-[#2e2f3a] to-[#1e1f29] flex flex-col items-center justify-start px-4 py-6 md:justify-center">

      {/* Navigation */}
      <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-4 sm:absolute sm:top-6 sm:right-6 sm:justify-end mb-6 sm:mb-0">
        <Button label="Home" variant="outline" onClick={() => navigate('/')} />
        <Button label="About Me" variant="outline" onClick={() => navigate('/about')} />
        <Button label="Projects" variant="outline" onClick={() => navigate('/projects')} />
        <Button label="Skills" variant="outline" onClick={() => navigate('/skills')} />
        <Button label="Coding Profiles" variant="outline" onClick={() => navigate('/coding')} />
        <Button label="Connect With Me" variant="outline" onClick={() => navigate('/connect')} />
      </div>

      {/* Main Card */}
      <div className={`bg-[#1c1c1e] border border-gray-700 rounded-xl p-4 sm:p-6 shadow-xl font-mono text-left w-full max-w-3xl transition-all duration-700 ${
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
