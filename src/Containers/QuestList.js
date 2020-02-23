import React from 'react';
import NavBar from '../Components/NavBar';


import DisplayQuest from '../Components/DisplayQuest';
// import './QuestList.css';

class QuestList extends React.Component {
    constructor(props){
      super(props);
      this.state = {due_date: this.props.due_date, login: this.props.login, password: this.props.password, questions: this.props.questions};
    }
 
    onClick = () => {
      console.log("CLICKED");
  
    }

    removeHid = () => {
      console.log("REMOVED");
    }
  
    componentDidMount() {
      this.removeHid();
    }

    handleLogin = (logValue) => { this.setState({login: logValue});}
    handlePassword = (logPass) => { this.setState({password: logPass});}

    render(){
        return (
          <div>
            <NavBar handlePopup={this.handleClick} 
                    visible={false} 
                    passLogin={this.handleLogin.bind(this, 'login')} 
                    passPassword={this.handlePassword.bind(this, 'password')} 
                    login={this.state.login}
                    password={this.state.password}
                    teacher={this.props.teacher} />
            <div className="body">
              <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
              <DisplayQuest questions={this.state.questions} login={this.state.login} password={this.state.password} teacher={this.props.teacher} due_date={this.state.due_date}/>
              <input type="submit" value="View Statistics" onClick={this.onClick} />
            </div> 
          </div>
        )
      }
  }
      
    
  
  export default QuestList;