import React from 'react';
import "./Billionair.css"
const Billionair = (props) => {
    const { img, name, age,_key,  source, country,netWorth } = props.billionair
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
                <button className="button">add to cart</button>
            </div>



        </div>
    );
};

export default Billionair;