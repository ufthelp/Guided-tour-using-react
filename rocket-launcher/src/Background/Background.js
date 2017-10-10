import React,{Component} from 'react'
import './Background.css'


export default class Background extends Component{
    render(){
        return(
            <div>
                <div className="stars backgroundItems" ></div>
                <div className="alpha backgroundItems" ></div>
                <div className="nebula backgroundItems" ></div>
            </div>
        )
    }
}