import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    skills: ['Python', 'C++', 'C', 'JavaScript', 'SQL', 'Bash', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚡',
    skills: ['FastAPI', 'Django', 'Flask', 'React', 'Node.js', 'Express'],
  },
  {
    title: 'Databases & Cloud',
    icon: '☁️',
    skills: ['Kafka', 'PostgreSQL', 'MongoDB', 'Docker', 'GCP', 'GKE', 'Git'],
  },
  {
    title: 'Core Foundations',
    icon: '🎯',
    skills: ['Data Structures', 'Algorithms', 'System Design', 'Distributed Systems', 'Operating Systems'],
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-header">
        <h2>Technical Skills</h2>
        <p>Technologies and concepts I work with</p>
      </div>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <div className="skill-category-header">
              <div className="skill-category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
            </div>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span className="skill-tag" key={skillIndex}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
