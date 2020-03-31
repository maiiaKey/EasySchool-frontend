import React from 'react';
import NavBar from '../Components/NavBar';
import "../Containers/StudAnswersList.css";


class StudAnswersList extends React.Component {
    constructor(props){
      super(props);
      console.log("StudAnswersList Props");
      console.log(this.props);
      this.state = {tid: this.props.tid,
                    token: this.props.token, 
                    uid: this.props.uid,
                    answers: this.props.answers.filter((answer) => {return (answer.assignment_id==this.props.tid && answer.user_id==this.props.uid)}),
                    questions: this.props.questions,
                    teacher: this.props.teacher
                  }
      console.log("StudAnswersList State");
      console.log(this.state);
    }

    componentDidMount(){
      if (!this.state.teacher) {
        var temp=document.getElementById("st-navbar");
        temp.setAttribute('hidden', true);
      }
    }

    handleToken = (token) => {
      this.setState({token: token});
      this.props.handleToken(token);
    }

    render(){
        return (
          <div>
            <div id="st-navbar">
            <NavBar token={this.state.token}
                    handleToken={this.handleToken.bind(this)} 
            />
            </div>
            <div className="answers-body">
              <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
              {this.state.answers.map((answer, key)=> {;
                var question = this.state.questions.filter((quest)=>{return quest.id===answer.question_id});
                if (answer.correct){
                  return(
                    <div className="answer-content">
                    <h5 className='question-text'>{question[0].text}</h5>
                    <div className="corAns">
                    <p className='answer-text'>{answer.text}</p>
                    <p className='answer-check'>Correct :)</p>
                    </div>
                    
                    </div>
                  )
                }
                else {return(
                  <div className="answer-content">
                  <h5 className='question-text'>{question[0].text}</h5>
                  <div className="incAns">
                    <p className='answer-text'>{answer.text}</p>
                    <p className='answer-check'>Incorrect :(</p>
                    <p className='answer-correct'>Correct answer is: {question[0].correct_answer}</p>
                    </div>

                  </div>
                )}
              
              })}              
              
            </div> 
          </div>
        )
      }
    }
      
      
    
  
  export default StudAnswersList;