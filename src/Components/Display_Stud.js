import React from "react";
import NavBar from '../Components/NavBar';
import './Display_Stud.css';
import axios from 'axios';
import { apiBaseUrl } from '../Components/config.js';



class Display_Stud extends React.Component {
    constructor(props){
        super(props);
        this.state = {token: this.props.token, students: this.props.students, username: '', id: this.props.id};
        console.log(this.state);
    }

    handleToken = (token) => {
        this.setState({token: token});
        this.props.handleToken(token);
    }
    handleId =(id) => {
        this.setState({id: id});
        this.props.handleId(id);
    }

    addStudent = () => {

        var user = {
            'username': this.state.username,
            'teacher': false,
            'first_name': "",
            'last_name': "",
        }
        var self = this;
        axios.post(apiBaseUrl+'/user', user, { headers: { authorization: `Bearer ${self.state.token}` } });

    }

    componentDidUpdate(prevProps){
        if (prevProps.students != this.props.students) {
            this.setState({students: this.props.students});
        }
    }

    handleUsername = (e) => {
        this.setState({username: e.target.value});
    }

    deleteStudent= (e) => {
        var self = this;
        axios.delete(apiBaseUrl+'/user/' +e.target.name, { headers: { authorization: `Bearer ${self.state.token}` } });
    }


    render(){
        return (
            <div>
                <NavBar 
                  token={this.state.token}
                  handleToken={this.handleToken.bind(this)}
                  id={this.state.id}
                  handleId={this.handleId.bind(this)}
                  />
                <div className="stBody">
                    {
                        this.state.students.map((student, i) => {
                            return (
                                <div key={i} className="stud">
                                    <span className="stFN">{student.first_name+" "}</span>
                                    <span className="stLN">{student.last_name}</span><br/>
                                    <span className="stUN">{'('+student.username+')'}</span>
                                    <input className="stBtn" name={student.id} type="submit" value="Delete" onClick={this.deleteStudent}/>
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


export default Display_Stud;