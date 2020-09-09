import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../FlatironCigarLogo.png';
import { FaShoppingCart, FaUserAlt, FaHeart} from "react-icons/fa";
// import UserControls from '../components/UserControls'


class NavBar extends React.Component {
    state = {
        clicked: false
    }

    clickHandler=(e)=>{
        this.props.logOut()
    }
  
    render(){
      return (
          <div>
                <div className="header">
                    <h6 className="call-us">Call Us 1-800-123-4567</h6>
                    {this.props.currentUser ? <h6 className="welcome">Welcome {this.props.currentUser.name}!</h6> : <h6 className="welcome">Welcome!</h6>}
                </div>

                <div className="navbar">
                    <div>
                        <img className="navLogo" src={Logo} alt="app-logo"/>
                    </div>
                    <div className='link-div'>
                        <Link className='navLink' to="/" >Home</Link>
                        <Link className='navLink' to="/brands">Brands</Link>
                        <Link className='navLink' to="/cigars">Cigars</Link>
                        <Link className='navLink' to="/accessories">Accessories</Link>
                    </div>
                    <div className="icon-div">
                        {/* <FaSearch className='navIcons' /> */}
                        {this.props.currentUser ? <div class="dropdown">
                            <FaUserAlt className='navIcons'/>
                            <div class="dropdown-content">
                                <a href="/home" onClick={this.clickHandler}>Log Out</a>
                            </div>
                        </div> :
                        <div class="dropdown">
                            <FaUserAlt className='navIcons'/>
                            <div class="dropdown-content">
                                <a href="/login">Login</a>
                                <a href="/signup">Sign Up</a>
                            </div>
                        </div>}
                        {this.props.currentUser ? <Link to="/"><FaHeart className='navIcons'/></Link> : <Link to="/login"><FaHeart className='navIcons'/></Link>}
                        {this.props.currentUser ? <Link to="/cart"><FaShoppingCart className='navIcons'/></Link> : <Link to="/login"><FaShoppingCart className='navIcons'/></Link>}
                    </div>
                </div>
          </div>
        )
    }
}

export default NavBar;