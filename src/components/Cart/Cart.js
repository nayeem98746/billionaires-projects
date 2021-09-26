import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    // console.log(props.cart)
    const {cart} = props
    // const {total} = props
    const nameBillionair =(previous, billionair) => previous+billionair.name
    const name = cart.reduce(nameBillionair, 0)
    let total = 0
    for(const billionair of cart){
        total= total + billionair.netWorth
    }
   

    return (
        <div>
             <h3>Billionaires Added:{props.cart.length}</h3>
                <h3>Total Doller:{total}B</h3>
                

                <p className="name-style">Selected Billionaires : {name}</p>

        </div>
    );
};

export default Cart;