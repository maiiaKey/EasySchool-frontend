import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../Components/NavBar';
import users from '../Components/users';
import StudAnswers from '../Containers/StudAnswersList.js';

class ViewIndiv extends React.Component {
    constructor(props){
      super(props);
      const temp = users.filter((user) => {return user.teacher==false});
      this.state = { 
                    login: this.props.login, 
                    password: this.props.password, 
                    tid: this.props.tid,
                    students: temp,
                    teacher: this.props.teacher
                };
    }

    handleLogin = (logValue) => { this.setState({login: logValue});}
    handlePassword = (logPass) => { this.setState({password: logPass});}

    onClick = (e) => {
        console.log("Student's uid: "+e.target.name)
        const display_indiv = <StudAnswers login={this.state.login} password={this.state.password} tid={this.state.tid} teacher={this.state.teacher}/>;
        ReactDOM.render(display_indiv, document.getElementById('root'));
    }

    render(){
        const {students} = this.state;
        return (
          <div>
            <NavBar visible={false} 
                    passLogin={this.handleLogin.bind(this, 'login')} 
                    passPassword={this.handlePassword.bind(this, 'password')} 
                    login={this.state.login}
                    password={this.state.password}
                    teacher={true} />
            <div className="body">
              <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
                <h1>Pick a student</h1>
                {students.map((student, i) => {
                    return(
                        <div>
                            <span>{student.first_name+" "+student.last_name}</span>
                            <input type="submit" name={student.uid} value="Pick" onClick={this.onClick} />
                        </div>
                    )
                })}
              
            </div> 
          </div>
        )
      }
  }
      
    
  
  export default ViewIndiv;