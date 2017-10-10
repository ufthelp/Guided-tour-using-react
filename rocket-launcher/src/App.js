import React, { Component } from 'react';
import Background from './Background/Background';
import Grid from './Grid/Grid';
import Rocket from './Rocket/Rocket';
import Smoke from './Rocket/Smoke';
import Title from './Title/Title';
import Tour from "react-user-tour"


import facts from './NASA_facts.json';
//modules
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      facts,
      isTourActive: false,
			tourStep: 1
     
    };
  }
	componentDidMount() {
		/* set state to active in cDM to make sure nodes being attached to have been mounted */
		this.setState({
			isTourActive: true
		});
	}
  updateClicked=(id)=>{
    let stateCopy = Object.assign({}, this.state);
    stateCopy.facts[id].clicked = true;
    this.setState(stateCopy);
  }
  render() {

    return (
      <div className="app">
        <Tour
					active={this.state.isTourActive}
					step={this.state.tourStep}
					onNext={(step) => this.setState({tourStep: step})}
					onBack={(step) => this.setState({tourStep: step})}
					onCancel={() => this.setState({isTourActive: false})}
					steps={[
						{
							step: 1,
							selector: ".card0",
							title: <div className="tour-title-txt ">Begining of History</div>,
							body: <div className="tour-subtitle-txt">Xmatters is born,<p>Troy McAlpin and Doru Davidson found XO Technologies</p> </div>
						},
             
						{
							step: 2,
							selector: ".card2",
							title: <div  className="tour-title-txt">Money comes from everywhere</div>,
							body: <div className="tour-subtitle-txt">XSeries C Funding,<p>AlarmPoint receives another round of funding </p> </div>
						},
            {
							step: 3,
							selector: ".card3",
							title: <div className="tour-title-txt">New name new journey</div>,
							body: <div className="tour-subtitle-txt">xMatters is born from Alarmpoint,<p>Brand new name for growing organization</p> </div>
						},
            {
							step: 4,
							selector: ".shuttle-img",
							title: <div className="tour-title-txt">Xmatters lauches its first space shuttle</div>,
							body: <div className="tour-subtitle-txt">xMatters opened its first office on Mars,<p>Year-2049</p> </div>
						}
					]}
				/>
        <Title />
        <Background />
        <Grid  facts={this.state.facts} updateClicked={this.updateClicked}/>
        <Rocket />
        <Smoke />
        

      </div>
    );
  }
}

export default App;
