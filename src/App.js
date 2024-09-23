import { StrictMode } from "react";
import './App.css';

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skillObj, index) => (
        <Skill 
          key={index} // Add a key prop when mapping
          skill={skillObj.skill} 
          color={skillObj.color} 
          level={skillObj.level} 
        />
      ))}
    </div>
  );
}

function Avatar() {
  return <img src="./avatar.jpeg" className="avatar" alt="Lukmon Aminu" />;
}

function Intro() {
  return (
    <div>
      <h1>Aminu Lukmon</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or preparing a course,
        I like to play board games, cook (and eat), or just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function Skill({ skill, color, level }) {
  const levelIcon = {
    beginner: '👲',
    intermediate: '👍',
    advanced: '💪',
  };

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{levelIcon[level]}</span>
    </div>
  );
}

export default App;
