import React from 'react';
import NavBar from '../Components/NavBar';
import DisplayAssign from '../Components/DisplayAssign';
import './AssignList.css';

class AssignList extends React.Component {
  constructor(props){
    super(props);
    this.state = {login: this.props.login, password: this.props.password};
  }

  handleLogin = (logValue) => {
    this.setState({login: logValue});
  }

  handlePassword = (logPass) => {
    this.setState({password: logPass});
  }
    
    render(){
    const {assignments, display} = this.props;
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
            <DisplayAssign assignments={assignments} display={display} login={this.state.login} password={this.state.password}/>
          </div> 
        </div>
      )
    }
}
    
  

export default AssignList;
