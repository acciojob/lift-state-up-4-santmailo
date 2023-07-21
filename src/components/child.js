import React from "react";

const Child = (props) => {
    return (
        <div class="child">
            <h2>Child Component</h2>
            <ul>
                {props.cartItems.map((item,index) => (<li key={index}>{item.name} - ${item.price} <button onClick={() => props.handleRemoveItem(index)}>Remove</button></li>))}
            </ul>
        </div>
    )
}

export default Child;