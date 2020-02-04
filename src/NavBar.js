import React from 'react';
import Login from './Login';


class NavBar extends React.Component {
    state = {
        visible: false
    }

    handleVisible = () => {
        this.setState((prevState) => {
            console.log(this.state.visible);
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
                />
            </div>
    )
    }

}








export default NavBar;