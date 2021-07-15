import React from 'react';
class CartItem extends React.Component {
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />

                </div>
                    <div className="right-block">
                        <div style={{fontSize: 35}}>phone</div>
                        <div style={{color: '#a81e4a'}}>Rs 9500</div>
                        <div style={{color: '#1e7fa8'}}>Quantity:1</div>
                        <div className="cart-item-actions">
                            {/* buttons */}

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