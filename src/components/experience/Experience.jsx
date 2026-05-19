const roles = [
    {
        company: 'SemantifAI',
        title: 'Frontend Developer',
        location: 'Remote',
        period: 'Mar 2024 — Present',
        bullets: [
            'Designing and implementing user interfaces in an AI-driven product, improving usability and engagement.',
            'Building scalable web applications with React and Next.js, focused on performance and maintainability.',
            'Creating responsive layouts optimised for desktop and mobile.',
            'Collaborating with stakeholders to refine requirements and align delivery with business goals.',
        ],
    },
    {
        company: 'Aspar Software (CraftGenie)',
        title: 'Frontend Developer Intern',
        location: 'Remote',
        period: 'Nov 2023 — Mar 2024',
        bullets: [
            'Developed prototype applications for clients using AI-powered solutions.',
            'Worked on a tool that rapidly generates client prototypes, leveraging AI to expedite development cycles.',
            'Built intuitive UIs with React and Next.js, improving client experience and application usability.',
        ],
    },
]

export const Experience = () => {
    return (
        <section id="experience" className="section">
            <h2 className="section-title">Experience</h2>
            <ol className="timeline">
                {roles.map((role) => (
                    <li key={role.company} className="timeline-item">
                        <div className="timeline-period">{role.period}</div>
                        <h3 className="experience-role">
                            {role.title} · <span className="experience-company">{role.company}</span>
                        </h3>
                        <div className="experience-location">{role.location}</div>
                        <ul className="experience-bullets">
                            {role.bullets.map((bullet, i) => (
                                <li key={i}>{bullet}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </section>
    )
}
