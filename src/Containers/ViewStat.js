import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../Components/NavBar';
import Chart from "react-google-charts";
import ViewIndiv from '../Containers/ViewIndiv.js';

const pieOptions = {
    title: "",
    pieHole: 0,
    slices: [
      {
        color: "#2BB673"
      },
      {
        color: "#d91e48"
      },
      {
        color: "#007fad"
      },
      {
        color: "#e9a227"
      }
    ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14
      }
    },
    tooltip: {
      showColorCode: true
    },
    chartArea: {
      left: 0,
      top: 0,
      width: "100%",
      height: "80%"
    },
    fontName: "Roboto"
  };

class ViewStat extends React.Component {
    constructor(props){
      super(props);
      this.state = { 
                    login: this.props.login, 
                    password: this.props.password, 
                    tid: this.props.tid,
                    teacher: this.props.teacher
                };
    }

    handleLogin = (logValue) => { this.setState({login: logValue});}
    handlePassword = (logPass) => { this.setState({password: logPass});}

    onClick = () => {
        const display_indiv = <ViewIndiv login={this.state.login} password={this.state.password} tid={this.state.tid} teacher={this.state.teacher}/>;
        ReactDOM.render(display_indiv, document.getElementById('root'));
    }

    render(){
        return (
          <div>
            <NavBar visible={false} 
                    passLogin={this.handleLogin.bind(this, 'login')} 
                    passPassword={this.handlePassword.bind(this, 'password')} 
                    login={this.state.login}
                    password={this.state.password}
                    teacher={true} />
            <div className="body">
              <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
              
              <div id="piechart">
                <Chart
                    chartType="PieChart"
                    data={[["Age", "Weight"], ["a", 12], ["b", 5.5]]}
                    options={pieOptions}
                    graph_id="PieChart"
                    width={"100%"}
                    height={"400px"}
                    legend_toggle
                />
                <input type="submit" value="View Individual Answers" onClick={this.onClick} />
              </div>
            </div> 
          </div>
        )
      }
  }
      
    
  
  export default ViewStat;