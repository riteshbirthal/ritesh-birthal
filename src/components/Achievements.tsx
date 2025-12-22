import './Achievements.css';

const achievements = [
  {
    icon: '🏆',
    title: '6 Formal Recognitions',
    description: 'Honored with 6 formal recognitions for outstanding leadership and key contributions to high-performing teams and mission-driven projects.',
    category: 'Leadership',
  },
  {
    icon: '🥇',
    title: 'Best Project Implementation',
    description: 'Received recognition for Best Project Implementation for the Ewall project, demonstrating excellence in execution and delivery.',
    category: 'Project Excellence',
  },
  {
    icon: '🎓',
    title: 'Academic Excellence at IIT Kanpur',
    description: 'Demonstrated outstanding academic performance with A* grades in 2 courses and A grades in 10 courses during BS-MS studies at IIT Kanpur.',
    category: 'Academic',
  },
];

const extraCurriculars = [
  {
    icon: '💻',
    title: '1000+ LeetCode Problems',
    description: 'Solved 1000+ LeetCode problems, maintaining 500+ days streak, earning monthly badges and completing 500-day coding challenges in 2024-25.',
    stats: ['1000+ Problems', '500+ Days Streak', 'Monthly Badges'],
  },
  {
    icon: '✅',
    title: 'HackerRank Certifications',
    description: 'Successfully completed HackerRank assessments for Problem Solving (Basic & Intermediate), Python, SQL, CSS, and JavaScript (Basic & Intermediate).',
    stats: ['Problem Solving', 'Python', 'SQL', 'JavaScript', 'CSS'],
  },
  {
    icon: '📚',
    title: 'GFG 160 Days Challenge',
    description: 'Completed GeeksforGeeks\' 22-week "160 Days of Problem Solving" course, strengthening proficiency in data structures, algorithms, and complex coding challenges.',
    stats: ['22 Weeks', '160 Days', 'DSA Mastery'],
  },
];

const Achievements = () => {
  return (
    <div className="achievements-container">
      <div className="achievements-header">
        <h2>Achievements</h2>
        <p>Recognition and milestones throughout my journey</p>
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-card-icon">{achievement.icon}</div>
            <span className="achievement-category">{achievement.category}</span>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>

      <div className="extra-section">
        <h2>Competitive Programming & Learning</h2>
        <div className="extra-grid">
          {extraCurriculars.map((item, index) => (
            <div className="extra-card" key={index}>
              <div className="extra-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="extra-stats">
                {item.stats.map((stat, i) => (
                  <span className="extra-stat" key={i}>{stat}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="awards-cta">
        <div className="awards-cta-content">
          <div className="awards-cta-icon">🏅</div>
          <div>
            <h3>View All Awards & Certificates</h3>
            <p>Access my achievements, awards, and certification documents</p>
          </div>
        </div>
        <a href="https://drive.google.com/drive/folders/1Kq6vhZvtMrqEqNlcIkXZpa-s-eHXT-iZ?usp=drive_link" target="_blank" rel="noopener noreferrer" className="awards-cta-button">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.71 3.5L1.15 15l4.58 7.5h13.54l4.58-7.5L17.29 3.5H7.71zm-.36 1.5h9.3l5.07 9.5-3.93 6.5H5.21l-3.93-6.5L6.35 5z"/>
          </svg>
          Open Drive
        </a>
      </div>
    </div>
  );
};

export default Achievements;
