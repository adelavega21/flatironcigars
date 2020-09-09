import React from 'react';
import BrandCard from '../components/BrandCard';
import { Route, Switch } from 'react-router-dom';

class BrandIndex extends React.Component{
   
    render(){
        // let { match } = this.props;
        // console.log()
        return(<>
            <div>
                <h1 className="page-title">Our Brands</h1>
            </div>
            <div className="brand-index">
                <Switch>
                    <Route 
                        // exact path={`${match.path}`} 
                        render={() => <> {this.props.brands.map(brand => <BrandCard key={brand.id} {...brand} match={this.props.match} setChosenBrand={this.props.setChosenBrand}/>)} </>}
                    />
                </Switch>
            </div>
        </>)

    }
}

export default BrandIndex