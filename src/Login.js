

                    // <form>
                    //     <h3>Please enter your username and password</h3>
                    //     <label>
                    //         Username:
                    //         <input type="text" name="username" />
                    //     </label>
                    //     <br />
                    //     <label>
                    //         Password:
                    //         <input type="password" name="password" />
                    //     </label>
                    //     <input type="submit" />
                    // </form>
                    
import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Login = (props) => {
  console.log("Login "+props.visible)
  return( 
  <div>
    <Modal show={props.visible} onHide={props.handleVisible}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>...</Modal.Body>
    </Modal>
  </div>
  )
};

export default Login;