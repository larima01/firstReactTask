import { useState } from "react";
import "../accord.css"

const faqs = [
  {
    title: "What is the benefit of using a task management app?",
    text:
      "A task management app helps you stay organized by allowing you to prioritize tasks, set deadlines, and track progress. It increases productivity by keeping all your to-do lists in one place and sending reminders for upcoming tasks, ensuring you never miss important deadlines."
  },
  {
    title: "How can I improve the battery life of my smartphone?",
    text:
      "To extend your smartphone's battery life, reduce screen brightness, turn off unnecessary notifications, disable location services when not in use, and close background apps. Using battery-saving modes and minimizing app refresh rates can also significantly reduce battery consumption."
  },
  {
    title: "What is cloud storage, and how does it work?",
    text:
      "Cloud storage allows you to store files online instead of on your device’s local storage. Files are uploaded to remote servers, making them accessible from any internet-connected device. This ensures data is safe from local hardware failures and allows easy file sharing and collaboration."
  }
];

export default function Accord() {
  return (
    <div>
      <Accordion data = {faqs}/>
    </div>
  );
}

function Accordion({ data }) {

  const [curOpen, setCurOpen] = useState(null);
  return <div className="accordion">
    {data.map((el, i)=><AccordionItem curOpen={curOpen} onOpen={setCurOpen} title={el.title} num={i} key={el.title}>{el.text} </AccordionItem>)}
    <AccordionItem curOpen={curOpen} onOpen={setCurOpen} title="My Test" num={23}><p>Welcome back</p> </AccordionItem>
  </div>;
}

function AccordionItem({num, title, curOpen, onOpen, children}){

  const isOpen = num === curOpen;
  function handleToggle(){
    onOpen(isOpen ? null : num);
  }
  return(
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1 }</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  )
}