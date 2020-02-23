import React from 'react';
import NavBar from '../Components/NavBar';



class Profile extends React.Component {
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
    

    render() {
    if (this.state.login !== '' && this.state.password !== "")
    {
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
            <h1>This is profile page</h1>
            {/* fetch data from DATABASE */}
          </div>
        </div>
      );
    }
    else {
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
                <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
                <h1>Please, log in.</h1>
        </div>
        );
    }

    }
  
}

export default Profile;
