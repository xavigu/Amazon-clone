import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

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
          <Route path='/checkout' element = {[ <Header />, <Checkout/> ]}/>
          <Route path='/' element = {[ <Header />, <Home/>] } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
