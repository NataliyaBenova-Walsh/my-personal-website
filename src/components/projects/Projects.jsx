import amaAppImage from '../../assets/amaapp-home.webp'
import amaSiteImage from '../../assets/ama-home.webp'
import semantifaiImage from '../../assets/semantifai-home.webp'
import myhaccpImage from '../../assets/MyHACCP_1.webp'

const projects = [
    {
        title: 'AMA Coach — App',
        image: amaAppImage,
        description:
            'Web app for an AI-powered coaching product. Leading the frontend — building the user-facing UI and a WebSocket integration that powers realtime AI conversations.',
        tech: ['React', 'TypeScript', 'Tailwind', 'shadcn/ui', 'WebSocket'],
        links: [{ label: 'Live app →', url: 'https://app.amacoach.ai/' }],
    },
    {
        title: 'AMA Coach — Site',
        image: amaSiteImage,
        description:
            'Marketing site for AMA Coach. Designed and built in Webflow with a focus on responsive layout and brand consistency.',
        tech: ['Webflow'],
        links: [{ label: 'Live site →', url: 'https://amacoach.ai/' }],
    },
    {
        title: 'SemantifAI',
        image: semantifaiImage,
        description:
            'Designed and built the marketing site for SemantifAI, an AI product studio. Responsive, performance-focused, and aligned with the brand identity.',
        tech: ['Next.js', 'shadcn/ui', 'Tailwind'],
        links: [{ label: 'Live site →', url: 'https://semantif.ai/' }],
    },
    {
        title: 'MyHACCP',
        image: myhaccpImage,
        description:
            'A web application for creating and monitoring HACCP food-safety plans — used to manage hazard analysis and compliance tracking.',
        tech: ['React', 'TypeScript', 'Tailwind', 'shadcn/ui'],
        status: 'Private project — not publicly available',
    },
]

const clientWork = [
    {
        name: 'SVIB',
        url: 'https://svib.se/',
        summary: 'Full redesign with a new theme, ongoing updates and maintenance.',
    },
    {
        name: 'Soldia Travel',
        url: 'https://soldiastravel.com/',
        summary: 'Added multilingual support and ongoing maintenance.',
    },
    {
        name: 'Slanchevo',
        url: 'https://slanchevo.com/',
        summary: 'Built and integrated an AI chatbot teaching assistant.',
    },
    {
        name: 'Bulgariska Föreningen',
        url: 'https://www.bulgariskaforeningen.com/',
        summary: 'Ongoing maintenance and updates.',
    },
]

export const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2 className="section-title">Projects</h2>
            <ul className="projects-list">
                {projects.map((project) => (
                    <li key={project.title} className="project-card">
                        {project.image && (
                            <img
                                className="project-image"
                                src={project.image}
                                alt={`${project.title} screenshot`}
                                loading="lazy"
                            />
                        )}
                        <div className="project-body">
                            <h3 className="project-title">{project.title}</h3>
                            <p>{project.description}</p>
                            <ul className="project-tech">
                                {project.tech.map((t) => (
                                    <li key={t}>{t}</li>
                                ))}
                            </ul>
                            {project.status ? (
                                <div className="project-status">{project.status}</div>
                            ) : (
                                <div className="project-links">
                                    {project.links.map((link) => (
                                        <a
                                            key={link.url}
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

            <h3 className="subsection-title">Client Work</h3>
            <ul className="client-work-list">
                {clientWork.map((item) => (
                    <li key={item.url} className="client-work-item">
                        <a
                            className="client-work-name"
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {item.name} →
                        </a>
                        <span className="client-work-summary">{item.summary}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
