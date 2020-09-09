import React from 'react';
import { Link } from 'react-router-dom';

class BrandCard extends React.Component {

    clickHandler=()=> {
        this.props.setChosenBrand(this.props)
    }

    render(){
        let { logo_img, name } = this.props;
        return (
            <Link to={`/${this.props.id}`} onClick={this.clickHandler}>
                <div className="brand-card">
                    <img src={logo_img} alt={name} />
                    <h3>{name}</h3>
                </div>
            </Link>
        )
    }
}

export default BrandCard;