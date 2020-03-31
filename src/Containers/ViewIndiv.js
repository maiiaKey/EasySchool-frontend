import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../Components/NavBar';
import StudAnswersList from '../Containers/StudAnswersList.js';
import "../Containers/ViewIndiv.css";

class ViewIndiv extends React.Component {
    constructor(props){
      super(props);
      const temp = this.props.users.filter((user) => {return user.teacher==false});
      this.state = { 
                    questions: this.props.questions,
                    answers: this.props.answers,
                    token: this.props.token, 
                    tid: this.props.tid,
                    students: temp,
                    id: this.props.id
                };
    }

    handleToken = (token) => {
      this.setState({token: token});
      this.props.handleToken(token);
    }
    handleId = (id) => {
      this.setState({uid: id});
      this.props.handleToken(id);
    }

    onClick = (e) => {
        const display_indiv = <StudAnswersList 
                              uid={parseInt(e.target.name,10)}
                              tid={this.state.tid} 
                              token={this.state.token}
                              handleToken={this.handleToken.bind(this)}
                              questions={this.state.questions}
                              answers={this.state.answers}
                              teacher={true}
                              handleId={this.handleId.bind(this)}
                              />;
        ReactDOM.render(display_indiv, document.getElementById('root'));
    }

    render(){
        const {students} = this.state;
        return (
          <div>
            <NavBar token={this.state.token}
                    handleToken={this.handleToken.bind(this)} 
                    id={this.state.id}
                    handleId={this.handleId.bind(this)} 
            />
            <div className="indiv-body">
              <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
                <h1 className="indiv-title">Pick a student</h1>
                {students.map((student, i) => {
                    return(
                        <div className="indiv-content">
                            <span className="indiv-name">{student.first_name+" "+student.last_name}</span>
                            <input className="indiv-btn" type="submit" name={student.id} value="Pick" onClick={this.onClick} />
                        </div>
                    )
                })}
              
            </div> 
          </div>
        )
      }
  }
      
    
  
  export default ViewIndiv;