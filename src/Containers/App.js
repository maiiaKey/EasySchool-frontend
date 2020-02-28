import React from 'react';
import NavBar from '../Components/NavBar';
import './App.css';


class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {login: this.props.login, password: this.props.password, teacher: this.props.teacher};
    }

    handleLogin = (logValue) => {
      this.setState({login: logValue});
    }

    handlePassword = (logPass) => {
      this.setState({password: logPass});
    }
    
    componentDidUpdate() {
      var flag=false;
      if (this.state.login==="maiia" && this.state.password==="key")
        flag=true;
      if (this.state.teacher !== flag) {
        this.setState({teacher: flag});
      }
      }

    

    render() {
      return (
        <div>
          <NavBar  
                  visible={this.state.visible} 
                  passLogin={this.handleLogin.bind(this)} 
                  passPassword={this.handlePassword.bind(this)}
                  login={this.state.login}
                  password={this.state.password}
                  teacher={this.state.teacher}
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