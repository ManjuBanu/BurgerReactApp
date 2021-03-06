import React from 'react';
import Aux from '../../../hoc/AuxHoc'

const orderSummary =(props) =>{

const ingredientSummary =Object.keys(props.ingredient)
    .map(igKey =>{
        return <li key={igKey}><span style={{textTransform : 'capitalize'}}> {igKey} </span>: {props.ingredient[igKey]}</li>
    })

   return(
    <Aux>
    <h3>Your Order</h3>
    <p>A delicious burger with the following ingredients</p>
    <ul>{ingredientSummary}</ul>
    <p>Continue to checkout</p>
    </Aux>
   ); 

}

export default orderSummary;

// {{}} => using js in css tags