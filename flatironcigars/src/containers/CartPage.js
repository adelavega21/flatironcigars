import React from 'react';
import CartItemsContainer from './CartItemsContainer'

class CartPage extends React.Component {
  
    render(){
        
        return ( 
            <div className="cart-container">
                <h1>Your Cart</h1>
                <CartItemsContainer cartItems={this.props.cartItems} getUpdatedQty={this.props.getUpdatedQty} getItemsTotal={this.getItemsTotal} deleteCartItemFromCart={this.props.deleteCartItemFromCart} currentCart={this.props.currentCart} items={this.props.items}/>
            </div>
        )
    }
}

export default CartPage;