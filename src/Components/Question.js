import React from 'react';
import './Question.css';
import axios from 'axios';
import { apiBaseUrl } from '../Components/config.js';


class Question extends React.Component {
    constructor(props){
        super(props);
        this.state={
            qid: this.props.qid,
            tid: this.props.tid,
            text: this.props.text,
            correct_answer: this.props.correct_answer,
            incorrect_answer_1: this.props.incorrect_answer_1,
            incorrect_answer_2: this.props.incorrect_answer_2,
            incorrect_answer_3: this.props.incorrect_answer_3,
            uid: this.props.uid,
            token: this.props.token,
            due_date: this.props.due_date
        }
    }

    onClick = (e) => {

        var flag=false;
        if (e.target.value === this.state.correct_answer)
            flag=true;
        
        var answer = {
            "assignment_id": this.state.tid,
            "question_id": this.state.qid,
            "user_id": this.state.uid,
            "text": e.target.value,
            "correct": flag
        }

        var self = this;
        axios.post(apiBaseUrl+'/answer', answer, { headers: { authorization: `Bearer ${self.state.token}` } })
        .then((response)=> {console.log(response)});

    }
    
    render(){
    const order=Math.ceil(Math.random() * 4);
    switch (order%4) {
        case 0: 
            return (
                <div id="body">
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
                    <div className="question-content">
                        <p className="question text">{this.state.text}</p>
                        <ul className="question list">
                            <li className="option">
                                <input type="radio" id="incorrect_answer_1" name={this.state.qid} value={this.state.incorrect_answer_1} onClick={this.onClick}/>
                                <label htmlFor="incorrect_answer_1">{this.state.incorrect_answer_1}</label>
                            </li>
                            <li className="option"> 
                                <input type="radio" id="incorrect_answer_2" name={this.state.qid} value={this.state.incorrect_answer_2} onClick={this.onClick}/>
                                <label htmlFor="incorrect_answer_2">{this.state.incorrect_answer_2}</label>
                            </li>
                            <li className="option">
                                <input type="radio" id="correct_answer" name={this.state.qid} value={this.state.correct_answer} onClick={this.onClick}/>
                                <label htmlFor="correct_answer">{this.state.correct_answer}</label>
                            </li>
                            <li className="option">
                                <input type="radio" id="incorrect_answer_3" name={this.state.qid} value={this.state.incorrect_answer_3} onClick={this.onClick}/>
                                <label htmlFor="incorrect_answer_3">{this.state.incorrect_answer_3}</label>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            );
        case 1: 
            return (
                <div id="body">
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
                    <div className="question-content">
                        <p className="question text">{this.state.text}</p>
                        <ul className="question list">
                            <li className="option">
                                <input type="radio" id="correct_answer" name={this.state.qid} value={this.state.correct_answer} onClick={this.onClick}/>
                                <label htmlFor="correct_answer">{this.state.correct_answer}</label>
                            </li>
                            <li className="option">
                                <input type="radio" id="incorrect_answer_1" name={this.state.qid} value={this.state.incorrect_answer_1} onClick={this.onClick}/>
                                <label htmlFor="incorrect_answer_1">{this.state.incorrect_answer_1}</label>
                            </li>
                            <li className="option"> 
                                <input type="radio" id="incorrect_answer_2" name={this.state.qid} value={this.state.incorrect_answer_2} onClick={this.onClick}/>
                                <label htmlFor="incorrect_answer_2">{this.state.incorrect_answer_2}</label>
                            </li>
                            <li className="option">
                                <input type="radio" id="incorrect_answer_3" name={this.state.qid} value={this.state.incorrect_answer_3} onClick={this.onClick}/>
                                <label htmlFor="incorrect_answer_3">{this.state.incorrect_answer_3}</label>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            );
        case 2: 
            return (
                <div id="body">
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
                    <div className="question-content">
                        <p className="question text">{this.state.text}</p>
                        <ul className="question list">
                            <li className="option">
                                <input type="radio" id="incorrect_answer_1" name={this.state.qid} value={this.state.incorrect_answer_1} onClick={this.onClick}/>
                                <label htmlFor="incorrect_answer_1">{this.state.incorrect_answer_1}</label>
                            </li>
                            <li className="option"> 
                                <input type="radio" id="incorrect_answer_2" name={this.state.qid} value={this.state.incorrect_answer_2} onClick={this.onClick}/>
                                <label htmlFor="incorrect_answer_2">{this.state.incorrect_answer_2}</label>
                            </li>
                            <li className="option">
                                <input type="radio" id="incorrect_answer_3" name={this.state.qid} value={this.state.incorrect_answer_3} onClick={this.onClick}/>
                                <label htmlFor="incorrect_answer_3">{this.state.incorrect_answer_3}</label>
                                
                            </li>
                            <li className="option">
                                <input type="radio" id="correct_answer" name={this.state.qid} value={this.state.correct_answer} onClick={this.onClick}/>
                                <label htmlFor="correct_answer">{this.state.correct_answer}</label>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        case 3: 
            return (
                <div id="body">
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
                    <div className="question-content">
                        <p className="question text">{this.state.text}</p>
                        <ul className="question list">
                            <li className="option">
                                <input type="radio" id="incorrect_answer_1" name={this.state.qid} value={this.state.incorrect_answer_1} onClick={this.onClick}/>
                                <label htmlFor="incorrect_answer_1">{this.state.incorrect_answer_1}</label>
                            </li>
                            <li className="option">
                                <input type="radio" id="correct_answer" name={this.state.qid} value={this.state.correct_answer} onClick={this.onClick}/>
                                <label htmlFor="correct_answer">{this.state.correct_answer}</label>
                            </li>
                            <li className="option"> 
                                <input type="radio" id="incorrect_answer_2" name={this.state.qid} value={this.state.incorrect_answer_2} onClick={this.onClick}/>
                                <label htmlFor="incorrect_answer_2">{this.state.incorrect_answer_2}</label>
                            </li>
                            
                            <li className="option">
                                <input type="radio" id="incorrect_answer_3" name={this.state.qid} value={this.state.incorrect_answer_3} onClick={this.onClick}/>
                                <label htmlFor="incorrect_answer_3">{this.state.incorrect_answer_3}</label>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            );
    }
    

    }
}


export default Question;