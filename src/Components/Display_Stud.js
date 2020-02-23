import React from "react";
import NavBar from '../Components/NavBar';
// import './DisplayAssign.css';



class Display_Stud extends React.Component {
    constructor(props){
        super(props);
        this.state = {login: this.props.login, password:this.props.password, teacher: this.props.teacher, students: this.props.students};
        console.log("HERE");
        console.log(this.state);
    }

    handleLogin = (logValue) => {
        this.setState({login: logValue});
    }
  
    handlePassword = (logPass) => {
        this.setState({password: logPass});
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
                <div className="body">
                    {
                        this.state.students.map((student, i) => {
                            return (
                                <div key={i}>
                                    <p>{student.first_name}</p>
                                    <p>{student.last_name}</p>
                                    <p>{student.username}</p>
                                    <input type="submit" value="Delete" />
                                </div>
                            );
                        })
                    }
                    <h3>Add Student</h3>
                    <input type="text" placeholder="Type the username of the new student"></input>
                    <input type="submit" value="Add" />
                </div>
            </div>
        );
    }
}


//accessed current login, password by destructuring


export default Display_Stud;