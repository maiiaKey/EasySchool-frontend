import React from 'react';
import NavBar from './NavBar';
import Login from './Login';
import './App.css';


class App extends React.Component {
    constructor(){
      super();
      this.state = {login: "", password: ""};
    }

    handleLogin = (logValue) => {
      this.setState({login: logValue});
    }

    handlePassword = (logPass) => {
      this.setState({password: logPass});
    }

    render() {
      return (
        <div>
          <NavBar handlePopup={this.handleClick} 
                  visible={this.state.visible} 
                  passLogin={this.handleLogin.bind(this, 'login')} 
                  passPassword={this.handlePassword.bind(this, 'password')} 
                  login={this.state.login}
                  password={this.state.password}/>
        </div>
      );
    }
  
}

export default App;
