import React from 'react';
import NavBar from '../Components/NavBar';
import './App.css';


class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {login: this.props.login, password: this.props.password };
      console.log("constructor");
      console.log(this.state);
    }

    handleLogin = (logValue) => {
      this.setState({login: logValue});
      console.log("App.login "+this.state.login);
    }

    handlePassword = (logPass) => {
      this.setState({password: logPass});
      console.log("App.password "+this.state.password);
    }
    

    render() {
      return (
        <div>
          <NavBar handlePopup={this.handleClick} 
                  visible={this.state.visible} 
                  passLogin={this.handleLogin.bind(this)} 
                  passPassword={this.handlePassword.bind(this)}
                  login={this.state.login}
                  password={this.state.password}
                  />
          <div className="content">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
            <h1>This is home page</h1>
          </div>
        </div>
      );
    }
  
}

export default App;
