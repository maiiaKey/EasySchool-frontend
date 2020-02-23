import React from "react";
import Question from "../Components/Question";
import './Question.css';




class DisplayQuest extends React.Component  {
    constructor(props){
            super(props);
            this.state = {questions: this.props.questions, 
                        login: this.props.login, 
                        password: this.props.password, 
                        due_date: this.props.due_date, 
                        teacher: this.props.teacher};
        }

    addHid = ( due_date ) => {
            if (Date.parse(due_date)<Date.now()) {
                var btn=document.getElementById("subBut");
                btn.setAttribute("hidden", true);
            }
        
    }

    componentDidMount() {
        this.addHid(this.state.due_date);
    }

    render() {
    const {questions} =this.state;
    
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
        );
    }
}


//accessed current login, password by destructuring


export default DisplayQuest;