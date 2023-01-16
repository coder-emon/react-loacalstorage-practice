import React, { useEffect, useState } from 'react';
import Shoe from '../../Shoe/Shoe';
import { getTotal } from '../../Utilities/calculate';
import './Shoes.css'

const Shoes = () => {
    
    const [shoes, setShoes] = useState([]);
    useEffect(() =>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setShoes(data)); 
    },[])
    
    //get total price of shoes by pass data to utilities from loaded data before mapping
    getTotal(shoes)

    return (
        <div >
            <h3>Shoes</h3>
            <div className="shoes">
                {shoes.map(shoe => <Shoe key='shoe.id'shoe={shoe}
                 ></Shoe>)}
            </div>
        </div>
    );
};

export default Shoes;