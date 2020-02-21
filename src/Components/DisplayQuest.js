import React from "react";
import Question from "../Components/Question";
import './Question.css';

const displayClick = ({login, password}) => {
}


const DisplayQuest = ({ questions, login, password })  => {
        console.log("DisplayQuest.questions");
        console.log(questions);
        return (
            <div>
                <div className="display-body">
                    {
                        questions.map((question, i) => {
                            console.log(question);
                            return (<Question 
                            key={i}
                            qid={questions[i].qid} 
                            tid={questions[i].tid}
                            type={questions[i].type} 
                            text={questions[i].text}
                            correct_answer={questions[i].correct_answer}
                            incorrect_answer_1={questions[i].incorrect_answer_1}
                            incorrect_answer_2={questions[i].incorrect_answer_2}
                            incorrect_answer_3={questions[i].incorrect_answer_3}
                            uid={questions[i].uid} 
                            login={login}
                            password={password}
                        />)
                        })
                    }
                    <div className="btnHolder">
                    <input type="submit" value="Submit" className="mybtn"/>
                    </div>
                </div>
            </div>
        );
}


//accessed current login, password by destructuring


export default DisplayQuest;