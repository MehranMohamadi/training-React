//import React, { useState } from "react";

//import Products from "./components/Products";

//const [products, setProducts] = useState([
//  { title: "react", price: "85$" },
// { title: "js", price: "65$" },
//  { title: "vue", price: "83$" },
//]);

//const clickHandler = () => {
// setProducts([
//   { title: "react", price: "100$" },
//   { title: "js", price: "165$" },
//   { title: "vue", price: "183$" },
//  ]);
//};

//return (
// <div>
//  {products.map((product) => {
//      return <Products name={product.title} price={product.price} />;
//   })}

//    <button onClick={this.clickHandler}>change price</button>
//  </div>
//);

//export default App;
import HookCounter from "./components/HookCounter";

function App() {
  return (
    <div className="App">
      <HookCounter />
    </div>
  );
}

export default App;
