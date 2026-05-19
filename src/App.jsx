import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import { Home } from './components/home/Home'
import { Navbar } from './components/navbar/Navbar'
import { About } from './components/about/About'
import { Header } from './components/header/Header'
import { Experience } from './components/experience/Experience'
import { Projects } from './components/projects/Projects'

const education = [
  {
    school: 'Software University',
    location: 'Sofia, Bulgaria',
    degree: 'JavaScript Web Developer',
    period: '2021 — 2023',
  },
  {
    school: 'University of National and World Economy',
    location: 'Sofia, Bulgaria',
    degree: 'Bachelor in Economy',
    period: '2003 — 2007',
  },
]

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Navbar />
        <main className="main-container">
          <Home />
          <About />
          <section id="education" className="section">
            <h2 className="section-title">Education</h2>
            <ul className="education-list">
              {education.map((item) => (
                <li key={item.school} className="education-item">
                  <div className="education-period">{item.period}</div>
                  <div className="education-body">
                    <h3 className="education-school">{item.school}</h3>
                    <div className="education-degree">{item.degree}</div>
                    <div className="education-location">{item.location}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <Experience />
          <Projects />
          <section id="contacts" className="section cta-section">
            <h2 className="section-title">Let&apos;s work together</h2>
            <p className="cta-lead">
              Have a project in mind or want to collaborate? I&apos;m open to
              new opportunities — drop a message and I&apos;ll get back to you.
            </p>
            <ul className="contacts-list">
              <li>
                <FontAwesomeIcon className="contact-icons" icon={faEnvelope} />
                <a href="mailto:nataliyawalsh@gmail.com">nataliyawalsh@gmail.com</a>
              </li>
              <li>
                <FontAwesomeIcon className="contact-icons" icon={faLinkedinIn} />
                <a href="https://www.linkedin.com/in/nataliyawalsh/" target="_blank" rel="noreferrer">linkedin.com/in/nataliyawalsh</a>
              </li>
              <li>
                <FontAwesomeIcon className="contact-icons" icon={faGithub} />
                <a href="https://github.com/NataliyaBenova-Walsh" target="_blank" rel="noreferrer">github.com/NataliyaBenova-Walsh</a>
              </li>
            </ul>
            <a className="cv-download" href="/CV-nataliya-walsh.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
              <span>Download CV (PDF)</span>
            </a>
          </section>
        </main>
      </div>
    </>
  )
}

export default App;
