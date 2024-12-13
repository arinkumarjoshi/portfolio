import React, { useState } from "react";
import "./App.css";
import round from "./image/round.jpg";
import Resume from "./image/Resume.pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import cert1 from './image/cert1.jpg';
import cert2 from './image/cert2.jpg';
import cert3 from './image/cert3.jpg';
import cert4 from './image/cert4.jpg';
import cert5 from './image/cert5.jpg';
import cert6 from './image/cert6.jpg';
import cert7 from './image/cert7.jpeg';
import cert8 from './image/cert8.png';
import cert9 from './image/cert9.jpg';
import cert10 from './image/cert10.jpg';
import cert11 from './image/cert11.jpg';
import cert12 from './image/cert12.jpg';


const App = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const toggleSkill = (skill) => {
    setActiveSkill(activeSkill === skill ? null : skill);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <a className="navbar-brand" href="#home">
  <img 
    src="https://yt3.googleusercontent.com/W8jIzrjnuLRLDrsGbk3ZwWB-YHq-wmdQ7Otafz3vPvSivC9zQtaeXvh-VcVCLog402rfDb3a=s160-c-k-c0x00ffffff-no-rj" 
    alt="WHO IS Arin" 
    style={{ 
      width: '50px', 
      height: '50px', 
      borderRadius: '50%', 
      objectFit: 'cover' 
    }} 
  />
</a>


          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {["About", "Skills", "Experience", "Other", "Contact"].map((item, idx) => (
                <li key={idx} className="nav-item">
                  <a className="nav-link" href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
              <li className="nav-item">
                <a className="nav-link btn btn-warning text-white" href={Resume} download>
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

{/* About Section */}
<section id="about" className="section">
  <div className="container d-flex flex-column-reverse flex-lg-row align-items-center">
    <div className="about-left me-lg-5 text-center text-lg-start">
      <h1 className="about-heading">Hey! I'M Arin Joshi</h1>
      <div className="about-content">
        <p>
          To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.
          Secure a responsible career opportunity to fully utilize my training and skills while making a significant
          contribution to the success of the company.
        </p>
        <p>
          Born on May 9, 2003, hailing from Raniwara, Sanchor, Rajasthan.
        </p>
      </div>
    </div>
    <div className="about-right text-center">
      <img src={round} alt="profile" className="round-image" />
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="section bg-dark">
  <div className="container">
    <h2 className="section-heading text-center">Skills</h2>
    <div className="row">
      {[
        "Java", "C", "HTML", "CSS", "React.js", "DSA", "SQL", "JavaScript"
      ].map((skill, idx) => (
        <div key={idx} className="col-lg-3 col-md-4 col-sm-6">
          <div 
            className={`skill-card ${activeSkill === skill ? 'active-skill' : ''}`}
            onClick={() => toggleSkill(skill)}
          >
            <h3>{skill}</h3>
          </div>
        </div>
      ))}
    </div>

    {activeSkill && (
      <div className="skill-description">
        <h3>{activeSkill} - Detailed Information</h3>
        <p>
          {activeSkill === "Java" && "Java is used in backend development to build scalable and secure web applications with frameworks like Spring and Hibernate."}
          {activeSkill === "C" && "C is essential for system-level programming and lays the foundation for understanding performance optimization and system processes."}
          {activeSkill === "HTML" && "HTML is the backbone of all webpages, defining the structure and content on the web."}
          {activeSkill === "CSS" && "CSS controls the appearance of a webpage, defining styles, layouts, and responsive design."}
          {activeSkill === "React.js" && "React.js is a JavaScript library used for building dynamic user interfaces and single-page applications."}
          {activeSkill === "DSA" && "Data Structures and Algorithms are essential for optimizing web applications and improving performance."}
          {activeSkill === "SQL" && "SQL is used to manage and query relational databases, essential for back-end web development."}
          {activeSkill === "JavaScript" && "JavaScript makes web pages dynamic, interactive, and user-friendly, with frameworks like Node.js enabling server-side development."}
        </p>
      </div>
    )}
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-heading text-center">Projects</h2>
          <div className="row">
            {[
              { title: "Restaurant Website", description: "Modern single-page restaurant website with sleek design, smooth navigation, and responsive layout.", link: "#" },
              { title: "Company Website", description: "Professional, fully responsive IT company website with dynamic components, animations, and a premium user experience.", link: "http://kotiboxglobaltech.com/" },
              { title: "Weather App", description: "Real-time weather app using React, providing weather updates, interactive icons, and a smooth user experience.", link: "#" },
            ].map((project, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} className="btn view-project-btn">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-heading text-center">Experience</h2>
          <div className="row">
            {[
              { company: "Celebal Technology", location: "Jaipur", duration: "May 2023 - Aug 2023" },
              { company: "Kotibox Global Technologies", location: "Jaipur", duration: "Jan 2024 - Present" },
            ].map((exp, idx) => (
              <div key={idx} className="col-md-6">
                <div className="experience-card shadow p-3">
                  <h3>{exp.company}</h3>
                  <p>{exp.location}</p>
                  <p>Duration: {exp.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Section */}
      {/* Other Section */}
<section id="other" className="section bg-light">
  <div className="container">
    <h2 className="section-heading text-center">Other</h2>

    {/* Soft Skills Section */}
    <div className="soft-skills">
      <h3>Soft Skills</h3>
      <ul className="skills-list">
        <li>🎨 Canva - 2 years experience</li>
        <li>🎞️ Video Editing - 4 years experience</li>
        <li>📷 Photo Editing - 4 years experience</li>
        <li>🖌️ UI Designing - 2 years experience</li>
        <li>💡 Logo Designing - 2 years experience</li>
      </ul>
    </div>

    {/* Social Media Section */}
    {/* Social Media Section */}
<div className="social-media">
  <h3>Social Media</h3>
  <div className="social-icons">
    {["instagram", "linkedin", "youtube", "snapchat", "facebook", "github"].map((platform, index) => {
      const links = [
        "https://www.instagram.com/arinjoshi/",
        "https://www.linkedin.com/in/arinkumarjoshi/",
        "https://www.youtube.com/@ArinJoshi",
        "https://snapchat.com/t/59QAMMfu",
        "https://www.facebook.com/share/m36gpQd5GpydTZEe/?mibextid=LQQJ4d",
        "https://github.com/arinkumarjoshi"
      ];

      return (
        <a
          key={platform}
          href={links[index]}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className={`fab fa-${platform}`}></i>
        </a>
      );
    })}
  </div>
</div>

  </div>
</section>

{/* Certification Section */}
<section id="certification" className="section bg-dark">
      <div className="container">
        <h2 className="section-heading text-center">Certification</h2>
        <div className="certification-grid">
          {[cert1,cert2,cert3,cert4,cert5,cert6,cert8,cert9,cert10,cert12].map((cert, idx) => (
            <div key={idx} className="certification-card">
              <a href={cert} target="_blank" rel="noopener noreferrer">
                <img src={cert} alt={`Certificate ${idx + 1}`} className="cert-image" />
                <div className="card-overlay">
                  <span className="card-text">View Certificate</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-heading text-center">Contact Me</h2>
          <form className="contact-form mx-auto" style={{ maxWidth: "600px" }}>
            <input type="text" className="form-control mb-3" placeholder="Name" required />
            <input type="tel" className="form-control mb-3" placeholder="Phone Number" required />
            <input type="email" className="form-control mb-3" placeholder="Email" required />
            <textarea className="form-control mb-3" placeholder="Message" rows="5" required></textarea>
            <button type="submit" className="btn btn-warning w-100">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-center text-white py-3">
        <p>© 2024 Arin Joshi. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
