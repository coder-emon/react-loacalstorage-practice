import React from 'react';
import {add, multiply} from '../../Utilities/calculate';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, taxes, quantity} = props;

    const taxedPrice = add(price, taxes)

    return (
        <div className='cosmetic'>
            <h3>--* Cosmetic *--</h3>
            <h4>Name: {name}</h4>
            <h5>Price: ${taxedPrice}</h5>
            <h5>Quantity: {quantity}</h5>
            <h5>Total price: ${multiply(taxedPrice, quantity)}</h5>
        </div>
    );
};

export default Cosmetic;