import React from 'react'
import { Link } from 'react-router-dom'

class PaymentPage extends React.Component {

    clickHandler=(e)=>{
        this.props.updateInventory()
        this.props.createCart(this.props.currentUser)
    }

    render(){
        return(
            <div className="center-form">
            <form className="payment-form" > 
                <label className="align-left">Name on Card: </label>
                <input className="align-right" placeholder="Name on Card" name="name"/><br/>
                <label className="align-left">Credit Card Number: </label>
                <input className="align-right" placeholder="Credit Card Number" name="card-num"/><br/>
                <label className="align-left">Expiration Date: </label>
                <div className="align-right">

                    <input id="exp-input" type="number" name="exp-month"/>
                    /
                    <input id="exp-input" type="number" name="exp-date"/>
                </div><br/>
                <label className="align-left">CVV Securtiy Code: </label>
                <input className="align-right" placeholder="1234" name="cvv"/><br/>
                <Link to="/orderconfirm">
                    <button className="continue-checkout" type="submit" onClick={this.clickHandler} >Confirm Purchase</button>
                </Link>
            </form>
        </div>
        )
    }
}

export default PaymentPage