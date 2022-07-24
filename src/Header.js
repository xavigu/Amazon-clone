import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import './Header.css';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

  const [{ basket, user }, dispatch] = useStateValue();
  const username = user?.email.split('@')[0];


  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    } 
  }

  return (
    <div className='header'>
      <Link to='/'>
        <img 
          className='header__logo' 
          src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'/>
      </Link>

      <div className='header__search'>
        <input className='header__searchInput' type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className='header__nav'>

        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'>Hello {!user ? 'Guest' : username}</span>
            <span className='header__optionLineTwo'>{ user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to={user && '/orders'}>
          <div className='header__option'>
            <span className='header__optionLineOne'>Return</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>  

        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>

        <Link to='/checkout'>
          <div className='header__optionBasket'>
              <ShoppingBasketIcon/>
            <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
          </div>
        </Link>

      </div>

    </div>

  )
}

export default Header