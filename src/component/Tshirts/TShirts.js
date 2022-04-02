import React from 'react';
import './TShirts.css'

const TShirts = ({handleAddToCart,tshirt}) => {
    const{name,price,picture}=tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price:${price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirts;