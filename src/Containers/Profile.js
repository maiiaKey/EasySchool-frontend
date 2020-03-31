import React from 'react';
import NavBar from '../Components/NavBar';
import '../Containers/Profile.css';
import axios from 'axios';
import { apiBaseUrl } from '../Components/config.js';


class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = { token: this.props.token, user: this.props.user, id: this.props.id};
    }



    handleToken = (token) => {
      this.setState({token: token});
      this.props.handleToken(token);
    }
    handleId =(id) => {
      this.setState({id: id});
      this.props.handleId(id);
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
              var a=document.getElementById('newPass');
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
            var new_fn = document.getElementById('changeFN').value;
            var new_ln = document.getElementById('changeLN').value;
            var user = {
              "username": "",
              "first_name": new_fn,
              "last_name": new_ln,
              "password": "",
            }
            axios.put(apiBaseUrl+"/user/"+this.state.user.id, user, { headers: { authorization: `Bearer ${this.state.token}` } },);
            document.getElementById('changeFN').setAttribute('hidden', true);
            document.getElementById('changeLN').setAttribute('hidden', true);
            document.getElementById('submit1').setAttribute('hidden', true);
            document.getElementById('changeName').removeAttribute('hidden');
            document.getElementById('br1').setAttribute('hidden', true);
            break;
          }
          case "submit2" : {
              var user = {
                "username": document.getElementById('changeUN').value,
                "first_name": "",
                "last_name": "",
                "password": "",
              }
              axios.put(apiBaseUrl+"/user/"+this.state.user.id, user, { headers: { authorization: `Bearer ${this.state.token}` } });

              document.getElementById('changeUN').setAttribute('hidden', true);
              document.getElementById('submit2').setAttribute('hidden', true);
              document.getElementById('changeUsername').removeAttribute('hidden');
              break;
          }
          case "submit3" : {

            var new_pass = document.getElementById('newPass').value;
            var user = {
              "username": "",
              "first_name": "",
              "last_name": "",
              "password": new_pass,
            }
            axios.put(apiBaseUrl+"/user/"+this.state.user.id, user, { headers: { authorization: `Bearer ${this.state.token}` } });
            document.getElementById('newPass').setAttribute('hidden', true);
            document.getElementById('submit3').setAttribute('hidden', true);
            document.getElementById('changePass').removeAttribute('hidden');
            break;
          }
        }
    }
    

    render() {
    if (this.state.token !== '')
    {
      const {user} = this.state;
      return (
        <div>
          <NavBar 
                  handleToken={this.handleToken.bind(this)}
                  token={this.state.token}
                  id={this.state.id}
                  handleId={this.handleId.bind(this)}
                  />
                  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
          <div className="profile">
            <div className="box">
                <h1 className="pfTitle">Your Profile</h1>
                <span className="pfSpan">{user.first_name+" "+user.last_name}</span><br/>
                <input id="changeName" className="pfBtn" type="submit" value="Edit Name" onClick={this.showTextField}></input>
                <input hidden id="changeFN" type="text" placeholder='Type your new first name' /><br  id="br1" hidden />
                <input hidden id="changeLN" type="text" placeholder='Type your new last name' />
                <br/><input hidden id="submit1" className="pfBtn" type="submit" value="Change" onClick={this.changeValue}></input><br />
                <span className="pfSpan">{"Username: "+user.username}</span><br/>
                <input id="changeUsername" className="pfBtn" type="submit" value="Edit Username" onClick={this.showTextField}></input>
                <input id="changeUN" hidden type="text" placeholder='Type your new username' />
                <input hidden id="submit2" className="pfBtn" type="submit" value="Change" onClick={this.changeValue}></input><br/>
                <input id="changePass" className="pfBtn" type="submit" value="Edit Password" onClick={this.showTextField}></input>
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
                      handleToken={this.handleToken.bind(this)}
                      token={this.state.token}
                      id={this.state.id}
                      handleId={this.handleId.bind(this)}
                />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
                <h2 className="pfMes">Please, log in.</h2>
        </div>
        );
    }

    }
  
}

export default Profile;
