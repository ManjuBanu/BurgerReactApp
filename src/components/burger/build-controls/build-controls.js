import React from 'react';
import './build-controls.css';
import Building from './building/building';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];


const BuildControls = (props) => (
    <div className="BuildControls">
   
    <p>Current Price : <strong> {props.price.toFixed(2)}</strong> </p>

    {controls.map(eachCtrl => (
        <Building key={eachCtrl.label} 
        label={eachCtrl.label}
        //type={eachCtrl.type} insteadof doing this passing like below
        added={()=>props.ingredientAdded(eachCtrl.type)}
        removed ={()=>props.ingredientRemoved(eachCtrl.type)}
        disabled={props.disabled[eachCtrl.type]}/>
    ))}
    <button className="OrderButton"
    disabled={!props.purchasable}
    onClick ={props.ordered}>ORDER NOW</button>
    </div>
);

export default BuildControls;