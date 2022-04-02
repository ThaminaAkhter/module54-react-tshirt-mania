import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirts from '../Tshirts/TShirts';
import './Home.css'
const Home = () => {
    const [tshirts, setShirts]=useTShirts();
    const [cart,setCart]=useState([]);
    const handleAddToCart=(selectedItem)=>{
        const exists=cart.find(tshirt=>tshirt._id===selectedItem._id);
        if(!exists){
            const newCart=[...cart,selectedItem];
            setCart(newCart);
        }
        else{
            alert('hey!!this item already exists in cart');
        }
            }
    const handleRemoveFromCart=(selectedItem)=>{
          
        const rest=cart.filter(tshirt=>tshirt._id!==selectedItem._id);
        setCart(rest);
    }
    return (
        <div>
            <div className="home-container">
                <div className="t-shirt-container">
                   {
                       tshirts.map(tshirt=><TShirts 
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                        >
                           
                        </TShirts>)
                   }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;