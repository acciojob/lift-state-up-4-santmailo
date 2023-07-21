import React from 'react';
import Child from './child';

const Parent = () => {
    const [cartItems, setCartItems] = React.useState([]);

    const handleAddToCart = (event) => {
        event.preventDefault();
        const name = event.target.itemName.value;
        const price = event.target.itemPrice.value;

        if(!name || !price) return alert('Please enter both name and price');
        const newItem = { name, price };
        setCartItems((prevItems) => [...prevItems, newItem]);
    }

    const handleRemoveFromCart = (key) => {
        setCartItems((prevItems) => prevItems.filter((item,index) => index !== key));
    }

    return (
        <div>
            <h1>Parent Component</h1>
            <form onSubmit={handleAddToCart}>
                <input type="text" name="itemName" placeholder="Item Name" />
                <input type="number" name="itemPrice" placeholder="Item Price" />
                <button type="submit">Add to Cart</button>
            </form>
            <Child cartItems={cartItems} handleRemoveItem = {handleRemoveFromCart}/>
        </div>
    );
}

export default Parent;