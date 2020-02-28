import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../Components/NavBar';


class AssignList extends React.Component {
  constructor(props){
    super(props);
    //props: teacher, login, password, mul
    this.state = {login: this.props.login, teacher: this.props.teacher, mul: this.props.mul, mul_quest: this.props.mul_quest, q:"", ca:"", i1: "", i2: "", i3: ""};
  }

  handleLogin = (logValue) => {
    this.setState({login: logValue});
  }

  handlePassword = (passValue) => {
    this.setState({password: passValue});
  }

  submitQuestion(){
    const {q,ca,i1,i2,i3} =this.state;
    //ADDING ONE QUESTIONS TO DATABSAE
    //access info about it through q, ca], i1, i2, i3
    //q = text of the question
    //ca = correct_answer
    //i1, i2, i3 = incorrect_answer_1/2/3
    
    
  }

  onClick(){
    var st=document.getElementById('message');
    st.removeAttribute('hidden'); 
  }

  onChange(e){
    switch (e.target.name) {
      case 'question' : { this.setState({q: e.target.value}); break;}
      case 'correct_answer' : {this.setState({ca: e.target.value}); break;}
      case 'incorrect_answer_1': {this.setState({i1: e.target.value}); break;}
      case 'incorrect_answer_2': {this.setState({i2: e.target.value}); break;}
      case 'incorrect_answer_3': {this.setState({i3: e.target.value}); break;}
    }


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
                    this.state.mul_quest.map((quest, i) => {

                                return (
                                  <div>
                                    <h1>{i+1}</h1>
                                    <input type="text" id={"typeQuestion"+i} name="question" placeholder="Type here your question" onChange={this.onChange.bind(this)} /><br />
                                    <input type="text" id={"correct_answer"+i} name="correct_answer" placeholder="Type here the correct answer" onChange={this.onChange.bind(this)}/><br />
                                    <input type="text" id={"incorrect_answer_1"+i} name="incorrect_answer_1" placeholder="Type here the first incorrect answer" onChange={this.onChange.bind(this)}/><br />
                                    <input type="text" id={"incorrect_answer_2"+i} name="incorrect_answer_2" placeholder="Type here the second incorrect answer" onChange={this.onChange.bind(this)}/><br />
                                    <input type="text" id={"incorrect_answer_3"+i} name="incorrect_answer_3" placeholder="Type here the third incorrect answer" onChange={this.onChange.bind(this)}/><br />
                                    <input type="submit" id={i} name="submit_question" onClick={this.submitQuestion.bind(this)} />
                                  </div>
                                );
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
