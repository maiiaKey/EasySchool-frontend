import React from 'react';
import Login from './Login';
import './Navbar.css';


class NavBar extends React.Component {
    state = {
        visible: false
    }

    handleVisible = () => {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        
        })
    }
    render() {

    return (
            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="https://www.google.com/">EasySchool</a>
                    <div className="" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="https://www.google.com/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.handleVisible}> Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.google.com/">Assignments</a>
                        </li>
                        </ul>
                    </div>
                </nav>
                <Login visible={this.state.visible}
                       handleVisible={this.handleVisible} 
                       getLogin={this.props.passLogin}
                       getPassword={this.props.passPassword}
                       login={this.props.login}
                       password={this.props.password}/>
            
            </div>
    )
    }

}








export default NavBar;