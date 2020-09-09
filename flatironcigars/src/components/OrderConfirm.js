import React from 'react'

class OrderConfirm extends React.Component {

    getRandomInt() {
        let min = Math.ceil(900);
        let max = Math.floor(3000);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    render(){
        return(
            <div className="order-confirmation">
                <div className="thank-you">
                    <h2>Thank you for your order!</h2>
                    <h4>We are processing your order now, please see your details below</h4>
                </div>
                <div className="order-details">
                    <h3>Confirmation Email: andrew21delavega@gmail.com</h3>
                    <h3>Order Number: C-{this.getRandomInt()}</h3>

                </div>

            </div>
        )
    }
}

export default OrderConfirm