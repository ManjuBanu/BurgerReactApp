import React from 'react';
import './burger.css';
import BurgerIngredient from './burger-incredients/burger-ingredient';

const Burger = (props) =>{
    // to convert the props which is object to array

    let transformedIngredient = Object.keys(props.ingredient)
    .map(ingKey => {
        //creating array bcz we need to make array  if cheese=2 or more...
        return[...Array(props.ingredient[ingKey])].map((_, i)=>{
            //(_,i) ==> _ means a black element 
          return  <BurgerIngredient key ={ingKey + i} type={ingKey} />   
        });
    }).reduce((arr , el) =>{
        return arr.concat(el)
    },[] );
    if(transformedIngredient.length === 0){
        transformedIngredient = <p>Please start adding incredients</p>
    }
    return(
        <div className="Burger">
        <BurgerIngredient type="bread-top"/>
        {transformedIngredient}
        <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;