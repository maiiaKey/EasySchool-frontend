import React from 'react';
import NavBar from '../Components/NavBar';
import './App.css';
import axios from 'axios';
import { apiBaseUrl } from '../Components/config.js';


class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {users: [], login: this.props.login, password: this.props.password, teacher: this.props.teacher};
    }

    handleLogin = (logValue) => {
      this.setState({login: logValue});
    }

    handlePassword = (logPass) => {
      this.setState({password: logPass});
    }

    getUsers = async () => {
      let response = await axios.get(apiBaseUrl+'/user');
      this.setState({users: response.data.rows});
      console.log(this.state.users);
    }

    componentDidMount() {
      this.getUsers();

    }
    
    componentDidUpdate() {
      //AUTHENTICATION
      
      if (this.state.login !== ""){
        const user = this.state.users.filter((user) => {
          return (user.username===this.state.login)});
        if (user.length === 0)
        {
          //non existent user
          this.setState({login: '', password:""});
          alert("Sorry, wrong username of password");
        }
        else { 
          //updating teacher prop
          const flag = user[0].teacher;
          if (this.state.teacher !== flag)
            this.setState({ teacher: flag });
        }
      }
    }

    render() {
      return (
        <div>
          {/* custom navbar component */}
          <NavBar  
                  visible={this.state.visible} //property for handling Login window 
                  passLogin={this.handleLogin.bind(this)} //method for passing the username back to parent
                  passPassword={this.handlePassword.bind(this)} //method for passing the password back to parent
                  login={this.state.login} //current username
                  password={this.state.password} //current password
                  teacher={this.state.teacher} //true, if the user is a teacher, false if not
                  />
          <div className="homepage-content">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
            <h2 className="homepage-title">Welcome to the EasySchool WebApp!</h2>
            <h3 className="homepage-text">Are you tired of using Excel to keep track of your student's 
              homework assignments? Easyschool is the right solution
              for you.
            </h3>
            <h3 className="homepage-text">With the help of the EasySchool WebApp the teacher can:</h3>
            <ul className="homepage-list">
              <li>add homework assignments in a few clicks</li>
              <li>create custom questions or assign custom excercises</li>
              <li>easily manage the list of students</li>
              <li>view statistics about each assignment</li>
              <li>view individual answers of each student</li>
            </ul>
            <div className="homepage-footer">
            <h3 className="footer-title">Contact</h3>
            <h5 className="footer-text">If you have any questions or issues you may contact the developer at:</h5>
            <h5 className="footer-text">mayak29052003@gmail.com</h5>
            </div>
          </div>
        </div>
      );
    }
  
}

export default App;