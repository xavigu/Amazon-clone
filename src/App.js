import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/checkout' element = {[
            <Header/>, 
            <p>Select an invoice</p>
          ]}/>
        </Routes>
        <Route path='/' element = {[<Header/>, <Home/>]} />
      </div>
    </BrowserRouter>
  );
}

export default App;
