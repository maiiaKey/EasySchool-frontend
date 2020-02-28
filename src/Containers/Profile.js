import React from 'react';
import NavBar from '../Components/NavBar';
import users from "../Components/users.js";
import '../Containers/Profile.css';


class Profile extends React.Component {
    constructor(props){
      super(props);
      this.state = {login: this.props.login, password: this.props.password, teacher: this.props.teacher, user: users.filter((user) => {return user.username==this.props.login})};
      
    }

    // componentDidMount(){
    //   console.log(users);
    //     const user = ;
    //     this.setState({user: user});
    // }
    

    handleLogin = (logValue) => {
      this.setState({login: logValue});
    }

    handlePassword = (logPass) => {
      this.setState({password: logPass});
    }

    showTextField = (e) => {
        //console.log(e.target);
        switch (e.target.id) {
            case "changeName": {
              var a=document.getElementById('changeFN');
              a.removeAttribute('hidden');
              a=document.getElementById('changeLN');
              a.removeAttribute('hidden');
              a=document.getElementById('submit1');
              a.removeAttribute('hidden');
              a=document.getElementById('changeName');
              a.setAttribute('hidden', true);
              a=document.getElementById('br1');
              a.removeAttribute('hidden');
              break;
            }
            case "changeUsername": {
              var a=document.getElementById('changeUN');
              a.removeAttribute('hidden');
              a=document.getElementById('submit2');
              a.removeAttribute('hidden');
              a=document.getElementById('changeUsername');
              a.setAttribute('hidden', true);
              break;
            }
            case "changePass": {
              var a=document.getElementById('currentPass');
              a.removeAttribute('hidden');
              a=document.getElementById('newPass');
              a.removeAttribute('hidden');
              a=document.getElementById('submit3');
              a.removeAttribute('hidden');
              a=document.getElementById('changePass');
              a.setAttribute('hidden', true);
              break;
            }
        }

    }

    changeValue = (e) => {
        switch(e.target.id) {
          case "submit1" : {
            //values => DATABASE
            var a=document.getElementById('changeFN');
            a.setAttribute('hidden', true);
            a=document.getElementById('changeLN');
            a.setAttribute('hidden', true);
            a=document.getElementById('submit1');
            a.setAttribute('hidden', true);
            a=document.getElementById('changeName');
            a.removeAttribute('hidden');
            a=document.getElementById('br1');
            a.setAttribute('hidden', true);
            break;
          }
          case "submit2" : {
              //values => DATABASE
              var a=document.getElementById('changeUN');
              a.setAttribute('hidden', true);
              a=document.getElementById('submit2');
              a.setAttribute('hidden', true);
              a=document.getElementById('changeUsername');
              a.removeAttribute('hidden');
              break;
          }
          case "submit3" : {
            //values => DATABASE
            var a=document.getElementById('currentPass');
            a.setAttribute('hidden', true);
            a=document.getElementById('newPass');
            a.setAttribute('hidden', true);
            a=document.getElementById('submit3');
            a.setAttribute('hidden', true);
            a=document.getElementById('changePass');
            a.removeAttribute('hidden');
            break;
          }
        }
    }
    

    render() {
    if (this.state.login !== '' && this.state.password !== "")
    
    {
      const {user} = this.state;
      return (
        <div>
          <NavBar 
                  visible={this.state.visible} 
                  passLogin={this.handleLogin.bind(this)} 
                  passPassword={this.handlePassword.bind(this)}
                  login={this.state.login}
                  password={this.state.password}
                  teacher={this.state.teacher}
                  />
                  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
          <div className="profile">
            <div className="box">
                <h1 className="pfTitle">Your Profile</h1>
                <span classNmae="pfSpan">{user[0].first_name+" "+user[0].last_name}</span><br/>
                <input id="changeName" className="pfBtn" type="submit" value="Edit Name" onClick={this.showTextField}></input>
                <input hidden id="changeFN" type="text" placeholder='Type your new first name' /><br  id="br1" hidden />
                <input hidden id="changeLN" type="text" placeholder='Type your new last name' />
                <br/><input hidden id="submit1" className="pfBtn" type="submit" value="Change" onClick={this.changeValue}></input><br />
                <span classNmae="pfSpan">{"Username: "+user[0].username}</span><br/>
                <input id="changeUsername" className="pfBtn" type="submit" value="Edit Username" onClick={this.showTextField}></input>
                <input id="changeUN" hidden type="text" placeholder='Type your new username' />
                <input hidden id="submit2" className="pfBtn" type="submit" value="Change" onClick={this.changeValue}></input><br/>
                <input id="changePass" className="pfBtn" type="submit" value="Edit Password" onClick={this.showTextField}></input>
                <input id="currentPass" hidden type="text" placeholder='Type your current password' /><br/>
                <input id="newPass" hidden type="text" placeholder='Type your new password' />
                <br/><input hidden id="submit3" className="pfBtn" type="submit" value="Change" onClick={this.changeValue}></input>
                </div>
          </div>
        </div>
      );
    }
    else {
        return (
            <div>
                <NavBar 
                        visible={this.state.visible} 
                        passLogin={this.handleLogin.bind(this)} 
                        passPassword={this.handlePassword.bind(this)}
                        login={this.state.login}
                        password={this.state.password}
                        teacher={this.state.teacher}
                />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
                <h1>Please, log in.</h1>
        </div>
        );
    }

    }
  
}

export default Profile;
