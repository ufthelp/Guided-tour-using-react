import React,{Component} from 'react'
//Styles
import './Rocket.css'

export default class Rocket extends Component{
    render(){
        return(
            <div>
               <img src="./shuttle.png" className="shuttle-img" alt="Shuttle"/>
            </div>
        )
    }
}
