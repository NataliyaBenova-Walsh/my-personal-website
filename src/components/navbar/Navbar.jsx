import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
    return (
        <nav className="left-nav">
            <ul className="left-nav-list">
                <li className="left-nav-item"><a href="#about" className="left-nav-link">About</a></li>
                <li className="left-nav-item"><a href="#experience" className="left-nav-link">Experience</a></li>
                <li className="left-nav-item"><a href="#projects" className="left-nav-link">Projects</a></li>
                <li className="left-nav-item"><a href="#contacts" className="left-nav-link">Contacts</a></li>
                <li className="left-nav-item left-nav-socials">
                    <a href="https://www.linkedin.com/in/nataliyawalsh/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon className="contact-icons" icon={faLinkedinIn} />
                    </a>
                    <a href="https://github.com/NataliyaBenova-Walsh" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon className="contact-icons" icon={faGithub} />
                    </a>
                    <a href="mailto:nataliyawalsh@gmail.com" aria-label="Email">
                        <FontAwesomeIcon className="contact-icons" icon={faEnvelope} />
                    </a>
                </li>
            </ul>
        </nav>
    )
}
