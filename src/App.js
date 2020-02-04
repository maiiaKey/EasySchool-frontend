import React from 'react';
import NavBar from './NavBar';
import Login from './Login';
import './App.css';


class App extends React.Component {
    constructor(){
      super();
      this.state = {login: "", password: ""};
    }

    render() {
      return (
        <div>
          <NavBar handlePopup={this.handleClick} visible={this.state.visible}/>
        </div>
      );
    }
  
}

export default App;
