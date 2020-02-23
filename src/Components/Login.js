import './Login.css';
                    
import React from "react";
import Modal from 'react-bootstrap/Modal';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {login: this.props.login, password: this.props.password};
    this.onSubmit = this.onSubmit.bind(this);
    
  }

  
  changeLogin = (e) => {
    this.setState({login: e.target.value});
  }

  changePass = (e) => {
    this.setState({password: e.target.value});
  }

  

  onSubmit(e){
    e.preventDefault();
    this.props.handleVisible();
    this.props.getLogin(this.state.login);
    this.props.getPassword(this.state.password);
  }

  render() {
  
  return( 
  <div>
    <Modal show={this.props.visible} onHide={this.props.handleVisible}>
      <div className="modalHeader">
      <Modal.Header closeButton>
      <div className="modalTitle">
        <Modal.Title>Please, login into your account</Modal.Title>
      </div>
      </Modal.Header>
      </div>
      <div className="modalBody">
        <Modal.Body>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
        <form className="form">
          <div className="line">
            <label className="form luser">Username</label>
            <input type="text" id="fuser" name="fuser" value={this.state.login} onChange={this.changeLogin}/><br />
          </div>
          <div className="line">
            <label className="form lpass">Password</label>
            <input type="password" id="fpass" name="fpass" value={this.state.password} onChange={this.changePass}/><br />
          </div>
          <div className="buttonHolder">
            <input type="submit" className="form button" value="Login" onClick={this.onSubmit} />
          </div>
        </form>
        </Modal.Body>
      </div>
    </Modal>
  </div>
  )
  }
}

export default Login;