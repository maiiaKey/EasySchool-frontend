import './Login.css';
import axios from 'axios';
import { apiBaseUrl } from '../Components/config.js';                
import React from "react";
import Modal from 'react-bootstrap/Modal';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {login: "", password: "", token:""};
    this.onSubmit = this.onSubmit.bind(this);
    
  }

  handleId =(id) => {
    this.setState({id: id});
    this.props.handleId(id);
}

  handleToken = (token) => {
    this.setState({token: token});
    this.props.handleToken(token);
}

componentDidUpdate(prevState) {
  if (this.state.token !== prevState.token && this.state.token!==""){
    var self = this;
    var users = [];
    axios.get(apiBaseUrl+'/user', { headers: { authorization: `Bearer ${this.state.token}` } })
      .then(function (response) {
        users=response.data.rows;
        const user = users.filter((user)=> {return user.username===self.state.login});
        self.props.handleId(user[0].id);
      }); 
  }

}

  changeLogin = (e) => {
    this.setState({login: e.target.value});
  }
  changePass = (e) => {
    this.setState({password: e.target.value});
  }
  onSubmit(e){
    e.preventDefault();
    var payload={
      "username": this.state.login,
      "password": this.state.password
    };
    console.log(payload);
    var self = this;
    axios.post(apiBaseUrl + '/auth', payload)
       .then((response) => {
          if (response.status == 200){
            self.handleToken(response.data.token);
          } else {
              alert(response);
          }
       })
       .catch((error) => {
          console.log(error);
       });
    this.props.handleVisible();
    
  }
  render() {
  return( 
  <div>
    {/* handling the visibility of Modal */}
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
            {/* Username input field */}
            <label className="form luser">Username</label>
            <input type="text" id="fuser" name="fuser" value={this.state.login} onChange={this.changeLogin} /*changing the username of this component*/ /><br />
          </div>
          <div className="line">
            {/* Password input field */}
            <label className="form lpass">Password</label>
            <input type="password" id="fpass" name="fpass" value={this.state.password} onChange={this.changePass} /*changing the password of this component*/ /><br />
          </div>
          <div className="buttonHolder">
            {/* Login button */}
            <input type="submit" className="form button" value="Login" onClick={this.onSubmit} /*sending the token to the parent*/ />
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