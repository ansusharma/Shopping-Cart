import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 500,
          title: "Watch",
          quantity: 8,
          img: "",
          id: 1,
        },
        {
          price: 5000,
          title: "Mobile Phone",
          quantity: 1,
          img: "",
          id: 2,
        },
        {
          price: 50000,
          title: "Laptop",
          quantity: 2,
          img: "",
          id: 3,
        },
      ],
    };
    
  }
  handleIncreaseQuantity = (product) => {
    console.log("Hey please increase the qty. of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].quantity += 1;
    this.setState({
      products,
    });
  };
  handleDecreaseQuantity = (product) => {
    console.log("Hey please Decrease the qty. of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].quantity === 0) {
      return;
    }
    products[index].quantity -= 1;
    this.setState({
      products,
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };
  handleitem = () => {
      let count =0;
      console.log("intial count",count);
      this.state.products.forEach((i) => {
      console.log(i.title,i.quantity);
      count += i.quantity;
    });
    console.log("final count",count);
    return count;
  }

  //props.handleCount(handleitem);

  render() {
    console.log("no fo items", this.handleitem());
    this.props.handleCount(this.handleitem());
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
            />
          );
        })}
      </div>
    );
  }
}
export default Cart;
