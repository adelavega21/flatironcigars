import React from 'react';
import { FaHeart} from "react-icons/fa";
import { BsStarFill,BsStarHalf,BsStar } from "react-icons/bs"

class ItemPage extends React.Component {
    state = {
        inStock: null,
        quantity: 1
    }

    componentDidMount() {
        
        if(this.props.chosenItem.inventory > 0){
            this.setState({inStock: true})
        }
    }

    handleChange = (event) => {
        this.setState({
          quantity: parseInt(event.target.value)
        })
    }

    addItemtoCartItems = (e) => {
        this.props.createCartItems(this.props.chosenItem.id, this.state.quantity)
    }

    render(){
        let { description, img_url, item_type, name, price, rating, strength, inventory} = this.props.chosenItem;
        console.log(this.state.quantity)
        return ( 
            <div className="item-page">
                <div className="item-img">
                    <img  src={img_url} alt={name} />
                </div>
                <div className="item-info">
                    <h1>{name}</h1>
                    <h2 className="price">Price: ${price}</h2>
                    {rating === 5 ? <div className="rating" ><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /> </div> : null}
                    {rating === 4.5 ? <div className="rating" ><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> </div> : null}
                    {rating === 4 ? <div className="rating" ><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStar /> </div> : null}
                    <br/>
                    {this.state.inStock === true ?<div className="in-stock">In Stock</div> : <div className="out-of-stock">Out of Stock</div>}<br/>
                    {strength ? <div>Strength: {strength}</div> : null}<br/>
                    {item_type ? <div>Type: {item_type}</div>: null}<br/>
                    <div>Description:</div>
                    <div>{description}</div><br/>
                    <div>Quantity: {inventory}</div><br/>
                    <div className="add-to-cart">
                        {this.state.inStock === true ? <input className="input" type="number" name="inventory" value={this.state.quantity} onChange={this.handleChange} /> : null}
                        {this.state.inStock === true ? <button className="button" onClick={this.addItemtoCartItems}>Add to Cart</button> : null }<br/>
                    </div>
                    <div className="add-to-wishlist">
                        <button className="clear-button">{<FaHeart />} Add to Wishlist</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemPage;