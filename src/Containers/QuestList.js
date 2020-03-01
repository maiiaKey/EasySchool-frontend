import React from 'react';
import NavBar from '../Components/NavBar';
import DisplayQuest from '../Components/DisplayQuest';


class QuestList extends React.Component {
    constructor(props){
      super(props);
      this.state = {due_date: this.props.due_date, 
                    login: this.props.login, 
                    password: this.props.password, 
                    questions: this.props.questions,
                    tid: this.props.tid,
                    answers:this.props.answers,
                    users: this.props.users
                  };
    }

    handleLogin = (logValue) => { this.setState({login: logValue});}
    handlePassword = (logPass) => { this.setState({password: logPass});}

    render(){
        return (
          <div>
            <NavBar visible={false} 
                    passLogin={this.handleLogin.bind(this, 'login')} 
                    passPassword={this.handlePassword.bind(this, 'password')} 
                    login={this.state.login}
                    password={this.state.password}
                    teacher={this.props.teacher} />
            <div className="body">
              <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
              <DisplayQuest users={this.state.users} tid={this.state.tid} questions={this.state.questions} answers={this.state.answers} login={this.state.login} password={this.state.password} teacher={this.props.teacher} due_date={this.state.due_date}/>
            </div> 
          </div>
        )
      }
  }
      
    
  
  export default QuestList;