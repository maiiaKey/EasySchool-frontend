import React from "react";
import NavBar from '../Components/NavBar';
import './Display_Stud.css';
import axios from 'axios';
import { apiBaseUrl } from '../Components/config.js';



class Display_Stud extends React.Component {
    constructor(props){
        super(props);
        this.state = {login: this.props.login, password:this.props.password, teacher: this.props.teacher, students: this.props.students, username: ''};
        
    }

    handleLogin = (logValue) => {
        this.setState({login: logValue});
    }
  
    handlePassword = (logPass) => {
        this.setState({password: logPass});
    }

    addStudent = (e) => {
        //ADDING A STUDENT TO A DATABASE
        //acces his username by this.state.username
        var user = {
            'username': this.state.username,
            'teacher': false
        }
        axios.post(apiBaseUrl+'/user',user)
        .then((response)=> {console.log(response)});

    }

    handleUsername = (e) => {
        this.setState({username: e.target.value});
    }


    render(){
        return (
            <div>
                <NavBar handlePopup={this.handleClick} 
                  visible={false} 
                  passLogin={this.handleLogin.bind(this)} 
                  passPassword={this.handlePassword.bind(this)}
                  login={this.state.login}
                  password={this.state.password}
                  teacher={this.state.teacher}
                  />
                <div className="stBody">
                    {
                        this.state.students.map((student, i) => {
                            return (
                                <div key={i} className="stud">
                                    <span className="stFN">{student.first_name+" "}</span>
                                    <span className="stLN">{student.last_name}</span><br/>
                                    <span className="stUN">{'('+student.username+')'}</span>
                                    <input className="stBtn" type="submit" value="Delete" />
                                </div>
                            );
                        })
                    }
                    <div className="addSt">
                        <h4 className="addstTitle">Add a new student</h4>
                        <input className="addstInput" type="text" placeholder="Type the username of the new student" value={this.state.username} onChange={this.handleUsername}></input>
                        <p className="addstP">The student's password is '1' by default. This can later be changed by the student in profile settings</p>
                        <input className="addstBtn" type="submit" value="Add" onClick={this.addStudent}/>
                    </div>
                </div>
            </div>
        );
    }
}


//accessed current login, password by destructuring


export default Display_Stud;