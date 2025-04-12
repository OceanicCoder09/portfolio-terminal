import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Button from '../components/Button';

function Skills() {
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
    <div className="w-screen min-h-screen bg-gradient-to-b from-[#1e1f29] via-[#2e2f3a] to-[#1e1f29] flex items-center justify-center px-4">
      
      {/* Navigation Buttons */}
      <div className='absolute top-6 right-6 flex gap-4 flex-wrap'>
        <Button label="Home" variant="outline" onClick={() => navigate('/')} />
        <Button label="About Me" variant="outline" onClick={() => navigate('/about')} />
        <Button label="Projects" variant="outline" onClick={() => navigate('/projects')} />
        <Button label="Skills" variant="outline" onClick={() => navigate('/skills')} />
        <Button label="Coding Profiles" variant="outline" onClick={() => navigate('/coding')} />
        <Button label="Connect With Me" variant="outline" onClick={() => navigate('/connect')} />
      </div>

      <div className={`bg-[#1c1c1e] border border-gray-700 rounded-xl p-6 shadow-xl font-mono text-left w-full max-w-3xl transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
      }`}>
        
        {/* Terminal-style Header */}
        <div className="text-green-400 text-base md:text-lg mb-4">
          <span className="text-gray-400">sarthak@portfolio:~$ </span>
          <span className="text-white">cat </span>
          <span className="text-purple-300">skills.txt</span>
          <span className="text-gray-400 animate-blink">|</span>
        </div>

        {/* Skills Grid */}
        <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <SkillSection 
            title="Languages" 
            skills={["Java", "JavaScript", "C++", "HTML", "CSS"]} 
            isVisible={isVisible} 
            delay={0}
          />
          <SkillSection 
            title="Frontend" 
            skills={["React.js", "Tailwind CSS", "Redux", "HTML Canvas", "Framer Motion"]} 
            isVisible={isVisible} 
            delay={100}
          />
          <SkillSection 
            title="Backend" 
            skills={["Node.js", "Express.js", "JWT", "REST APIs"]} 
            isVisible={isVisible} 
            delay={200}
          />
          <SkillSection 
            title="Database" 
            skills={["MongoDB", "Firebase", "MySQL"]} 
            isVisible={isVisible} 
            delay={300}
          />
          <SkillSection 
            title="Tools & Platforms" 
            skills={["Git", "GitHub", "VS Code", "Postman", "Figma"]} 
            isVisible={isVisible} 
            delay={400}
          />
          <SkillSection 
            title="Other Skills" 
            skills={["DSA", "Problem Solving", "UI/UX Basics"]} 
            isVisible={isVisible} 
            delay={500}
          />
        </div>
      </div>
    </div>
  );
}

function SkillSection({ title, skills, isVisible, delay }) {
  return (
    <div className={`transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`} style={{ transitionDelay: `${delay + 300}ms` }}>
      <h3 className="text-green-400 text-lg mb-2">{title}</h3>
      <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
        {skills.map((skill, index) => (
          <li 
            key={index} 
            className={`hover:text-green-300 transition-all duration-300`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;