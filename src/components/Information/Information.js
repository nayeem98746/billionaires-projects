import React, { useEffect, useState } from 'react';
import Billionair from '../Billionair/Billionair';
import "./Information.css"

const Information = () => {
    const [billionaires, setBillionaires] = useState([])

    useEffect(()=> {
        fetch ('./billionsires.JSON')
        .then(res => res.json())
        .then(data => setBillionaires(data))
    } , [])

    return (
        <div className="main-container">
            <div className="card-container">
            {/* <h2>Total cart : {billionaires.length}</h2> */}
            {
                billionaires.map(billionair => <Billionair
                billionair={billionair}
               
                ></Billionair> )
            }
            </div>
            <div className="total-doller">
                <h3>Billionaires Added:0</h3>
                <h3>Total Doller:0</h3>
            </div>
        </div>
    );
};

export default Information;