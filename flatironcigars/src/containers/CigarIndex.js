import React from 'react';
import CigarCard from '../components/CigarCard';
import { Route, Switch } from 'react-router-dom';

class CigarIndex extends React.Component{
    
    render(){
        let { match } = this.props;
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
                    <ul className="cigar-strength">
                        <h5>Cigar Strength: </h5>
                        <li>Light</li>
                        <li>Medium</li>
                        <li>Full</li>
                    </ul>
                    <ul className="brands">
                        <h5>Brands:</h5>
                        <li>5 Vegas</li>
                        <li>Alec Bradley</li>
                        <li>CAO</li>
                        <li>Cohiba</li>
                        <li>Gurkha</li>
                        <li>Romeo y Julieta</li>
                    </ul>
                    
                </div>
                <div className="sort-feature">
                    <h5>sort</h5>
                </div>

                <div className="item-index">
                    <Switch>
                        <Route 
                            exact path={`${match.path}`} 
                            render={() => <> {this.props.cigars.map(cigar => <CigarCard key={cigar.id} {...cigar} match={this.props.match} setChosenItem={this.props.setChosenItem}/>)} </>}
                        />
                    </Switch>
                </div>
            </div>
        )

    }
}

export default CigarIndex