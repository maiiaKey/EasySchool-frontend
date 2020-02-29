import React from 'react';
import "../Components/CorrectAnswersList.css";

class CorrectAnswersList extends React.Component {
    constructor(props){
      super(props);
      this.state = {due_date: this.props.due_date, 
                    login: this.props.login, 
                    password: this.props.password, 
                    questions: this.props.questions};
    }
 
    handleLogin = (logValue) => { this.setState({login: logValue});}
    handlePassword = (logPass) => { this.setState({password: logPass});}

    render(){
        const {questions} = this.state;
        return (
          <div>
            <div className="body">
              <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
              {
                questions.map( (question, i) => {
                    return (
                        <div>
                            <div className="answer-content">
                              <p className="answer text">{questions[i].text}</p>
                              <ul className="answer list">
                                  <li className="option">
                                      <input type="radio" id="incorrect_answer_1" name={questions[i].qid} value={questions[i].incorrect_answer_1} disabled/>
                                      <label htmlFor="incorrect_answer_1">{questions[i].incorrect_answer_1}</label>
                                  </li>
                                  <li className="option"> 
                                      <input type="radio" id="incorrect_answer_2" name={questions[i].qid} value={questions[i].incorrect_answer_2} disabled/>
                                      <label htmlFor="incorrect_answer_2">{questions[i].incorrect_answer_2}</label>
                                  </li>
                                  <li className="option">
                                      <input type="radio" id="correct_answer" name={questions[i].qid} value={questions[i].correct_answer} checked disabled/>
                                      <label htmlFor="correct_answer">{questions[i].correct_answer}</label>
                                  </li>
                                  <li className="option">
                                      <input type="radio" id="incorrect_answer_3" name={questions[i].qid} value={questions[i].incorrect_answer_3} disabled/>
                                      <label htmlFor="incorrect_answer_3">{questions[i].incorrect_answer_3}</label>
                                      
                                  </li>
                              </ul>
            </div>
                        </div>
                    )
                })
              }
            </div> 
          </div>
        )
      }
  }
      
    
  
  export default CorrectAnswersList;