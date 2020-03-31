import React from 'react';
import NavBar from '../Components/NavBar';
import DisplayAssign from '../Components/DisplayAssign';
import './AssignList.css';
import AddAss from '../Components/AddAss.js';

class AssignList extends React.Component {
  constructor(props){
    super(props);
    this.state = {token: this.props.token, id: this.props.id};
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
    const {assignments} = this.props;
      return (
        <div>
          <NavBar 
                  token={this.state.token}
                  handleToken={this.handleToken.bind(this)}
                  id={this.state.id}
                  handleId={this.handleId.bind(this)}
                  />
          <div className="body">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
            <DisplayAssign token={this.state.token} handleToken={this.handleToken.bind(this)} assignments={assignments} id={this.state.id} handleId={this.handleId.bind(this)}/>
            <AddAss token={this.state.token} handleToken={this.handleToken.bind(this)} id={this.state.id} handleId={this.handleId.bind(this)}/>
          </div> 
        </div>
      )
    }
}
    
  

export default AssignList;
