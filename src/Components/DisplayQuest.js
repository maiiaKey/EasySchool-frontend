import React from "react";
import Question from "../Components/Question";
import ReactDOM from 'react-dom';
import CorrectAnswersList from "../Components/CorrectAnswersList";
import ViewStat from "../Containers/ViewStat.js";


class DisplayQuest extends React.Component  {
    constructor(props){
            super(props);
            this.state = {questions: this.props.questions, 
                        login: this.props.login, 
                        password: this.props.password, 
                        due_date: this.props.due_date, 
                        teacher: this.props.teacher};
        }

    onClick = () => {
        const display_stat = <ViewStat login={this.state.login} password={this.state.password} teacher={this.state.teacher} tid={this.state.questions[0].tid}/>;
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
                                    //console.log(question);
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
                            <input id="subBut" type="submit" value="Submit" className="mybtn"/>
                            </div>
                        </div>
                    </div>
                );}
            else {
                return (
                    <div>
                        <h1>These are student's answers</h1>
                    </div>
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
                    <input type="submit" value="View Statistics" onClick={this.onClick} />
                </div>
            )
        }
}
}


//accessed current login, password by destructuring


export default DisplayQuest;