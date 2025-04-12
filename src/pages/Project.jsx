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
    title: "Portfolio v1",
    description: "My first portfolio website built with pure React.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/sarthak/portfolio-v1",
    demo: "https://portfolio-v1.example.com"
  }
];

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-[#1e1f29] via-[#2e2f3a] to-[#1e1f29] flex flex-col items-center pt-20 pb-10 px-4 font-mono">

      {/* Navigation */}
      <div className="absolute top-6 right-6 flex gap-3 flex-wrap justify-center sm:justify-end">
        {["Home", "About Me", "Projects", "Skills", "Coding Profiles", "Connect With Me"].map((label, i) => (
          <Button
            key={i}
            label={label}
            variant="outline"
            onClick={() => navigate(`/${label.toLowerCase().replace(/\s+/g, '')}`)}
          />
        ))}
      </div>

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
