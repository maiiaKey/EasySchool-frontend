import React from 'react';
import NavBar from '../Components/NavBar';
import answers from '../Components/answers.js'


class StudAnswersList extends React.Component {
    constructor(props){
      super(props);
      this.state = {tid: this.props.tid, 
                    login: this.props.login, 
                    password: this.props.password, 
                    uid: this.props.uid,
                    answers: answers.filter((answer) => {return (answer.tid==this.props.tid && answer.uid==this.props.uid)})};
        
    }

    handleLogin = (logValue) => { this.setState({login: logValue});}
    handlePassword = (logPass) => { this.setState({password: logPass});}

    render(){
      if (this.state.teacher) {
        return (
          <div>
            <NavBar visible={false} 
                    passLogin={this.handleLogin.bind(this, 'login')} 
                    passPassword={this.handlePassword.bind(this, 'password')} 
                    login={this.state.login}
                    password={this.state.password}
                    teacher={true} />
            <div className="body">
              <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
              <h1>Student</h1>
            </div> 
          </div>
        )
      }
      else {
        return (
          <div>
            <NavBar visible={false} 
                    passLogin={this.handleLogin.bind(this, 'login')} 
                    passPassword={this.handlePassword.bind(this, 'password')} 
                    login={this.state.login}
                    password={this.state.password}
                    teacher={true} />
            <div className="body">
              <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
              <h1>Teacher</h1>
            </div> 
          </div>
        )

      }
      }
  }
      
    
  
  export default StudAnswersList;