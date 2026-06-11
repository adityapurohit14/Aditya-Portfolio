import "./App.css";
import { Routes, Route } from "react-router-dom";
import VigilantEye from "./pages/VigilantEye";
import SoilSentinel from "./pages/SoilSentinel";

function Home() {

const projects = [
{
title: "Vigilant Eye 2.0",
description:
"AI-powered surveillance system using YOLOv8 for face, intruder and animal detection with real-time alerts and database logging.",
tech: ["Python", "YOLOv8", "OpenCV", "MySQL"]
},
{
title: "Soil Sentinel AI",
description:
"Smart agricultural intelligence system that analyzes soil health and provides crop recommendations using Machine Learning.",
tech: ["Python", "ML", "Streamlit", "Data Analytics"]
},
{
title: "Smart Inventory Reorder System",
description:
"Inventory management solution with automated reorder prediction and sales tracking.",
tech: ["Python", "Tkinter", "Machine Learning"]
},
{
title: "House Price Prediction",
description:
"Machine learning application that predicts house prices using historical market data.",
tech: ["Python", "Pandas", "Scikit-Learn"]
}
];

return ( <div className="app">
  <nav className="navbar">
  <h3 className="logo">AP</h3>

  <div className="nav-links">
    <a href="#about">About</a>
    <a href="#education">Education</a>
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

```
  <section className="hero">
    <div className="profile-container">
  <img
    src="/AdityaRe.jpg"
    alt="Aditya Purohit"
    className="profile-pic"
  />
</div>
    <h1>ADITYA PUROHIT A</h1>

    <h2 style={{ color: "#00F5FF" }}>
      AI Developer • Machine Learning Engineer • Python Developer
    </h2>

    <p>
      Building intelligent systems using Artificial Intelligence,
      Computer Vision and Machine Learning.
    </p>

    <div style={{ marginTop: "30px" }}>
      <a href="#projects" className="btn">
        View Projects
      </a>

      <a href="/resume.pdf" className="btn" download>
        Download Resume
      </a>
    </div>
  </section>

  <section id="about" className="section">
    <h2>About Me</h2>

    <p style={{ color: "#CBD5E1", lineHeight: "1.8" }}>
     MCA student passionate about Artificial Intelligence, Machine Learning and Computer Vision. 
     I enjoy creating innovative software solutions that solve real-world problems using modern technologies.
    </p>
  </section>

  <section className="section">
    <h2>Achievements</h2>

    <div className="stats">
      <div className="stat">
        <h1>3+</h1>
        <p>Major Projects</p>
      </div>

      <div className="stat">
        <h1>10+</h1>
        <p>Technologies</p>
      </div>

      <div className="stat">
        <h1>2+</h1>
        <p>AI Systems</p>
      </div>

      <div className="stat">
        <h1>1000+</h1>
        <p>Hours Coding</p>
      </div>
    </div>
  </section>

  {/* EDUCATION */}

<section id="education" className="section">
  <h2>Education</h2>

  <div className="card">
    <h3>Master of Computer Applications (MCA)</h3>
    <p>PES University</p>
    <p>2025 - 2027</p>
  </div>

  <br />

  <div className="card">
    <h3>Bachelor of Computer Applications (BCA)</h3>
    <p>RNS First Grade College</p>
    <p>2022 - 2025</p>
  </div>
</section>

  {/* EXPERIENCE */}

<section id="experience" className="section">
  <h2>Internship Experience</h2>

  <div className="card">

    <h3>Ai/Ml Intern</h3>
    <h3>Feb2025-March-2025</h3>

    <p>
      Worked on Artificial Intelligence and Machine Learning projects
      involving Speech Recognition, Computer Vision, and IoT Integration.
    </p>

    <ul>
      <li>Developed Speech-to-Text systems</li>
      <li>Implemented Text-to-Speech modules</li>
      <li>Built House Surveillance System</li>
      <li>Worked with OpenCV camera integration</li>
      <li>Used Ubidots for IoT data handling</li>
      <li>Created real-time monitoring applications</li>
    </ul>

  </div>
</section>
  {/* TECH STACK */}

<section id="tech-stack" className="section">
  <h2>Tech Stack</h2>

  <div className="projects">

    <div className="card">
      <h3>Frontend</h3>

      <ul>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </div>

    <div className="card">
      <h3>Backend</h3>

      <ul>
        <li>Python</li>
        <li>MySQL</li>
      </ul>
    </div>

    <div className="card">
      <h3>AI / ML</h3>

      <ul>
        <li>Machine Learning</li>
        <li>YOLOv8</li>
        <li>OpenCV</li>
      </ul>
    </div>

    <div className="card">
      <h3>Tools</h3>

      <ul>
        <li>GitHub</li>
        <li>VS Code</li>
        <li>Streamlit</li>
      </ul>
    </div>

  </div>
</section>

<section id="projects" className="section">
  <h2>Featured Projects</h2>

  <div className="projects">
    {projects.map((project, index) => (
      <div className="card" key={index}>
        <h3>{project.title}</h3>

```
    <p style={{ color: "#CBD5E1" }}>
      {project.description}
    </p>

    <div>
      {project.tech.map((tech, i) => (
        <span className="tech" key={i}>
          {tech}
        </span>
      ))}
    </div>

    <br />

    {project.title === "Vigilant Eye 2.0" ? (
      <button
        className="btn"
        onClick={() => window.location.href = "/vigilant-eye"}
      >
        View Project
      </button>
    ) : project.title === "Soil Sentinel AI" ? (
      <button
        className="btn"
        onClick={() => window.location.href = "/soil-sentinel"}
      >
        View Project
      </button>
    ) : (
      <button className="btn">
        View Project
      </button>
    )}
  </div>
))}
```

  </div>
</section>


  <section id="contact" className="section">
  <h2>Contact Me</h2>

  <div className="card">

    <p>
      📧 Email:
      aditya.purohita14@gmail.com
    </p>

    <p>
  💻 GitHub:
  <a
    href="https://github.com/adityapurohit14"
    target="_blank"
    rel="noreferrer"
  >
    github.com/adityapurohit14
  </a>
</p>

<p>
  🔗 LinkedIn:
  <a
    href="https://www.linkedin.com/in/aditya-purohit-a-7b6813314/"
    target="_blank"
    rel="noreferrer"
  >
    linkedin.com/in/aditya-purohit-a-7b6813314
  </a>
</p>
  </div>
</section>

</div>


);
}

function App() {
return ( <Routes>
<Route path="/" element={<Home />} />
<Route path="/vigilant-eye" element={<VigilantEye />} />
<Route path="/soil-sentinel" element={<SoilSentinel />} /> </Routes>
);
}

export default App;
