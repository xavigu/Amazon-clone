import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Header from './Header';
import Checkout from './Checkout';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HaJn3KLn7jv1f2jHLob7b14qaYp1EYq16lajJhdpxNWtCVPraHXS3KWsqO9tow43QEkpHXZKDlOIKhl9OxijdF300vxS4ZExu');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // check authUser state
    auth.onAuthStateChanged(authUser => {
      console.log('The user is: ', authUser);

      if (authUser) {
        // the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">  
        <Routes>
          <Route path='/login' element = { <Login/> } />
          <Route path='/checkout' element = {[ <Header/>, <Checkout/> ]}/>
          <Route 
            path='/payment' 
            element = {[<Header/>, 
            <Elements stripe={promise}>
                          <Payment/> 
                        </Elements>
                      ]}/>
          <Route path='/orders' element = { <Orders/> }/>
          <Route path='/' element = {[ <Header/>, <Home/>] } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
