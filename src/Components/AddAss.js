import React from 'react';
import ReactDOM from 'react-dom';
import AddQuest from "../Containers/AddQuest.js"

class AddAss extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login:this.props.login, teacher: this.props.teacher, password: this.props.password, tid: 0, title: "", due_date: '', mul_que: 0};     
    }

    componentDidMount() {
        if (this.state.teacher === true) {
            var body=document.getElementById("buttonsBody");
            body.removeAttribute("hidden");
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.teacher !== prevProps.teacher) {
            this.setState({teacher: this.props.teacher});
        }
        
        if (this.state.teacher === true) {
            var body=document.getElementById("buttonsBody");
            body.removeAttribute("hidden");
        }
        
    }

    openAddQuest(){
        //ADDING NEW ASSIGNMENT TO DATABASE
        //access info about the assignment via
        //this.state.title, this.state.due_date, this.state.mul_que (number of questions)
        //determine teacher_id via this.state.login
        //return test_id!!!   this.state.tid=test_id
        console.log(this.state.title);
        console.log(this.state.due_date);
        console.log(this.state.mul_que);
        var mul_quest=[];
        for (var i=0; i<this.state.mul_que; i++){
            mul_quest.push(i+1);
        }

        const add_quest = <AddQuest login={this.state.login} password={this.state.password} teacher={this.state.teacher} mul={this.state.mul_que} mul_quest={mul_quest} tid={this.state.tid}/>;
        ReactDOM.render(add_quest, document.getElementById('root'));
    }

    changeQuan = (e) => {
        e.preventDefault();
        this.setState({mul_que: e.target.value});
    } 

    changeTitle = (e) => {
        e.preventDefault();
        this.setState({title: e.target.value});
    } 
    
    changeDate = (e) => {
        e.preventDefault();
        this.setState({due_date: e.target.value});
    } 

    render(){
        return(
            <div hidden id="buttonsBody">
                <div>
                    <h1 className="addAssTitle">Add New Assignment</h1>
                    <input id='assTitle' type="text" placeholder="Type here the title of the assignment" onChange={this.changeTitle}/>
                    <label htmlFor="mul_que">Choose the number of multiple choice questions: </label>
                    <input type="number" id="mul_que" name="mul_que" min="0" max="20" onChange={this.changeQuan}/><br />
                    <label htmlFor="due_date">Choose the due date: </label><input type='date' id="due_date" onChange={this.changeDate}/><br/>
                    <input type="submit" value="Add Assignment" onClick={this.openAddQuest.bind(this)}/>
                </div>
            </div>
        )
    }
}


export default AddAss;