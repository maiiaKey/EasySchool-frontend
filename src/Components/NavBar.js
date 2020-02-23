import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import assignments from "./assignments.js";
import './Navbar.css';
import AssignList from '../Containers/AssignList';
import App from '../Containers/App.js';
import users from "./users";
import Display_Stud from '../Components/Display_Stud';
import Profile from '../Containers/Profile';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {users: users, teacher: this.props.teacher, visible: false, assignments: [], status: false, login: this.props.login, password: this.props.password};
      }

    componentDidMount() {
        this.setState({assignments: assignments}); //DATABASE
        const students = this.state.users.filter((user) => { return user.teacher === false});
        this.setState({users: students});
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.teacher !== prevProps.teacher) {
            this.setState({teacher: this.props.teacher});
        }
        if (this.state.teacher === true) {
            var st=document.getElementById('students');
            st.removeAttribute('hidden');
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
        const display_stud = <Display_Stud login={this.state.login} password={this.state.password} teacher={this.state.teacher} students={this.state.users}/>;
        ReactDOM.render(display_stud, document.getElementById('root'));
    }

    openProfile = () => {
        const display_prof = <Profile login={this.state.login} password={this.state.password} teacher={this.state.teacher}/>;
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