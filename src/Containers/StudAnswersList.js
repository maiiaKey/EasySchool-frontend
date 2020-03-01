import React from 'react';
import NavBar from '../Components/NavBar';
import answers from '../Components/answers.js'


class StudAnswersList extends React.Component {
    constructor(props){
      super(props);
      console.log(this.props);
      this.state = {tid: this.props.tid,
                    teacher: this.props.teacher, 
                    login: this.props.login, 
                    password: this.props.password, 
                    uid: this.props.uid,
                    answers: this.props.answers.filter((answer) => {return (answer.assignment_id==this.props.tid && answer.user_id==this.props.uid)}),
                    questions: this.props.questions.filter((question)=>{return (question.assignment_id===this.props.tid && question.user_id===this.props.uid)})
                  }
        
    }

    componentDidMount(){
      if (!this.state.teacher) {
        var temp=document.getElementById("st-navbar");
        temp.setAttribute('hidden', true);
      }
    }

    handleLogin = (logValue) => { this.setState({login: logValue});}
    handlePassword = (logPass) => { this.setState({password: logPass});}

    render(){
        return (
          <div>
            <div id="st-navbar">
            <NavBar visible={false} 
                    passLogin={this.handleLogin.bind(this, 'login')} 
                    passPassword={this.handlePassword.bind(this, 'password')} 
                    login={this.state.login}
                    password={this.state.password}
                    teacher={this.props.teacher} />
            </div>
            <div className="body">
              <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
              {this.state.answers.map((answer, key)=> {
                console.log(answer);
                var question = this.state.questions.filter((quest)=>{return quest.id===answer.question_id});
                if (answer.correct){
                  return(
                    <div>
                    <h5>{question[0].text}</h5>
                    <div className="corAns">
                    <p>{answer.text}</p>
                    <p>Correct :)</p>
                    </div>
                    
                    </div>
                  )
                }
                else {return(
                  <div>
                  <h5>{question[0].text}</h5>
                  <div className="incAns">
                    <p>{answer.text}</p>
                    <p>Incorrect :(</p>
                    <p>Correct answer is: {question[0].correct_answer}</p>
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