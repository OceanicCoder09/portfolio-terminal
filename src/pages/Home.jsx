import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Button from '../components/Button';
import profileImage from '../assets/profile-anime.jpg'; // Make sure to add your image to the assets folder

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I am Sarthak Mahadik.";
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sarthak_Mahadik_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-[#1e1f29] via-[#2e2f3a] to-[#1e1f29] flex items-center justify-center p-4 sm:p-6">
      {/* Hamburger Menu Button (only visible on small screens) */}
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

      {/* Main content container */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full max-w-6xl mt-24 sm:mt-0">
        {/* Anime Profile Image - Mobile (above terminal) */}
        <div className="sm:hidden w-48 h-48 relative mb-6 animate-float">
          <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-30 animate-pulse"></div>
          <img 
            src={profileImage} 
            alt="Anime-style portrait of Sarthak Mahadik"
            className="relative w-full h-full object-contain rounded-full border-4 border-green-400 shadow-lg z-10"
          />
          <div className="absolute -inset-4 border-2 border-green-300 rounded-full animate-spin-slow opacity-50"></div>
        </div>

        {/* Terminal Content */}
        <div className="bg-[#1c1c1e] border border-gray-700 rounded-xl p-4 sm:p-6 shadow-xl font-mono text-left w-full max-w-2xl animate-fade-in transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] hover:border-green-400 group">
          {/* Line 1 - Typing Animation */}
          <div className="text-green-400 text-sm sm:text-base mb-4 break-words">
            <span className="text-gray-400">sarthak@portfolio:~$ </span>
            <span className="text-white">echo </span>
            <span className="text-green-300">"{typedText}</span>
            <span className={`text-gray-400 animate-blink ${typedText.length === fullText.length ? 'opacity-100' : 'opacity-0'}`}>|</span>
            <span className="text-green-300">{typedText.length === fullText.length ? '"' : ''}</span>
          </div>

          {/* About Section */}
          {typedText.length === fullText.length && (
            <div className="text-cyan-300 text-sm sm:text-base mt-6 animate-fade-in">
              <span className="text-gray-400">sarthak@portfolio:~$ </span>
              <span className="text-white">cat </span>
              <span className="text-purple-300">about.txt</span>
              <div className="text-yellow-200 mt-2 ml-4 sm:ml-6 border-l-2 border-green-500 pl-3 sm:pl-4 py-2 transition-all duration-300 group-hover:border-green-400 text-xs sm:text-sm">
                "Full-stack developer with strong Java and DSA fundamentals"
                <div className="mt-1 text-gray-300">
                  Enjoy solving complex problems and building efficient applications.
                </div>
                <div className="mt-1 text-gray-300">
                  Focused on writing clean, maintainable code in Java and JavaScript.
                </div>
              </div>
              <span className="text-gray-400 animate-blink ml-4 sm:ml-6">|</span>
            </div>
          )}

          {/* Education Section */}
          {typedText.length === fullText.length && (
            <div className="text-cyan-300 text-sm sm:text-base mt-6 animate-fade-in delay-300">
              <span className="text-gray-400">sarthak@portfolio:~$ </span>
              <span className="text-white">cat </span>
              <span className="text-blue-300">education.txt</span>
              <div className="mt-2 ml-4 sm:ml-6 text-gray-300 space-y-1 text-xs sm:text-sm">
                <div className="text-yellow-200">Bachelor of Technology in Computer Science</div>
                <div>Walchand College of Engineering, Sangli • 2026</div>
              </div>
            </div>
          )}

          {/* Resume Download Section */}
          {typedText.length === fullText.length && (
            <div className="text-cyan-300 text-sm sm:text-base mt-6 animate-fade-in delay-500">
              <span className="text-gray-400">sarthak@portfolio:~$ </span>
              <span className="text-white">./download_resume.sh</span>
              <div className="mt-2 ml-4 sm:ml-6 text-gray-300 text-xs sm:text-sm">
                <Button
                  label="Click Here To Download My Resume"
                  variant="outline"
                  onClick={handleDownloadResume}
                />
              </div>
            </div>
          )}
        </div>

        {/* Anime Profile Image - Desktop (right side) */}
        <div className="hidden sm:block w-64 h-64 relative animate-float">
          <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <img 
            src={profileImage} 
            alt="Anime-style portrait of Sarthak Mahadik"
            className="relative w-full h-full object-contain rounded-full border-4 border-green-400 shadow-2xl z-10"
          />
          <div className="absolute -inset-6 border-2 border-green-300 rounded-full animate-spin-slow opacity-50"></div>
          <div className="absolute -inset-8 border border-green-200 rounded-full animate-spin-slower opacity-30"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;