import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../Components/NavBar';
import axios from 'axios';
import { apiBaseUrl } from '../Components/config.js';
import "../Containers/AddQuest.css";

class AssignList extends React.Component {
  constructor(props){
    super(props);
    this.state = {id: this.props.id, token: this.props.token, mul: this.props.mul, mul_quest: this.props.mul_quest, q:"", ca:"", i1: "", i2: "", i3: ""};
  }

  handleToken = (token) => {
    this.setState({token: token});
    this.props.handleToken(token);
  }
  handleId = (id) => {
    this.setState({id: id});
    this.props.handleToken(id);
}

  submitQuestion(){
    const {q,ca,i1,i2,i3} =this.state;
    var quest = {
      "assignment_id": this.props.tid,
      "type": 0,
      "text": q,
      "correct_answer": ca,
      "incorrect_answer_1": i1,
      "incorrect_answer_2": i2,
      "incorrect_answer_3": i3,
    }
    console.log(quest);
    var self = this;
    axios.post(apiBaseUrl+'/question',quest, { headers: { authorization: `Bearer ${self.state.token}` } })
    .then((response) => {
        console.log(response);
    });
    
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
          <NavBar  
                  handleToken={this.handleToken.bind(this)} 
                  token={this.state.token} 
                  id={this.state.id}
                  handleId={this.handleId.bind(this)}/>
          <div className="body">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
                {
                    this.state.mul_quest.map((quest, i) => {

                                return (
                                  <div className="content-quest">
                                    <h1 className="number-quest">{i+1}</h1>
                                    <input className="input-quest" type="text" id={"typeQuestion"+i} name="question" placeholder="Type here your question" onChange={this.onChange.bind(this)} /><br />
                                    <input className="input-quest" type="text" id={"correct_answer"+i} name="correct_answer" placeholder="Type here the correct answer" onChange={this.onChange.bind(this)}/><br />
                                    <input className="input-quest" type="text" id={"incorrect_answer_1"+i} name="incorrect_answer_1" placeholder="Type here the first incorrect answer" onChange={this.onChange.bind(this)}/><br />
                                    <input className="input-quest" type="text" id={"incorrect_answer_2"+i} name="incorrect_answer_2" placeholder="Type here the second incorrect answer" onChange={this.onChange.bind(this)}/><br />
                                    <input className="input-quest" type="text" id={"incorrect_answer_3"+i} name="incorrect_answer_3" placeholder="Type here the third incorrect answer" onChange={this.onChange.bind(this)}/><br />
                                    <input className="submit-quest" type="submit" id={i} name="submit_question" onClick={this.submitQuestion.bind(this)} />
                                  </div>
                                );
                            })
                        
                }
                <input className="submit-quest" type="submit" value="Add Assignment" onClick={this.onClick}/>
                <h3 hidden className="submit-message" id="message" >The assignment was added!</h3>
            </div>
        </div>
        
      )
    }
}
    

    
  

export default AssignList;
