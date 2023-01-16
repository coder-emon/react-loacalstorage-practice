import React from 'react';
import  {addedToDb, deleteItem } from '../Utilities/fakeDb';
import './Shoe.css'
const Shoe = (props) => {
    // console.log(props)
    const {name, price, id} = props.shoe
    const addToCart = (id) =>{
        console.log(id, "added to cart")
        addedToDb(id)
    }
    
    
    return (
        <div className='shoe'>
            <h3>Name: {name}</h3>
            <h3>Price: ${price}</h3>
            <h3>Id: {id}</h3>
            <button onClick={()=> addToCart(id)}>Add to cart</button>
            <button onClick={()=> deleteItem(id)}>Remove from cart</button>
        </div>
    );
};

export default Shoe;