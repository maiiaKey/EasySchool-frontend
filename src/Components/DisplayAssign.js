import React from "react";
import Test from './Test';
import './DisplayAssign.css';


const DisplayAssign = ({ assignments, display, login, password })  => {
    if (display) {
        return (
            <div>
                <div className="body">
                    {
                        assignments.map((user, i) => {
                            return (<Test 
                            key={i}
                            tid={assignments[i].tid} 
                            uid={assignments[i].uid} 
                            due_date={assignments[i].due_date} 
                            title={assignments[i].title}
                            login={login}
                            password={password}
                            />);
                        })
                    }
                </div>
            </div>
        );
    }
    else return(
        <div>
            <p>Please, log in.</p>
        </div>
    );
}


//accessed current login, password by destructuring


export default DisplayAssign;