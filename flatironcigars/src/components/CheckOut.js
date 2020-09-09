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
                <label>First Name: </label>
                <input placeholder="First Name" name="first-name"/><br/>
                <label>Last Name: </label>
                <input placeholder="Last Name" name="last-name"/><br/>
                <label>Address Line 1: </label>
                <input placeholder="Address Line 1" name="address-1"/><br/>
                <label>Address Line 2: </label>
                <input placeholder="Address Line 2" name="address-2"/>
                <h4 className="no-bold">Country:   United States</h4>
                <label>City: </label>
                <input placeholder="City" name="city"/><br/>
                <label>State: </label>

                <label>Zip Code: </label>
                <input placeholder="Zip Code" name="zip-code"/><br/>
                <label>Phone Number: </label>
                <input placeholder="Phone Number" name="phone"/><br/>
                <label>Email Address: </label>
                <input placeholder="Email Address" name="email"/><br/>
                <Link to="/paymentpage">
                        <button className="continue-checkout" type="submit" >Continue Checkout</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default CheckOut