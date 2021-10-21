import React,{useState} from 'react';

import Cart from './Cart';
import Navbar from './Navbar';

function App() {
  const [itemCount,itemCountHandler]=useState(0);
  const handleCount = (count) => {
    itemCountHandler(count);
  };
  return (
    <div className="App">
      <h1>Cart</h1>
      <Navbar itemCount={itemCount}/>
      <Cart handleCount={handleCount}/>
    </div>
  );
}

export default App;
