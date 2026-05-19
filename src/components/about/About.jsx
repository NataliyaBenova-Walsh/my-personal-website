const primarySkills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind',
    'shadcn/ui',
    'HTML & CSS',
    'WordPress',
    'Webflow',
    'Git',
]

const familiarSkills = ['Node.js', 'MongoDB', 'Angular']

const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Swedish', level: 'Intermediate' },
    { name: 'Bulgarian', level: 'Native' },
]

export const About = () => {
    return (
        <section id="about" className="section">
            <h2 className="section-title">About</h2>
            <p>
                A dedicated and results-driven Frontend developer with a strong
                command of JavaScript, TypeScript, and HTML/CSS, alongside
                expertise in modern frameworks like React and Next.js. I build
                responsive, user-focused applications and continuously seek
                opportunities to apply and expand my skills in impactful
                projects that prioritize seamless user experiences and
                performance.
            </p>

            <h3 className="skills-heading">Primary stack</h3>
            <ul className="skills-list">
                {primarySkills.map((skill) => (
                    <li key={skill} className="skills-item">{skill}</li>
                ))}
            </ul>

            <h3 className="skills-heading">Also worked with</h3>
            <ul className="skills-list">
                {familiarSkills.map((skill) => (
                    <li key={skill} className="skills-item skills-item-familiar">{skill}</li>
                ))}
            </ul>

            <h3 className="skills-heading">Languages</h3>
            <ul className="languages-list">
                {languages.map((lang) => (
                    <li key={lang.name} className="languages-item">
                        <span className="languages-name">{lang.name}</span>
                        <span className="languages-level">{lang.level}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
