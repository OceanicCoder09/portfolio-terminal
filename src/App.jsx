import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Project'
import ConnectWithMe from './pages/ConnectWithMe'
import Skills from './pages/Skills'
import Coding from './pages/CodingProf'
import Resume from './pages/Resume'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/connect" element={<ConnectWithMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  )
}

export default App
