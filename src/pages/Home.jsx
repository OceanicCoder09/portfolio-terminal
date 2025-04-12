import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Button from '../components/Button';

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I am Sarthak Mahadik.";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/resume.pdf'; // Place your resume in public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sarthak_Mahadik_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#1e1f29] via-[#2e2f3a] to-[#1e1f29] flex items-center justify-center">
      <div className='absolute top-6 right-6 flex gap-4 flex-wrap'>
        <Button label="Home" variant="outline" onClick={() => navigate('/')} />
        <Button label="About Me" variant="outline" onClick={() => navigate('/about')} />
        <Button label="Projects" variant="outline" onClick={() => navigate('/projects')} />
        <Button label="Skills" variant="outline" onClick={() => navigate('/skills')} />
        <Button label="Coding Profiles" variant="outline" onClick={() => navigate('/coding')} />
        <Button label="Connect With Me" variant="outline" onClick={() => navigate('/connect')} />
      </div>

      <div className="bg-[#1c1c1e] border border-gray-700 rounded-xl p-6 shadow-xl font-mono text-left w-[90%] max-w-2xl animate-fade-in transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] hover:border-green-400 group">
        {/* Line 1 - Name with typing animation */}
        <div className="text-green-400 text-base md:text-lg mb-4">
          <span className="text-gray-400">sarthak@portfolio:~$ </span>
          <span className="text-white">echo </span>
          <span className="text-green-300">"{typedText}</span>
          <span className={`text-gray-400 animate-blink ${typedText.length === fullText.length ? 'opacity-100' : 'opacity-0'}`}>|</span>
          <span className="text-green-300">{typedText.length === fullText.length ? '"' : ''}</span>
        </div>

        {/* Line 2 - About - appears after typing completes */}
        {typedText.length === fullText.length && (
          <div className="text-cyan-300 text-sm md:text-base mt-6 animate-fade-in">
            <span className="text-gray-400">sarthak@portfolio:~$ </span>
            <span className="text-white">cat </span>
            <span className="text-purple-300">about.txt</span>
            <div className="text-yellow-200 mt-2 ml-6 border-l-2 border-green-500 pl-4 py-2 transition-all duration-300 group-hover:border-green-400">
              "Full-stack developer with strong Java and DSA fundamentals"
              <div className="mt-1 text-gray-300 text-xs md:text-sm">
                Enjoy solving complex problems and building efficient applications.
              </div>
              <div className="mt-1 text-gray-300 text-xs md:text-sm">
                Focused on writing clean, maintainable code in Java and JavaScript.
              </div>
            </div>
            <span className="text-gray-400 animate-blink ml-6">|</span>
          </div>
        )}

        {/* Education Section */}
        {typedText.length === fullText.length && (
          <div className="text-cyan-300 text-sm md:text-base mt-6 animate-fade-in delay-300">
            <span className="text-gray-400">sarthak@portfolio:~$ </span>
            <span className="text-white">cat </span>
            <span className="text-blue-300">education.txt</span>
            <div className="mt-2 ml-6 text-gray-300 space-y-1 text-xs md:text-sm">
              <div className="text-yellow-200">Bachelor of Technology in Computer Science</div>
              <div>Walchand College of Engineering, Sangli • 2023</div>
            </div>
          </div>
        )}

        {/* Resume Download CTA inside terminal */}
        {typedText.length === fullText.length && (
          <div className="text-cyan-300 text-sm md:text-base mt-6 animate-fade-in delay-500">
            <span className="text-gray-400">sarthak@portfolio:~$ </span>
            <span className="text-white">./download_resume.sh</span>
            <div className="mt-2 ml-6 text-gray-300 text-xs md:text-sm">
              <Button 
              label = "Click Here To Download My Resume"
              variant='outline'
              onClick={handleDownloadResume}
    
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;