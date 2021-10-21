import React from 'react';
class CartItem extends React.Component {
        
    render() {
        //console.log('this.props', this.props);
        const { price, title, quantity } = this.props.product;
        const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = this.props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt=''/>

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
                            onClick={() => onIncreaseQuantity(product)}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/128/992/992683.png"
                            onClick={() =>onDecreaseQuantity(product)}

                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/png/128/1214/1214428.png"
                            onClick={() =>onDeleteProduct(product.id)}
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