import React from "react";
import Question from "../Components/Question";
import ReactDOM from 'react-dom';
import CorrectAnswersList from "../Components/CorrectAnswersList";
import ViewIndiv from "../Containers/ViewIndiv.js";
import "../Components/CorrectAnswersList.css";
import StudAnswersList from "../Containers/StudAnswersList";



class DisplayQuest extends React.Component  {
    constructor(props){
        super(props);

        this.state = {
                        questions: this.props.questions, 
                        due_date: this.props.due_date, 
                        token: this.props.token,
                        tid: this.props.tid,
                        answers: this.props.answers,
                        uid: this.props.id,
                        current_user: this.props.users.filter((user)=>{return user.id === this.props.id})[0],
        };
        console.log(this.state);
        }

    handleToken = (token) => {
            this.setState({token: token});
            this.props.handleToken(token);
    }
    handleId = (id) => {
        this.setState({uid: id});
        this.props.handleToken(id);
    }

    onSubmit(){
        alert("Thank you! Your answers were submitted.");
    }

    onClick = () => {
        const display_stat = <ViewIndiv 
                                questions={this.state.questions} 
                                answers={this.state.answers} 
                                users={this.props.users}
                                token={this.state.token} 
                                handleToken={this.handleToken.bind(this)} 
                                tid={this.state.tid}
                                id={this.state.uid}
                                handleId={this.handleId.bind(this)} 
                                />;
        ReactDOM.render(display_stat, document.getElementById('root'));
    }

    render() {
        const {questions} =this.state;
        if (!this.state.current_user.teacher) {
            if (Date.parse(this.state.due_date)>Date.now()) 
            {
                return (
                    <div>
                        <div className="display-body">
                            {
                                questions.map((question, i) => {
                                    return (<Question 
                                    key={i}
                                    qid={questions[i].id} 
                                    tid={questions[i].assignment_id}
                                    type={questions[i].type} 
                                    text={questions[i].text}
                                    correct_answer={questions[i].correct_answer}
                                    incorrect_answer_1={questions[i].incorrect_answer_1}
                                    incorrect_answer_2={questions[i].incorrect_answer_2}
                                    incorrect_answer_3={questions[i].incorrect_answer_3}
                                    uid={this.state.current_user.id} 
                                    due_date={this.state.due_date}
                                    token={this.state.token}
                                    handleToken={this.handleToken.bind(this)}
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
                              tid={this.state.tid} 
                              token={this.state.token}
                              handleToken={this.handleToken.bind(this)}
                              questions={this.state.questions}
                              answers={this.state.answers}
                              teacher={false}
                              />
                )
            }
        }
        else {
            return (
                <div>
                    <CorrectAnswersList due_date={this.state.due_date}
                                        questions={this.state.questions}
                                        token={this.state.token}
                                        handleToken={this.handleToken.bind(this)}
                                         
                    />
                    <input className="testBtn" type="submit" value="View Individual Answers" onClick={this.onClick} />
                </div>
            )
        }
}
}


export default DisplayQuest;