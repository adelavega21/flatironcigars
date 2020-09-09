import React from 'react'
import { Link } from 'react-router-dom'

class PaymentPage extends React.Component {

    clickHandler=(e)=>{
        
    }

    render(){
        return(
            <div className="center-form">
            <form className="payment-form" onClick={this.clickHandler()}> 
            <label>Name on Card: </label>
            <input placeholder="Name on Card" name="name"/><br/>
            <label>Credit Card Number: </label>
            <input placeholder="Credit Card Number" name="card-num"/><br/>
            <label>Expiration Date: </label>
            <input type="number" name="exp-month"/>/<input type="number" name="exp-date"/>
            <label>CVV Securtiy Code: </label>
            <input placeholder="1234" name="cvv"/><br/>
            <Link to="/orderconfirm">
                    <button className="continue-checkout" type="submit" >Continue Checkout</button>
                </Link>
            </form>
        </div>
        )
    }
}

export default PaymentPage