import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "./Billionair.css"
const Billionair = (props) => {
    // console.log(props)
    const { img, name, age,_key,  source, country,netWorth } = props.billionair
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div >
            
            <div className="cart text-center"> 
                <img  className="img-size"  src={img} alt=""/>
                <h1>Name:{name}</h1>
                <h3>Age:{age}</h3>
                <h3>Source:{source}</h3>
                <h3>Country:{country}</h3>
                <h3>_key:{_key}</h3>
                <h3>Net Worth :{netWorth} B</h3>
                <button
                onClick={ () => props.handleAddtoCart(props.billionair)}
                className="button">{element} add to cart</button>
            </div>



        </div>
    );
};

export default Billionair;