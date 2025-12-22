import './Education.css';

const education = [
  {
    degree: 'BS-MS Dual Degree',
    field: 'Physics',
    institution: 'Indian Institute of Technology (IIT) Kanpur',
    duration: '2018 - 2023',
    grade: 'CGPA: 9/10',
    highlights: [
      'Self-learned software development and successfully transitioned into the tech industry',
      'Applied strong analytical and computational skills from Physics to software engineering',
    ],
  },
  {
    degree: 'Higher Secondary (XII)',
    field: 'Science (PCM)',
    institution: 'St. Paul Sr. Sec. School, Sikar (Rajasthan)',
    duration: '2016 - 2018',
    grade: '85%',
    highlights: [],
  },
  {
    degree: 'Secondary (X)',
    field: 'General',
    institution: 'Updesh Sr. Sec. School Noonsar, Bhiwani (Haryana)',
    duration: '2016',
    grade: '92.8%',
    highlights: [],
  },
];

const coursework = {
  'Computer Science': [
    'Fundamentals of Computing',
    'Data Structures and Algorithms',
    'Computational Sciences & Engineering',
    'Computational Physics',
    'Image Processing',
    'Introduction to Machine Learning',
  ],
  'Mathematics': [
    'Applied Probability and Statistics',
    'Advanced Numerical Methods',
    'Differential Equations',
  ],
  'Coursera Certifications': [
    'Programming in Python',
    'Intro to Backend Development',
    'Version Control',
    'Introduction to Database',
    'Introduction to Software Engineering',
    'Azure Rest API NodeJS',
    'Google Cybersecurity',
    'Penetration Testing, Incident Response & Forensics',
  ],
  'GeeksforGeeks Courses': [
    'MongoDB Developer\'s Toolkit: CRUD with Node.js, Java, Python, C#',
    'GFG 160 - 160 Days of Problem Solving',
    '100 Days of Interview Puzzles - Skill Up',
    'System Design',
    'CS Core Subjects',
  ],
};

const Education = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <h2>Education</h2>
        <p>My academic journey and qualifications</p>
      </div>

      <div className="education-timeline">
        {education.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="education-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
              </svg>
            </div>
            <div className="education-content">
              <div className="education-card-header">
                <div>
                  <h3>{edu.degree}</h3>
                  <p className="education-field">{edu.field}</p>
                  <p className="education-institution">{edu.institution}</p>
                </div>
                <div className="education-meta">
                  <span className="education-duration">{edu.duration}</span>
                  <span className="education-grade">{edu.grade}</span>
                </div>
              </div>
              {edu.highlights.length > 0 && (
                <ul className="education-highlights">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="coursework-section">
        <h2>Relevant Coursework</h2>
        <div className="coursework-grid">
          {Object.entries(coursework).map(([category, courses], index) => (
            <div className="coursework-card" key={index}>
              <h3>{category}</h3>
              <div className="coursework-tags">
                {courses.map((course, i) => (
                  <span className="coursework-tag" key={i}>{course}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certificates-cta">
          <div className="certificates-content">
            <div className="certificates-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
            </div>
            <div>
              <h3>View All Certificates</h3>
              <p>Access my course completion certificates and credentials</p>
            </div>
          </div>
          <a href="https://drive.google.com/drive/folders/1g6tog7RRSCWncD0CJLiLzum8OBGsBBcz?usp=sharing" target="_blank" rel="noopener noreferrer" className="certificates-button">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.71 3.5L1.15 15l4.58 7.5h13.54l4.58-7.5L17.29 3.5H7.71zm-.36 1.5h9.3l5.07 9.5-3.93 6.5H5.21l-3.93-6.5L6.35 5z"/>
            </svg>
            Open Drive
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
