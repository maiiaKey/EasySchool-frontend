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
        this.state = {token: this.props.token, students: [], users: [], assignments: [], visible: false, id: this.props.id};
      }

    componentDidMount() { //if it is not the first Navbar in the session - token is intialized
        //getting the needed resources from the database
        var self = this;
        if (this.state.token!=='') {
            axios.get(apiBaseUrl+'/assignment', { headers: { authorization: `Bearer ${this.state.token}` } })
            .then(function (response) {
                self.setState({assignments: response.data.rows});});
            axios.get(apiBaseUrl+'/user', { headers: { authorization: `Bearer ${this.state.token}` } })
            .then(function (response) {
                self.setState({users: response.data.rows});
                const students = self.state.users.filter((user) => { return user.teacher === false});
                self.setState({students: students}); }); 
        }         
    }

    componentDidUpdate(prevState) { //if it is the first Navbar in the session - token will be intialized
        //determining the current user in order to check if it is a teacher
        const current_user = this.state.users.filter((user)=>{return user.id === this.state.id})[0]; 
        if (current_user !== undefined && current_user.teacher) {
            var st=document.getElementById('students');
            st.removeAttribute('hidden'); 
        }
        //getting the needed resources from the database
        if (this.state.token !== prevState.token) {
            var self = this;
            axios.get(apiBaseUrl+'/assignment', { headers: { authorization: `Bearer ${this.state.token}` } })
            .then(function (response) {
                self.setState({assignments: response.data.rows});
            });
            axios.get(apiBaseUrl+'/user', { headers: { authorization: `Bearer ${this.state.token}` } })
            .then(function (response) {
                self.setState({users: response.data.rows});
                const students = self.state.users.filter((user) => { return user.teacher === false});
                self.setState({students: students});
            }); 
        }
    }

    handleVisible = () => {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        
        })
    }

    handleId =(id) => {
        this.setState({id: id});
        this.props.handleId(id);
    }

    handleToken = (token) => {
        this.setState({token: token});
        this.props.handleToken(token);
    }


    openHomePage = () => {
        const display_app = <App token={this.state.token} id={this.state.id}/>;
        ReactDOM.render(display_app, document.getElementById('root'));
    }


    openAssignList = () => {
        if (this.state.token!=="")
            {
                this.setState({status: true}, function () {
                        const display_ass = <AssignList 
                        token={this.state.token} 
                        handleToken={this.handleToken.bind(this)}
                        assignments={this.state.assignments}
                        id={this.state.id}
                        handleId={this.handleId.bind(this)}
                        />;
                    ReactDOM.render(display_ass, document.getElementById('root'));
                });
            }
        else {
            const display_ass = <AssignList token={this.state.token} handleToken={this.handleToken.bind(this)} assignments={this.state.assignments} id={this.state.id} handleId={this.handleId.bind(this)}/>;
            ReactDOM.render(display_ass, document.getElementById('root'));
        }
        
    }

    openStudents = () => {
        const display_stud = <Display_Stud token={this.state.token} handleToken={this.handleToken.bind(this)} students={this.state.students} id={this.state.id} handleId={this.handleId.bind(this)}/>;
        ReactDOM.render(display_stud, document.getElementById('root'));
    }

    openProfile = () => {
        const current_user = this.state.users.filter((user)=>{return user.id === this.state.id})[0];
        const display_prof = <Profile token={this.state.token} handleToken={this.handleToken.bind(this)} user={current_user} id={this.state.id} handleId={this.handleId.bind(this)}/>;
        ReactDOM.render(display_prof, document.getElementById('root'));
    }

    

    render() {
    return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
                      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#" onClick={this.openHomePage}>EasySchool</a>
                    <div className="" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.openHomePage}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.handleVisible}>Login</a>
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
                       token={this.state.token}
                       handleToken={this.handleToken.bind(this)}
                       id={this.state.id}
                       handleId={this.handleId.bind(this)}
                    />
                            
            </div>
    )
    }
}


export default NavBar;