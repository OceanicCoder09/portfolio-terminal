import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Button from '../components/Button';

const projects = [
  {
    title: "ArogyaSathi",
    description: "A modern medical web portal with symptom checking, telemedicine, and AI predictions.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind"],
    github: "https://github.com/sarthak/ArogyaSathi"
  },
  {
    title: "Brainly",
    description: "MERN-based web app to save and manage links from social platforms.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind"],
    demo: "https://brainly-frontend-topaz.vercel.app/"
  },
  {
    title: "Portfolio",
    description: "My first portfolio website built with pure React.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/OceanicCoder09/portfolio-terminal.git",
    demo: "https://portfolio-terminal-sable.vercel.app/"
  }
];

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-[#1e1f29] via-[#2e2f3a] to-[#1e1f29] flex flex-col items-center pt-20 pb-10 px-4 font-mono">

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

      {/* Terminal Header */}
      <div className={`bg-[#1c1c1e] border border-gray-700 rounded-t-xl p-4 shadow-xl w-[90%] max-w-4xl transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="text-green-400 text-sm sm:text-base">
          <span className="text-gray-400">sarthak@portfolio:~$ </span>
          <span className="text-white">ls </span>
          <span className="text-purple-300">./projects</span>
          <span className="text-gray-400 animate-blink">|</span>
        </div>
      </div>

      {/* Projects */}
      <section className={`bg-[#1c1c1e] border border-gray-700 border-t-0 rounded-b-xl p-6 shadow-xl w-[90%] max-w-4xl transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`} style={{ transitionDelay: '200ms' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`bg-[#27272a] border border-gray-700 rounded-lg p-4 hover:border-green-400 hover:scale-[1.02] hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <h3 className="text-green-300 font-semibold mb-2">
                <span className="text-gray-400">$ </span>{project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 text-cyan-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="space-y-1">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-300 hover:text-sky-200 text-sm flex items-center"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <span className="text-gray-400 mr-1">→</span> live-demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-200 text-sm flex items-center"
                    aria-label={`Source code for ${project.title}`}
                  >
                    <span className="text-gray-400 mr-1">→</span> source-code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Terminal Footer */}
        <div className={`mt-6 text-green-400 text-sm sm:text-base transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <span className="text-gray-400">sarthak@portfolio:~$ </span>
          <span className="text-white">cd </span>
          <span className="text-purple-300">../</span>
          <span className="text-gray-400 animate-blink">|</span>
        </div>
      </section>
    </div>
  );
}

export default Projects;