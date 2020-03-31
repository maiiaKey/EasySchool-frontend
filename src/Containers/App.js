import React from 'react';
import NavBar from '../Components/NavBar';
import './App.css';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {token: this.props.token, id: this.props.id};
    }

    handleToken =(token) => {
      this.setState({token: token});
    }
    handleId =(id) => {
      this.setState({id: id});
    }


    render() {
      console.log("App: "+this.state.token);
      return (
        <div>
          {/* custom navbar component */}
          <NavBar 
                  token={this.state.token} 
                  handleToken={this.handleToken.bind(this)}
                  id={this.state.id} 
                  handleId={this.handleId.bind(this)}
                  />
          <div className="homepage-content">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
            <h2 className="homepage-title">Welcome to the EasySchool WebApp!</h2>
            <h3 className="homepage-text">Are you tired of using Excel to keep track of your student's 
              homework assignments? Easyschool is the right solution
              for you.
            </h3>
            <h3 className="homepage-text">With the help of the EasySchool WebApp the teacher can:</h3>
            <ul className="homepage-list">
              <li>add homework assignments in a few clicks</li>
              <li>create custom questions or assign custom excercises</li>
              <li>easily manage the list of students</li>
              <li>view statistics about each assignment</li>
              <li>view individual answers of each student</li>
            </ul>
            <div className="homepage-footer">
            <h3 className="footer-title">Contact</h3>
            <h5 className="footer-text">If you have any questions or issues you may contact the developer at:</h5>
            <h5 className="footer-text">mayak29052003@gmail.com</h5>
            </div>
          </div>
        </div>
      );
    }
  
}

export default App;