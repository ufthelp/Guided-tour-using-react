import React,{Component} from 'react'
//Styles
import './Smoke.css'

export default class Smoke extends Component{
    render(){
        return(
            <div className="smoke">
                <video className="video" autoPlay loop src="/smoke.mov" />
            </div>
        )
    }
}
