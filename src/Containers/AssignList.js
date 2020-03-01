import React from 'react';
import NavBar from '../Components/NavBar';
import DisplayAssign from '../Components/DisplayAssign';
import './AssignList.css';
import AddAss from '../Components/AddAss.js';

class AssignList extends React.Component {
  //Constructor method
  constructor(props){
    super(props);
    this.state = {login: this.props.login, //inheriting login
                  password: this.props.password, //inheriting password
                  teacher: this.props.teacher}; //inheriting teacher
    //teacher property depends on whether the user is a teacher or not
    //it can be true or false
  }



  componentDidUpdate(prevProps) {
    if (this.props.teacher !== prevProps.teacher) {
        this.setState({teacher: this.props.teacher});
    }
}


  handleLogin = (logValue) => {
    this.setState({login: logValue});
  }

  handlePassword = (passValue) => {
    this.setState({password: passValue});
  }
    
    render(){
    const {assignments, display} = this.props;
      return (
        <div>
          <NavBar passLogin={this.handleLogin.bind(this, 'login')} 
                  passPassword={this.handlePassword.bind(this, 'password')} 
                  login={this.state.login}
                  password={this.state.password}
                  teacher={this.state.teacher} />
          <div className="body">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
            <DisplayAssign assignments={assignments} display={display} login={this.state.login} password={this.state.password} teacher={this.state.teacher}/>
            <AddAss login={this.state.login} password={this.state.password} teacher={this.state.teacher} />
          </div> 
        </div>
      )
    }
}
    
  

export default AssignList;
