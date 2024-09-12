import './App.css';

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
};

function SkillList(props){
  // console.log(props);
  return (
      <div className="skill-list" >
        <Skill skill='HTML+CSS' emoji='💪' color="blue" />
        <Skill skill='JavaScript' emoji='🤴' color="yellow" />
        <Skill skill='Web Design' emoji='👼' color="#123456" />
        <Skill skill='Git and GitHub' emoji='👍' color="orangered" />
        <Skill skill='React' emoji='💪' color="skyblue" />
        <Skill skill='Svelte' emoji='👲' color="red" />
  </div>
  );
  
};

function Avatar(){
  return  <img src="./avatar.jpeg" className="avatar" alt="Lukmon Aminu" />
};

function Intro(){
  return (
  <div>

  <h1>Aminu Lukmon</h1>
  <p>Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach</p>
  </div>
  )
}

function Skill(props){
  // console.log(props);
  return (
      <div className="skill" style={{ backgroundColor: props.color}}>
     <span>{props.skill}</span>
     <span>{props.emoji}</span>
  </div>
  );
  
};

export default App;
