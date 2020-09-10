import React from 'react';
import { Link } from 'react-router-dom'

class CheckOut extends React.Component{

    clickHandler=(e)=>{
        // e.preventDefault()
    }

    render() {
        return (
            <div className="center-form">
                <form className="checkout-form" onClick={this.clickHandler()}> 
                <label className="align-left">First Name: </label>
                <input className="align-right" placeholder="First Name" name="first-name"/><br/>
                <label className="align-left">Last Name: </label>
                <input className="align-right" placeholder="Last Name" name="last-name"/><br/>
                <label className="align-left">Address Line 1: </label>
                <input className="align-right" placeholder="Address Line 1" name="address-1"/><br/>
                <label className="align-left">Address Line 2: </label>
                <input className="align-right" placeholder="Address Line 2" name="address-2"/><br/>
                <label className="align-left">Country:</label>
                <input className="align-right" value="United States" name="country"/><br/>
                <label className="align-left">City: </label>
                <input className="align-right" placeholder="City" name="city"/><br/>
                <label className="align-left">State: </label>
                <input className="align-right" placeholder="State" name="state"/><br/>
                <label className="align-left">Zip Code: </label>
                <input className="align-right" placeholder="Zip Code" name="zip-code"/><br/>
                <label className="align-left">Phone Number: </label>
                <input className="align-right" placeholder="Phone Number" name="phone"/><br/>
                <label className="align-left">Email Address: </label>
                <input className="align-right" placeholder="Email Address" name="email"/><br/>
                <Link to="/paymentpage">
                        <button className="continue-checkout" type="submit" >Continue Checkout</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default CheckOut