import React from 'react';
import NavBar from '../Components/NavBar';


import DisplayQuest from '../Components/DisplayQuest';
// import './QuestList.css';

class QuestList extends React.Component {
    constructor(props){
      super(props);
      this.state = {login: this.props.login, password: this.props.password, questions: this.props.questions};
    }
  
    handleLogin = (logValue) => { this.setState({login: logValue});}
    handlePassword = (logPass) => { this.setState({password: logPass});}

    render(){
        console.log("QuestList.questions");
        console.log(this.state.questions);
        return (
          <div>
            <NavBar handlePopup={this.handleClick} 
                    visible={false} 
                    passLogin={this.handleLogin.bind(this, 'login')} 
                    passPassword={this.handlePassword.bind(this, 'password')} 
                    login={this.state.login}
                    password={this.state.password} />
            <div className="body">
              <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
              <DisplayQuest questions={this.state.questions} login={this.state.login} password={this.state.password} />
            </div> 
          </div>
        )
      }
  }
      
    
  
  export default QuestList;