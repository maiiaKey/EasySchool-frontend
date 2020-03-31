import React from 'react';
import './Test.css';
import ReactDOM from 'react-dom';
import QuestList from '../Containers/QuestList';
import axios from 'axios';
import { apiBaseUrl } from '../Components/config.js';





class Test extends React.Component { 
    constructor(props){
        super(props);
        this.state = { users:[], answers:[], tid: this.props.tid, questions: [], title: this.props.title, due_date: this.props.due_date, uid: this.props.uid, token:this.props.token, id: this.props.id};
    }

    openQuestions = () => {
        const testQuestions = this.state.questions.filter((question) => {
                return question.assignment_id == this.state.tid });
        const display_quest = <QuestList users={this.state.users} tid={this.state.tid} due_date={this.state.due_date} questions={testQuestions} token={this.state.token} handleToken={this.handleToken.bind(this)} id={this.state.id} handleId={this.handleId.bind(this)} answers={this.state.answers}/>;
        ReactDOM.render(display_quest, document.getElementById('root'));
    }

    handleToken = (token) => {
        this.setState({token: token});
        this.props.handleToken(token);
    }
    
    handleId = (id) => {
        this.setState({id: id});
        this.props.handleToken(id);
    }

    componentDidMount() {
        var self=this;
        axios.get(apiBaseUrl+'/question', { headers: { authorization: `Bearer ${this.state.token}` } })
        .then((response)=> {
            self.setState({questions: response.data.rows});
        });

        axios.get(apiBaseUrl+'/answer', { headers: { authorization: `Bearer ${this.state.token}` } })
        .then((response)=> {
            self.setState({answers: response.data.rows});
        });

        axios.get(apiBaseUrl+'/user', { headers: { authorization: `Bearer ${this.state.token}` } })
        .then((response)=> {
            self.setState({users: response.data.rows});
        });
    }

    render(){
    return (
        <div id="test_body">
            <div className="test-test">
                <div className="test-container">
                    <a className="test-clickable" href="#" onClick={this.openQuestions.bind(this)}>
                    <span className="test-title">{this.state.title}</span>
                    <div className="test-infoDiv">
                        <span className="test-info-date">Due: {this.state.due_date.substring(0,10)}</span><br />
                    </div>
                    </a>
                </div>

            </div>
        </div>
    );
    }
}

export default Test;