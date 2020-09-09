import React from 'react';
import ItemCard from '../components/HomePageItemCards';
import banner from '../CigarBanner.jpg';
// import { Route, Switch } from 'react-router-dom';

function Home(props){
  
    let shuffledItems = props.items.sort(() => Math.random() - 0.5)
    const popularItems = shuffledItems.slice(7,11)

    return (<>
        <br></br>
        <img className="homebanner" src={banner} alt="cigar-banner"/>
        <div className="home-featured">
            <h1 className="page-title">Featured Items:</h1>
        </div>
        <br/>
        <br/>
        <div className="item-index">
            {popularItems.map(item => <ItemCard key={item.id} {...item} setChosenItem={props.setChosenItem}/>)}
        </div>
    </>)
}

export default Home