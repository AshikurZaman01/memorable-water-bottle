import { useState } from 'react';
import './Bottle.css'
const Bottle = ({bottle , handleAddToCart}) => {

    const {name , price, stock , img , ratings} = bottle;

    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h4>Bottle : {name}</h4>
            <h5>Rating  : {ratings}</h5>
            <p>Stock : {stock}</p>
            <p>Price : {price}</p>
            <button onClick={()=> handleAddToCart(bottle)} className='btn'>Purchase</button>
        </div>
    );
};

export default Bottle;