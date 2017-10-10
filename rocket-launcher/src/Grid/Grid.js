import React,{Component} from 'react';
import GridItem from './GridItem';
//Styles
import styles from './Grid.css'

export default class Grid extends Component{
    updateClicked=(id)=>{
        this.props.updateClicked(id);
    }
    renderFacts(){
        return this.props.facts.map(item =>
            <GridItem 
                key={item.id}
                fact={item}
                updateClicked={this.updateClicked}
            />
        )
    }
    render(){
        return(
            <section className="grid">
                {this.renderFacts()}
            </section>
        )
    }
}