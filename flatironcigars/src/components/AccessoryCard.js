import React from 'react';
import { Link } from 'react-router-dom';
import { BsStarFill,BsStarHalf,BsStar } from "react-icons/bs"

class AccessoryCard extends React.Component {

    clickHandler=()=> {
        this.props.setChosenItem(this.props)
    }

    render(){
        let { img_url, name, price, rating} = this.props;
        return (
            <Link to={`/items/${this.props.id}`} onClick={this.clickHandler}>
                <div className="item-card">
                    <img src={img_url} alt={name} />
                    <h3>{name}</h3>
                    {rating === 5 ? <div className="rating" ><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /> </div> : null}
                    {rating === 4.5 ? <div className="rating" ><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> </div> : null}
                    {rating === 4 ? <div className="rating" ><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStar /> </div> : null}
                    <br/>
                    <div>Price: ${price}</div>
                </div>
            </Link>
        )
    }
}

export default AccessoryCard;