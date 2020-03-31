import React from "react";
import Test from './Test';
import './DisplayAssign.css';


const DisplayAssign = ({ assignments, token, id, handleId})  => {
    if (token!=="") {
        return (
            <div>
                <div className="body">
                    {
                        assignments.map((user, i) => {
                            return (<Test 
                            key={i}
                            tid={assignments[i].id} 
                            uid={assignments[i].user_id} 
                            due_date={assignments[i].due_date} 
                            title={assignments[i].title}
                            token={token}
                            id={id}
                            handleId={handleId}
                            />);
                        })
                    }
                </div>
            </div>
        );
    }
    else return(
        <div>
            <h2 className="daMes">Please, log in.</h2>
        </div>
    );
}


//accessed current login, password by destructuring


export default DisplayAssign;