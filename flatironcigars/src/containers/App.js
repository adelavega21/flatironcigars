import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import CigarIndex from './CigarIndex';
import AccessoryIndex from './AccessoryIndex';
import CartPage from './CartPage';
import ItemPage from '../components/ItemPage';
import BrandIndex from './BrandIndex';
import BrandItemIndex from './BrandItemIndex';
import CheckOut from '../components/CheckOut';
import OrderConfirm from '../components/OrderConfirm';
import PaymentPage from '../components/PaymentPage';

const ITEMS_API = 'http://localhost:3000/api/v1/items'
const BRANDS_API = 'http://localhost:3000/api/v1/brands'

class App extends React.Component {
  state = {
    items: [],
    cigars: [],
    accessories: [],
    brands: [],
    cartItems: [],
    chosenItem: null,
    currentUser: null,
    currentCart: null,
    chosenBrand: null
  }

  componentDidMount() {
    this.getAllItems();
    this.getAllCigars();
    this.getAllAccessories();
    this.getAllBrands();
  }

  createCart = (user) => {

    fetch("http://localhost:3000/api/v1/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
     },
        body: JSON.stringify({user_id: user.id})
      }).then(res => res.json())
        .then(response => {
          this.setState({currentCart: response})
      })
    
    
  }

  getAllItems=()=>{
    fetch(ITEMS_API)
    .then(resp => resp.json())
    .then(items => this.setState({ items }))
  }

  getAllCigars=()=>{
    fetch(ITEMS_API)
    .then(resp => resp.json())
    .then(items => {
            let cigarsArr = items.filter(item => item.department === "Cigars")
            this.setState({ cigars: cigarsArr})
    })
  }

  getAllAccessories=()=>{
    fetch(ITEMS_API)
    .then(resp => resp.json())
    .then(items => {
            let accessoriesArr = items.filter(item => item.department === "Accessories")
            this.setState({ accessories: accessoriesArr})
    })
  }

  getAllBrands=()=>{
    fetch(BRANDS_API)
    .then(resp => resp.json())
    .then(brands => this.setState({ brands }))
  }
  
  setChosenItem = (item) => {
    this.setState({
      chosenItem: item
    })
  }

  setUser = (user) => {
    this.setState({
      currentUser: user
    })
    this.createCart(user)
  }

  logOut = () => {
    this.props.history.push("/login")
    this.setState({
      currentUser: null
    })
  }

  createCartItems = (item_id, quantity)=> {
    fetch("http://localhost:3000/api/v1/cart_items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ cart_id: this.state.currentCart.id, item_id: item_id, quantity: quantity})
      })
      .then(res => res.json())
      .then(response => {
        this.addNewCartItem(response)
      })
  }

  addNewCartItem = (response) => {
    const newCartItemArray = [...this.state.cartItems, response]
    this.setState({
      cartItems: newCartItemArray
    })
  }

  deleteCartItemFromCart=(item)=>{
    const elementsIndex = this.state.cartItems.findIndex(element => element.item_id === item.id)
    let newCartItems = [...this.state.cartItems]
    newCartItems.splice(elementsIndex, 1)
    this.setState({cartItems: newCartItems})
  }

  setChosenBrand = (brand) => {
    this.setState({
      chosenBrand: brand
    })
  }

  getUpdatedQty = (item, quantity) => {
    const elementsIndex = this.state.items.findIndex(element => element.id === item.id)
    let updatedCartItems = []
    let newActualCartItems = [...this.state.items]
    for(const newCartItem of this.state.cartItems){
      if (newActualCartItems[elementsIndex].id ===  newCartItem.item_id){
            newCartItem.quantity = quantity
            updatedCartItems.push(newCartItem)
      }
    }
    this.addUpdatedCartItem(updatedCartItems[0])
  }

  addUpdatedCartItem=(cartItem)=>{
    const elementsIndex = this.state.cartItems.findIndex(element => element.id === cartItem.id)
    let copyOfcartItemsState = [...this.state.cartItems]
    copyOfcartItemsState[elementsIndex] = cartItem
    this.setState({cartItems: copyOfcartItemsState})
  }
  
  
  
  render(){
    return (
      <div className="App">
        <NavBar currentUser={this.state.currentUser} logOut={this.logOut}/>
        <Switch>
          <Route path={`/items/:itemId`} render={() => <ItemPage chosenItem={this.state.chosenItem} createCartItems={this.createCartItems}/>}/>
          <Route path="/cart" render={(routerProps) => <CartPage {...routerProps} getUpdatedQty={this.getUpdatedQty} deleteCartItemFromCart={this.deleteCartItemFromCart} cartItems={this.state.cartItems} currentCart={this.state.currentCart} items={this.state.items}/>}/>
          <Route path="/cigars" render={(routerProps) => <CigarIndex {...routerProps} cigars={this.state.cigars} setChosenItem={this.setChosenItem}/>}/>
          <Route path="/accessories" render={(routerProps) => <AccessoryIndex {...routerProps} accessories={this.state.accessories} setChosenItem={this.setChosenItem}/>}/>
          <Route path="/login" render={(routerProps) => <Login {...routerProps} setUser={this.setUser} createCart={this.createCart}/>}/>
          <Route path="/signup" render={() => <SignUp setUser={this.setUser}/>}/>
          <Route path="/checkout" render={() => <CheckOut />} />
          <Route path="/paymentpage" render={() => <PaymentPage />} />
          <Route path="/orderconfirm" render={() => <OrderConfirm />}/>
          <Route path="/brands" render={() => <BrandIndex brands={this.state.brands} setChosenBrand={this.setChosenBrand}/>}/> 
          <Route path="/:brandId" render={() => <BrandItemIndex items={this.state.items} setChosenItem={this.setChosenItem} chosenBrand={this.state.chosenBrand}/>}/>
          <Route exact path="/" render={()=> <Home  items={this.state.items} setChosenItem={this.setChosenItem}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
