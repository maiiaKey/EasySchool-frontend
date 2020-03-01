import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import './Navbar.css';
import AssignList from '../Containers/AssignList';
import App from '../Containers/App.js';
import Display_Stud from '../Components/Display_Stud';
import Profile from '../Containers/Profile';
import axios from 'axios';
import { apiBaseUrl } from './config.js';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {students: [], users: [], assignments: [], teacher: this.props.teacher, visible: false, status: false, login: this.props.login, password: this.props.password};
      }

    componentDidMount() {
        //getting Assignments from database
        var self = this;
        axios.get(apiBaseUrl+'/assignment')
        .then(function (response) {self.setState({assignments: response.data.rows});});

        //getting Users from database
        axios.get(apiBaseUrl+'/user')
        .then(function (response) {
            self.setState({users: response.data.rows});
            const students = self.state.users.filter((user) => { return user.teacher === false});
            self.setState({students: students});
        });        
    }
    componentDidUpdate(prevProps) { //prevProps - a default argument that represents previous state of component's props
        if (this.props.teacher !== prevProps.teacher) { //listening for a change in teacher value
            this.setState({teacher: this.props.teacher});
        }
        if (this.state.teacher === true) { //if the user is teacher, showing him an additional element
            var st=document.getElementById('students');
            st.removeAttribute('hidden'); //document object manipulation
        }
    }

    handleVisible = () => {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        
        })
    }

    passLogin = (logvalue) => {
        this.setState({login: logvalue});
        this.props.passLogin(logvalue);
    }

    passPassword = (passvalue) => {
        this.setState({password: passvalue});
        this.props.passPassword(passvalue);
    }

    openHomePage = () => {
        const display_app = <App login={this.state.login} password={this.state.password} teacher={this.state.teacher}/>;
        ReactDOM.render(display_app, document.getElementById('root'));
    }


    openAssignList = () => {
        if (this.state.login !== "" && this.state.password !== "") 
            {
                this.setState({status: true}, function () {
                        const display_ass = <AssignList 
                        assignments={this.state.assignments} 
                        display={this.state.status} 
                        login={this.state.login}
                        password={this.state.password}
                        teacher={this.state.teacher}/>;
                    ReactDOM.render(display_ass, document.getElementById('root'));
                });
            }
        else {
            const display_ass = <AssignList assignments={this.state.assignments} display={false} login={this.state.login}
            password={this.state.password} teacher={this.state.teacher}/>;
            ReactDOM.render(display_ass, document.getElementById('root'));
        }
        
    }

    openStudents = () => {
        console.log("Navbar");
        console.log(this.state.users);
        const display_stud = <Display_Stud login={this.state.login} password={this.state.password} teacher={this.state.teacher} students={this.state.students}/>;
        ReactDOM.render(display_stud, document.getElementById('root'));
    }

    openProfile = () => {
        const display_prof = <Profile login={this.state.login} password={this.state.password} teacher={this.state.teacher} users={this.state.users}/>;
        ReactDOM.render(display_prof, document.getElementById('root'));
    }

    

    render() {

    return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#" onClick={this.openHomePage}>EasySchool</a>
                    <div className="" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.openHomePage}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.handleVisible}> Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.openAssignList}>Assignments</a>
                        </li>
                        <li className="nav-item">
                            <a hidden id="students" className="nav-link" href="#" onClick={this.openStudents}>Students</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.openProfile}>Profile</a>
                        </li>
                        </ul>
                    </div>
                </nav>
                <Login visible={this.state.visible}
                       handleVisible={this.handleVisible} 
                       getLogin={this.passLogin.bind(this)}
                       getPassword={this.passPassword.bind(this)}
                       changeFlag={this.changeStatus}
                       login={this.state.login}
                       password={this.state.password}
                    />
                            
            </div>
    )
    }
}


export default NavBar;