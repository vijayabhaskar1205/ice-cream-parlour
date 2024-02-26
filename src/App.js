
import './App.css';
 import Aqs from './component/Aqs';
 import Banner from './component/Banner';
 import Cards from './component/Cards';
 import Cardss from './component/Cardss';
 import Footer from './component/Footer';
 import Landingpage from './component/Landingpage';
import Login from './component/Login';
 
 import Mainpage from './component/Mainpage';
 import Order from './component/Order';
 import Signups from './component/Signups';
 import Topcards from './component/Topcards';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import About from './component/About'; 
 import Contact from './component/Contact';
import Coneice from './component/Coneice';
function App() {
  return (
    <div >
   <BrowserRouter>
  <Routes>
    <Route path='/' element={<Landingpage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/sign' element={<Signups/>}/>
    <Route path='/main' element={<Mainpage/>}/>
    <Route path='/About us' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/order' element={<Order/>}/>
    <Route path='/coneice' element={<Coneice/>}/>
  </Routes>
  
  </BrowserRouter> 
    </div>
  );
}

export default App;
