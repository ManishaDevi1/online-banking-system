import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import Caccount from './component/Caccount';
import Withdraw from './component/Withdraw'
import Deposit from './component/Deposit';
import Ftransfer from './component/Ftransfer';
import Sbalance from './component/Sbalance';
import Pchange from './component/Pchange';
import Summary from './component/Summary';
import Contact from './component/Contact';
//import FApi from './component/FApi';
//import Data from './component/Data';

function App() {
  return (
    <div>
     
     <Navbar></Navbar>
     
     <BrowserRouter>
    
     
     <Routes>
<Route path="" element={<Home></Home>}></Route>
<Route path="/about" element={<About></About>}></Route>
<Route path="/ca" element={<Caccount></Caccount>}></Route>
<Route path="/wd" element={<Withdraw></Withdraw>}></Route>

<Route path="/d" element={<Deposit></Deposit>}></Route>
<Route path="/fd" element={<Ftransfer></Ftransfer>}></Route>
<Route path="/sb" element={<Sbalance></Sbalance>}></Route>
<Route path="/pc" element={<Pchange></Pchange>}></Route>
<Route path="/sm" element={<Summary></Summary>}></Route>
<Route path="/ct" element={<Contact></Contact>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
