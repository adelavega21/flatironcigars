import React from 'react';
import { FaMinusCircle } from "react-icons/fa";

class CartItemCard extends React.Component {
    state = {
        quantity: this.props.quantity,
    }

    // componentDidUpdate(prevProps){
    //     if(prevProps.quantity !== this.props.quantity){
    //         this.props.getUserCartItems()
    //     }
    // }

     handleChange = (event) => {
        this.setState({
            quantity: parseInt(event.target.value)
        })

        this.props.getUpdatedQty(this.props, parseInt(event.target.value))
    }

    clickHandler = (e) => {
        this.props.deleteCartItemFromCart(this.props)
    }

    render(){
        let { img_url, name, price, quantity } = this.props;
        let total = Math.imul(price, quantity)
        return (
            <div className="cart-item-card">
                <FaMinusCircle className="delete-icon" onClick={this.clickHandler}/>
                <img className="cart-img" src={img_url} alt={name} />
                <h3 className="cart-item-name">{name}</h3>
                <h3 className="cart-item-price">${price}</h3>
                <h3 className="multiply">x</h3>
                <div className="cart-item-input">
                    <input  type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
                </div>
                <h3 className="cart-item-total">${total}</h3>
            </div>
        )
    }
}

export default CartItemCard;