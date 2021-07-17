import React from 'react';
class Navbar extends React.Component {
        
    render() {
        console.log('this.props', this.props);
                return (
                   <div style={styles.nav}>
                       <div style={styles.cartIconContainer}>
                           <img style={styles.cartIcon} src="https://image.flaticon.com/icons/png/128/4646/4646806.png" alt="cart-icon"/>
                           <span style={styles.cartCount}>3</span>
                       </div>

                   </div>
                );
    }
}
const styles = {
    cartIcon: {
        height :35,
        marginRight: 40
    },
    nav: {
        height: 70,
        background:'#d4a755',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'orange',
        borderRadius: '50%',
        padding:'4px 8px',
        position: 'absolute',
        right: 20,
        top: -8,
    }

}
export default Navbar;