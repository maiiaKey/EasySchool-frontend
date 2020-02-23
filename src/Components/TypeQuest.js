import React from 'react';
// import './Question.css';


//props: <mul login password teacher>


const TypeQuest = ({index}) => {
    return (
        <div id="body">
            <h1>{index+1}</h1>
            <input type="text" id={"typeQuestion"+index} name="question" placeholder="Type here your question"/><br />
            <input type="text" id={"correct_answer"+index} name="correct_answer" placeholder="Type here the correct answer"/><br />
            <input type="text" id={"incorrect_answer_1"+index} name="incorrect_answer_1" placeholder="Type here the first incorrect answer"/><br />
            <input type="text" id={"incorrect_answer_2"+index} name="incorrect_answer_2" placeholder="Type here the second incorrect answer"/><br />
            <input type="text" id={"incorrect_answer_3"+index} name="incorrect_answer_3" placeholder="Type here the third incorrect answer"/><br />
        </div>
    );
}

export default TypeQuest;