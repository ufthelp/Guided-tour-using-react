import React,{Component} from 'react'
import Badge from './Badge';
import Explorer from './Explorer';
import classnames from 'classnames';
import './GridItem.css'


const GridItem = (props) =>{
    return(
        <div className={classnames('card','card'+props.fact.id)} onClick={()=>props.updateClicked(props.fact.id)}>
            {props.fact.clicked ? <Explorer />: <Badge />}
            <h2 className="grid-title">{props.fact.title}</h2>
            <article className="fact">{props.fact.fact}</article>
        </div>
    )
}

export default GridItem;