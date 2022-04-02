import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    //conditional rendering options
    //1.Element Variable
    //2.ternary operator(condition? true:false)
    //3.&& operator(short hand)
    //4.|| operator
    let command;

    if (cart.length === 0) {
        command = <div>
            <h5>No items added</h5>
            <p>Please add atleast one item!!</p>
        </div>

    }
    else if (cart.length === 1) {
        command = <p>Please add more items...</p>
    }
    else {
        command = <p><small>Thanks for adding items</small></p>
    }
    return (
        <div>
            <h1>Itmes selected:{cart.length}</h1>
            {
                cart.map(tshirt => <p>{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                </p>)
            }
            {cart.length===0 || <p className='orange'>Yay! You are buying</p>}
            {
                cart.length === 3 && <div className='orange'>
                    <h3>Trial</h3>
                    <p>ki gift diba</p>
                </div>

            }
            {command}
            {cart.length !== 4 ? <p>keep adding</p> : <button>Remove All</button>}
            {cart.length===4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;