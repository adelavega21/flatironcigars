import React from 'react';
import BrandItemCard from '../components/BrandItemCard';


class BrandItemIndex extends React.Component{
    state={
        brandItems:[],
        department: null
    }

    componentDidMount(){
        this.filterBrandItems()
    }

    filterBrandItems=()=>{
        let newbrandItem = this.props.items.filter(item => item.brand_id === this.props.chosenBrand.id)
        this.setState({brandItems: newbrandItem})
        
        this.setDepartment(newbrandItem[0])
    }

    setDepartment=(item)=>{
        console.log(item.department)
        this.setState({department: item.department})     
    }
    
    // addBrandItems=(item)=>{
    //     let allBrandItems = [...this.state.brandItems, item]
    //     this.setState({brandItems: allBrandItems})
    // }

    render(){
        // console.log(this.state.brandItems[0].department)
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
                    {this.state.department === "Cigars" ? 
                    <ul className="cigar-strength">
                        <h5>Cigar Strength: </h5>
                        <li>Light</li>
                        <li>Medium</li>
                        <li>Full</li>
                    </ul>
                    :
                    <ul className="item-type">
                        <h5>Item Type: </h5>
                        <li>Lighters</li>
                        <li>Cutters</li>
                        <li>Humidors</li>
                    </ul>
                    }

                    
                </div>
                <div className="sort-feature">
                    <h5>sort</h5>
                </div>

                <div className="item-index">
                    {/* success */}
                    {this.state.brandItems.map(item => <BrandItemCard key={item.id} {...item} match={this.props.match} setChosenItem={this.props.setChosenItem}/>)}
                </div>
            </div>
        )

    }
}

export default BrandItemIndex