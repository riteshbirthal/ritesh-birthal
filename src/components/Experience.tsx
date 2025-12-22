import './Experience.css';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Carelon Global Solutions',
    duration: 'Jul 2023 – Oct 2025',
    tech: ['FastAPI', 'Kafka', 'Python', 'GCP', 'Docker', 'React', 'PostgreSQL', 'MongoDB'],
    achievements: [
      {
        text: 'Architected high-performance FastAPI microservices processing large datasets from Google Cloud Storage using event-based triggers',
        highlight: 'FastAPI microservices'
      },
      {
        text: 'Implemented async streaming, batch processing, and Kafka publishing, reducing processing latency by ~40%',
        highlight: '~40% latency reduction'
      },
      {
        text: 'Designed Kafka producers with exactly-once processing using idempotence and DLQ strategies, improving throughput by ~20%',
        highlight: '~20% throughput improvement'
      },
      {
        text: 'Built custom structured logging framework with correlation IDs integrated with GCP Logging, reducing debugging time from hours to minutes',
        highlight: 'hours to minutes'
      },
      {
        text: 'Led development of a full-stack data traceability platform under strict 3-week deadline with zero post-release defects',
        highlight: 'zero defects'
      },
      {
        text: 'Created extensive Pytest suites achieving 90%+ code coverage with mocked Kafka/GCS/DB modules',
        highlight: '90%+ coverage'
      },
      {
        text: 'Deployed Dockerized microservices with multi-stage builds and GKE autoscaling, improving startup performance by ~30%',
        highlight: '~30% faster startup'
      },
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Techwink Services',
    duration: 'May 2021 – Jul 2021',
    tech: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Elementor', 'WooCommerce'],
    achievements: [
      {
        text: 'Designed and developed responsive websites using WordPress and plugins like Elementor, Dokan, and WooCommerce',
        highlight: 'responsive websites'
      },
      {
        text: 'Enhanced website functionality using HTML, CSS, JavaScript, and PHP for improved user experience',
        highlight: 'enhanced functionality'
      },
      {
        text: 'Implemented secure payment plugins for seamless online transactions and e-commerce capabilities',
        highlight: 'secure payment plugins'
      },
    ],
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <h2>Professional Experience</h2>
        <p>Building scalable systems and leading engineering initiatives</p>
      </div>
      
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-card-header">
              <div className="experience-title">
                <h3>{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>
              <span className="experience-duration">{exp.duration}</span>
            </div>
            
            <div className="experience-achievements">
              {exp.achievements.map((achievement, i) => (
                <div className="achievement-item" key={i}>
                  <div className="achievement-icon"></div>
                  <p className="achievement-text">{achievement.text}</p>
                </div>
              ))}
            </div>
            
            <div className="experience-tech">
              {exp.tech.map((tech, i) => (
                <span className="tech-tag" key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
