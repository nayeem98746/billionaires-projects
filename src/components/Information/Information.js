import React, { useEffect, useState } from 'react';
import Billionair from '../Billionair/Billionair';
import Cart from '../Cart/Cart';
import "./Information.css"

const Information = () => {
    const [billionaires, setBillionaires] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=> {
        fetch ('./billionsires.JSON')
        .then(res => res.json())
        .then(data => setBillionaires(data))
    } , [])

    const handleAddtoCart =(billionair) =>{
        // console.log(billionair)
        const newCart = [...cart, billionair];
        setCart(newCart)
    }


    return (
        <div className="main-container">
            <div className="card-container">
            {/* <h2>Total cart : {billionaires.length}</h2> */}
            {
                billionaires.map((billionair, i) => <Billionair
                _key={i}
                billionair={billionair}
                handleAddtoCart={handleAddtoCart}
               
                ></Billionair> )
            }
            </div>
            <div className="total-doller">
               <Cart 
               cart={cart}
               ></Cart>
            </div>
        </div>
    );
};

export default Information;