import React from 'react';
import './Test.css';
import ReactDOM from 'react-dom';
import QuestList from '../Containers/QuestList';
import questions from "../Components/questions.js";
import axios from 'axios';
import { apiBaseUrl } from '../Components/config.js';





class Test extends React.Component { 
    constructor(props){
        super(props);
        this.state = { tid: this.props.tid, questions: [], title: this.props.title, due_date: this.props.due_date, uid: this.props.uid,login: this.props.login, password: this.props.password, teacher:this.props.teacher};
    }

    openQuestions = () => {
        const testQuestions = this.state.questions.filter((question) => {
                return question.assignment_id == this.state.tid;
        });
        console.log(this.state.questions);
        const display_quest = <QuestList tid={this.state.tid} due_date={this.state.due_date} login={this.state.login} password={this.state.password} questions={testQuestions} teacher={this.state.teacher}/>;
        ReactDOM.render(display_quest, document.getElementById('root'));
    }

    componentDidMount() {
        var self=this;
        axios.get(apiBaseUrl+'/question')
        .then((response)=> {
            self.setState({questions: response.data.rows});
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
                        <span className="test-info-date">Due: {this.state.due_date}</span><br />
                    </div>
                    </a>
                </div>

            </div>
        </div>
    );
    }
}

export default Test;