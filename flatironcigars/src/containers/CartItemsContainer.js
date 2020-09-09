import React from 'react';
import CartItemCard from '../components/CartItemCard'
import { Link } from 'react-router-dom'
// import { FaThinkPeaks } from 'react-icons/fa';

class CartItemsContainer extends React.Component {
    state = {
        actualCartItems: [],
    }

    componentDidMount () {
        this.getUserCartItems()

    }

    componentDidUpdate(prevProps){
        if(prevProps.cartItems !== this.props.cartItems){
            this.getUserCartItems()
        }
    }

   
    
    getUserCartItems=()=>{
        let cartItemsArr = []
        for (const newCartItem of this.props.cartItems){
            this.props.items.map(item => {
                if(newCartItem.item_id === item.id){
                    
                    item.quantity = newCartItem.quantity
                    item.grand_total = Math.imul(item.price, item.quantity)
                    cartItemsArr.push(item)
                }
            })
        }
        this.setState({actualCartItems: cartItemsArr})
        // this.separateItemsTotal()
    }

    separateItemsTotal=()=>{
        let copyOfActualCartItems = [...this.state.actualCartItems]
        let sum = copyOfActualCartItems.reduce((cartGrandTotal, actualCartItem) => cartGrandTotal + actualCartItem.grand_total, 0)

        // console.log(sum)
        this.setState({grandTotal:sum})
    }

   

    

    render(){
        let copyOfActualCartItems = [...this.state.actualCartItems]
        let sum = copyOfActualCartItems.reduce((cartGrandTotal, actualCartItem) => cartGrandTotal + actualCartItem.grand_total, 0)
        return ( 
            <div className="card-cont">
                <div className="item-card-cont">
                    {this.state.actualCartItems.map(cartItem => <CartItemCard key={cartItem.id} {...cartItem} getUpdatedQty={this.props.getUpdatedQty} getItemsTotal={this.propsgetItemsTotal} getUserCartItems={this.getUserCartItems} deleteCartItemFromCart={this.props.deleteCartItemFromCart} />)}
                </div>
                <div className="order-summary">
                    <h1 className="align-left">Order Summary</h1>
                    <h1 className="align-right">    </h1>
                    <h3 className="align-left">Subtotal: </h3>
                    <h3 className="align-right">${sum}</h3>
                    <h3 className="align-left">Shipping: </h3>
                    <h3 className="align-right">FREE!</h3>
                    <h1 className="align-left" id="total">Total: </h1>
                    <h1 className="align-right" id="total">${sum}</h1>

                    <Link to="/checkout">
                        <button className="checkout" >Proceed to Checkout</button>
                    </Link>

                </div>
            </div>
        )
    }
}

export default CartItemsContainer;