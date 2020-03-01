import React from "react";
import Question from "../Components/Question";
import ReactDOM from 'react-dom';
import CorrectAnswersList from "../Components/CorrectAnswersList";
import ViewIndiv from "../Containers/ViewIndiv.js";
import "../Components/CorrectAnswersList.css";
import axios from 'axios';
import { apiBaseUrl } from '../Components/config.js';
import StudAnswersList from "../Containers/StudAnswersList";



class DisplayQuest extends React.Component  {
    constructor(props){
            super(props);
            this.state = {questions: this.props.questions, //with this tid (assignment_id)
                        login: this.props.login, 
                        password: this.props.password, 
                        due_date: this.props.due_date, 
                        teacher: this.props.teacher,
                        tid: this.props.tid,
                        answers: this.props.answers,
                        uid: this.props.users.filter((u)=>{return u.username===this.props.login})[0].id
                    };
        }

    onSubmit(){
        alert("Thank you! Your answers were submitted.");
    }

    onClick = () => {

        const display_stat = <ViewIndiv 
                                questions={this.state.questions} 
                                answers={this.state.answers} 
                                users={this.props.users}
                                login={this.state.login} 
                                password={this.state.password} 
                                teacher={this.state.teacher} 
                                tid={this.state.questions[0].id}/>;
        ReactDOM.render(display_stat, document.getElementById('root'));
    }

    render() {
        const {questions} =this.state;
        if (!this.state.teacher) {
            if (Date.parse(this.state.due_date)>Date.now()) 
            {
                return (
                    <div>
                        <div className="display-body">
                            {
                                questions.map((question, i) => {
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
                                    login={this.state.login}
                                    password={this.state.password}
                                    due_date={this.state.due_date}
                                    teacher={this.state.teacher}
                                />)
                                })
                            }
                            <div className="btnHolder">
                            <input id="subBut" type="submit" value="Submit" className="mybtn" onClick={this.onSubmit}/>
                            </div>
                        </div>
                    </div>
                );}
            else {
                return (
                    <StudAnswersList 
                              uid={this.state.uid}
                              login={this.state.login} 
                              password={this.state.password} 
                              tid={this.state.tid} 
                              teacher={this.state.teacher}
                              questions={this.state.questions}
                              answers={this.state.answers}
                              />
                )
            }
        }
        else {
            return (
                <div>
                    <CorrectAnswersList due_date={this.state.due_date}
                                        login={this.state.login}
                                        password={this.state.password}
                                        questions={this.state.questions}
                                        
                    />
                    <input className="testBtn" type="submit" value="View Individual Answers" onClick={this.onClick} />
                </div>
            )
        }
}
}


//accessed current login, password by destructuring


export default DisplayQuest;