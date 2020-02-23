import React from 'react';
import './Question.css';

const Question = ({ qid, tid, type, text, correct_answer, incorrect_answer_1, incorrect_answer_2, incorrect_answer_3, uid, login, password, due_date }) => {
    console.log("TODAY: " + Date.now());
    console.log("Date due: "+ due_date);
    if (Date.parse(due_date)>Date.now()) {
    console.log("HERE");
    return (
        <div id="body">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
            <div className="question-content">
                <p className="question text">{text}</p>
                <ul className="question list">
                    <li className="option">
                        <input type="radio" id="incorrect_answer_1" name={qid} value={incorrect_answer_1}/>
                        <label htmlFor="incorrect_answer_1">{incorrect_answer_1}</label>
                    </li>
                    <li className="option"> 
                        <input type="radio" id="incorrect_answer_2" name={qid} value={incorrect_answer_2}/>
                        <label htmlFor="incorrect_answer_2">{incorrect_answer_2}</label>
                    </li>
                    <li className="option">
                        <input type="radio" id="correct_answer" name={qid} value={correct_answer}/>
                        <label htmlFor="correct_answer">{correct_answer}</label>
                    </li>
                    <li className="option">
                        <input type="radio" id="incorrect_answer_3" name={qid} value={incorrect_answer_3}/>
                        <label htmlFor="incorrect_answer_3">{incorrect_answer_3}</label>
                        
                    </li>
                </ul>
            </div>
        </div>
    );
    }
    else{
        return(
            <div>
                <h1>Answers</h1>
            </div>
        );
    }
}

export default Question;