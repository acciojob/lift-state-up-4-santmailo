import React from 'react';
import Child from './child';

const Parent = () => {
    const [cartItems, setCartItems] = React.useState([]);
    const [itemName, setItemName] = React.useState('');
    const [itemPrice, setItemPrice] = React.useState(0);

    const addItem = (event) => {
        if(!itemName || !itemPrice) return alert('Please enter both name and price');
        const newItem = { name:itemName, price:itemPrice };
        setCartItems((prevItems) => [...prevItems, newItem]);
    }

    const nameChange = (event) => {
        setItemName(event.target.value);
    }

    const priceChange = (event) => {
        setItemPrice(event.target.value);
    }

    const removeItem = (key) => {
        setCartItems((prevItems) => prevItems.filter((item,index) => index !== key));
    }

    return (
        <div className="parent">
            <h1>Parent Component</h1>
                <input type="text" name="itemName" placeholder="Item Name" onChange={nameChange}/>
                <input type="number" name="itemPrice" placeholder="Item Price" onChange={priceChange}/>
                <button onClick={addItem}>Add to Cart</button>
            <Child cartItems={cartItems} handleRemoveItem = {removeItem}/>
        </div>
    );
}

export default Parent;