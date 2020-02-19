import './Login.css';
                    
import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Login extends React.Component {

  constructor(){
    super();
    this.state = {login: "", password: ""};
    this.onSubmit = this.onSubmit.bind(this);
  }

  
  changeLogin = (e) => {
    this.setState({login: e.target.value});
    console.log(this.state.login);
  }

  changePass = (e) => {
    this.setState({password: e.target.value});
    console.log(this.state.password);
  }

  onSubmit(e, props){
    e.preventDefault();
    this.props.handleVisible();
    console.log(this.state);

  }
  
  

  render() {
  
  return( 
  <div>
    <Modal show={this.props.visible} onHide={this.props.handleVisible}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="flogin">
          <label id="luser">Username</label>
          <input type="text" id="fuser" name="fuser" value={this.state.login} onChange={this.changeLogin}/><br />
          <label id="lpass">Password</label>
          <input type="password" id="fpass" name="fpass" value={this.state.password} onChange={this.changePass}/><br />
          <div className="buttonHolder">
            <input type="submit" className="fsubmit" value="Login" onClick={this.onSubmit} />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  </div>
  )
  }
}

export default Login;