import React from 'react';
class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 500,
            title: 'Mobile Phone',
            quantity: 1,
            img: ''

        }
    }
    increaseQuantity = () => {
        //this.state.quantity+=1;
        console.log('this', this.state);
        // set state form 1
        // this.setState({
        //    quantity: this.state.quantity+1
        //});
        //set state form 2
        this.setState((prevState) => {//if previous state required
            return {
                quantity: prevState.quantity + 1
            }
        });


    }

    decreaseQuantity = () => {
        const { quantity } = this.state;
        if (quantity === 0) {
            return;
        }

        this.setState((prevState) => {//if previous state required
            return {
                quantity: prevState.quantity - 1
            }
        });

    }


    render() {
        const { price, title, quantity } = this.state
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />

                </div>
                <div className="right-block">
                    <div style={{ fontSize: 35 }}>{title}</div>
                    <div style={{ color: '#a81e4a' }}>Rs {price}</div>
                    <div style={{ color: '#1e7fa8' }}> Quantity: {quantity}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/128/1828/1828926.png"
                            onClick={this.increaseQuantity.bind(this)}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/128/992/992683.png"
                            onClick={this.decreaseQuantity.bind(this)}

                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/128/1214/1214428.png"
                        />

                    </div>


                </div>

            </div>
        );



    }
}
const styles = {
    image: {
        height: 100,
        width: 100,
        bordeRadius: 4,
        background: '#ccc'
    }

}
export default CartItem;