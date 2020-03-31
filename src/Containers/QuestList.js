import React from 'react';
import NavBar from '../Components/NavBar';
import DisplayQuest from '../Components/DisplayQuest';


class QuestList extends React.Component {
    constructor(props){
      super(props);
      this.state = {due_date: this.props.due_date, 
                    token: this.props.token,  
                    questions: this.props.questions,
                    tid: this.props.tid,
                    answers:this.props.answers,
                    users: this.props.users,
                    id: this.props.id
                  };
    }

    handleToken = (token) => {
      this.setState({token: token});
      this.props.handleToken(token);
    }

    handleId = (id) => {
      this.setState({id: id});
      this.props.handleToken(id);
    }

    render(){
        return (
          <div>
            <NavBar token={this.state.token}
                    handleToken={this.handleToken.bind(this)} 
                    id={this.state.id}
                    handleId={this.handleId.bind(this)} 

            />
            <div className="body">
              <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
              <DisplayQuest users={this.state.users} tid={this.state.tid} questions={this.state.questions} answers={this.state.answers} token={this.state.token} handleToken={this.handleToken.bind(this)} id={this.state.id} handleId={this.handleId.bind(this)} due_date={this.state.due_date}/>
            </div> 
          </div>
        )
      }
  }
      
    
  
  export default QuestList;