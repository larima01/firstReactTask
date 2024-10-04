import { useState } from 'react';
import './flashcard.css';

const questions = [
    {
        id: 3457,
        question: "What language is React based on?",
        answer: "JavaScript"
    },
    {
        id: 7336,
        question: "What are the building blocks of React apps?",
        answer: "Components"
    },
    {
        id: 8832,
        question: "What's the name of the syntax we use to describe a UI in React apps?",
        answer: "JSX"
    },
    {
        id: 1297,
        question: "How to pass data from parent to child components?",
        answer: "props"
    },
    {
        id: 9103,
        question: "How to give a component memory?",
        answer: "useState hook"
    },
    {
        id: 2002,
        question: "What do we call an input element that is completely synchronized with state?",
        answer: "Controlled element"
    },
];

export default function Flashcards() {
    const [selectedId, setSelectedId] = useState(null);

    function handleClick(id) {
        setSelectedId(prevId => (prevId !== id ? id : null));
    }

    return (
        <div className="flashcards">
            {questions.map((question) => (
                <div
                    key={question.id}
                    className={`flashcard ${question.id === selectedId ? 'selected' : ''}`}
                    onClick={() => handleClick(question.id)}
                    aria-expanded={question.id === selectedId}
                >
                    <p>{question.id === selectedId ? question.answer : question.question}</p>
                </div>
            ))}
        </div>
    );
}
