import React from 'react';
import './Test.css';
import ReactDOM from 'react-dom';
import QuestList from '../Containers/QuestList';
import questions from "../Components/questions.js";





class Test extends React.Component { 
    constructor(props){
        super(props);
        this.state = { tid: this.props.tid, questions: [], title: this.props.title, due_date: this.props.due_date, uid: this.props.uid,login: this.props.login, password: this.props.password, teacher:this.props.teacher};
    }

    openQuestions = () => {
        const testQuestions = this.state.questions.filter((question) => {
                return question.tid == this.state.tid;
        });
        const display_quest = <QuestList due_date={this.state.due_date} login={this.state.login} password={this.state.password} questions={testQuestions} teacher={this.state.teacher}/>;
        ReactDOM.render(display_quest, document.getElementById('root'));
    }

    componentDidMount() {
        this.setState({questions: questions}); //DATABASE
    }

    render(){
    
    return (
        <div id="body">
            <div className="test">
                <div className="container">
                    <a className="clickable" href="#" onClick={this.openQuestions.bind(this)}>
                    <span className="test title">{this.state.title}</span>
                    <div className="infoDiv">
                        <span className="test info date">Due: {this.state.due_date}</span><br />
                        <span className="test info">From: {this.state.uid}</span><br />
                    </div>
                    </a>
                </div>

            </div>
        </div>
    );
    }
}

export default Test;