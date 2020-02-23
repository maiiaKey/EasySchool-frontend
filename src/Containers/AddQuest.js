import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../Components/NavBar';
import TypeQuest from '../Components/TypeQuest';
// import './AssignList.css';
//Add Questions screen


class AssignList extends React.Component {
  constructor(props){
    super(props);
    //props: teacher, login, password, mul
    this.state = {login: this.props.login, teacher: this.props.teacher, mul: this.props.mul, mul_quest: this.props.mul_quest};
  }

  componentDidMount() {
    
}

  handleLogin = (logValue) => {
    this.setState({login: logValue});
  }

  handlePassword = (passValue) => {
    this.setState({password: passValue});
  }

  onClick(){
    var st=document.getElementById('message');
    st.removeAttribute('hidden'); 
    //alert("The assignment was added!");
  }
    
    render(){
      return (
        <div>
          <NavBar handlePopup={this.handleClick} 
                  visible={false} 
                  passLogin={this.handleLogin.bind(this, 'login')} 
                  passPassword={this.handlePassword.bind(this, 'password')} 
                  login={this.state.login}
                  password={this.state.password}
                  teacher={this.state.teacher} />
          <div className="body">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
                {
                    this.state.mul_quest.map((quest,i) => {
                                return (<TypeQuest key={i} index={i}/>);
                            })
                        
                }
                <input type="submit" value="Add Assignment" onClick={this.onClick}/>
                <h3 hidden id="message" >The assignment was added!</h3>
            </div>
        </div>
        
      )
    }
}
    

    
  

export default AssignList;
