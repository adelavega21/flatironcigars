import React from 'react';
import AccessoryCard from '../components/AccessoryCard';
import { Route, Switch } from 'react-router-dom';

class AccessoryIndex extends React.Component{
    
    render(){
        let { match } = this.props;
        console.log(this.props.accessories)
        return(
            <div className="index-page">
                <div className="filter-list">
                    <h3 className="filter">Filter By:</h3>
                    <ul className="price-range">
                        <h5>Price Range:</h5>
                        <li>$1-$25</li>
                        <li>$26-$50</li>
                        <li>$51-$75</li>
                        <li>$76-$100</li>
                        <li>$100+</li>
                    </ul>
                    <ul className="item-type">
                        <h5>Item Type: </h5>
                        <li>Lighters</li>
                        <li>Cutters</li>
                        <li>Humidors</li>
                    </ul>
                    <ul className="brands">
                        <h5>Brands:</h5>
                        <li>Ashton</li>
                        <li>Colibri</li>
                        <li>JetLine</li>
                        <li>Prestige Import Group</li>
                        <li>Vertigo</li>
                        <li>Visol</li>
                        <li>Xikar</li>
                    </ul>
                    
                </div>
                <div className="sort-feature">
                    <h5>sort</h5>
                </div>

                <div className="item-index">
                    <Switch>
                        <Route 
                            exact path={`${match.path}`} 
                            render={() => <> {this.props.accessories.map(accessory => <AccessoryCard key={accessory.id} {...accessory} match={this.props.match} setChosenItem={this.props.setChosenItem}/>)} </>}
                        />
                    </Switch>
                </div>
            </div>
        )

    }
}

export default AccessoryIndex