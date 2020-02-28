import React from 'react';
import ReactDOM from 'react-dom';
import AddQuest from "../Containers/AddQuest.js"

class AddAss extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login:this.props.login, teacher: this.props.teacher, password: this.props.password, mul_que: 0};
        console.log(this.state.teacher);
        
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
        var mul_quest=[];
        for (var i=0; i<this.state.mul_que; i++){
            mul_quest.push(i+1);
        }

        const add_quest = <AddQuest login={this.state.login} password={this.state.password} teacher={this.state.teacher} mul={this.state.mul_que} mul_quest={mul_quest}/>;
        ReactDOM.render(add_quest, document.getElementById('root'));
    }

    changeQuan = (e) => {
        e.preventDefault();
        this.setState({mul_que: e.target.value});
        
    } 
    

    render(){
        return(
            <div hidden id="buttonsBody">
                <div>
                    <h1 className="addAssTitle">Add New Assignment</h1>
                    <label htmlFor="mul_que">Choose the number of multiple choice questions: </label>
                    <input type="number" id="mul_que" name="mul_que" min="0" max="20" onChange={this.changeQuan}/><br />
                    <input type='date' id="due_date" />
                    <input type="submit" value="Add Assignment" onClick={this.openAddQuest.bind(this)}/>
                </div>
            </div>
        )
    }
}


export default AddAss;