import './Projects.css';

const projects = [
  {
    name: 'Data Traceability Platform',
    badge: 'Professional',
    description: 'End-to-end system to track, audit, and debug data flow across distributed microservices. Backend in FastAPI, real-time events via Kafka, React dashboard for visualization.',
    tech: ['FastAPI', 'React', 'Kafka', 'GCP', 'Docker'],
    github: null,
    live: null,
  },
  {
    name: 'ChitChat Live',
    badge: 'Full Stack',
    description: 'Real-time chat application with WebSocket-based instant messaging, connection management for active sessions, and efficient message broadcasting.',
    tech: ['React', 'FastAPI', 'WebSockets'],
    github: 'https://github.com/riteshbirthal/chitchat-live',
    live: null,
  },
  {
    name: 'Global Chat',
    badge: 'Full Stack',
    description: 'A lightweight real-time chat application with modern UI, focusing on responsiveness and efficient message handling.',
    tech: ['React', 'Node.js', 'Socket.io'],
    github: 'https://github.com/riteshbirthal/global-chat',
    live: 'https://riteshbirthal.github.io/global-chat',
  },
  {
    name: 'Virtual Mouse',
    badge: 'Computer Vision',
    description: 'Computer vision-based virtual mouse using hand gesture tracking. Controls cursor movement and mouse clicks through real-time image processing.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
    github: 'https://github.com/riteshbirthal/virtual-mouse',
    live: null,
  },
  {
    name: 'Gesture-Based Game',
    badge: 'AI/ML',
    description: 'Rock-Paper-Scissors game with real-time gesture recognition. Implemented CV pipelines and game logic with smooth rendering.',
    tech: ['Python', 'Pygame', 'OpenCV', 'MediaPipe'],
    github: 'https://github.com/riteshbirthal/gesture-game',
    live: null,
  },
  {
    name: 'Restaurant App',
    badge: 'Full Stack',
    description: 'Full-stack web application with secure authentication, food ordering system, and table pre-booking functionality.',
    tech: ['Python', 'Django', 'PostgreSQL'],
    github: 'https://github.com/riteshbirthal/restaurant-app',
    live: null,
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>Projects</h2>
        <p>A selection of projects I've built and contributed to</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <span className="project-badge">{project.badge}</span>
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span className="project-tech-tag" key={i}>{tech}</span>
              ))}
            </div>
            {(project.github || project.live) && (
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
