
import React from "react";
import './../styles/App.css';

const Parent = () => {
  let [cartitems, setCartitems] = React.useState([]);

  const addItem = (e) => {
    e.preventDefault();
    const item = e.target.itemName.value;
    const price = e.target.itemPrice.value;
    console.log(item,price);
    setCartitems([...cartitems, {item, price}]);
  }


  const deleteItem = (index) => {
    const newCartItems = [...cartitems];
    newCartItems.splice(index, 1);
    console.log(newCartItems);
    setCartitems(newCartItems);
  }

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <form onSubmit={addItem}>
        <label htmlFor="itemName">Item Name</label> 
        <input type = "text" id="itemName" placeholder="Item name" />
        &nbsp;
        &nbsp;
        &nbsp;
        <label htmlFor="itemPrice">Item Price</label>
        <input type="number" id="itemPrice" placeholder="Item Price" />
        &nbsp;
        &nbsp;
        <button>Add Item</button>
      </form>
      <Child cartitems={cartitems} deleteItem={deleteItem} />
    </div>
  )
}

const Child = ({cartitems, deleteItem}) => {
  return (
    <div className="child">
      <h1>Child component</h1>
      <ul className="cart-items">
        {cartitems.map((item,index) => (
          <li key={index+1}>
            <span>{item.item}</span>  &nbsp;  &nbsp;  &nbsp;-  &nbsp;  &nbsp;  &nbsp;
            <span>{"$"+item.price}</span> &nbsp;  &nbsp;  &nbsp;-  &nbsp;  &nbsp;  &nbsp;
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}








const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Parent />
    </div>
  )
}

export default App
