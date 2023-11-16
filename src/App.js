
// import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";



import "./styles/Header.css";
// import "./styles/Home.css";
import "./styles/Home.css";
import "./styles/Contact.css"; 
import "./styles/Footer.css"; 
import "./styles/Login.css"
import "./styles/Navbar.css"
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import { Products } from "./pages/products";
import { Cart } from "./pages/cart";


function App() {
  return (
   <>

   <Router>
      <Routes>
         <Route path ="/" element={<Home/>}/>
         <Route path ="/Contact" element={<Contact/>}/>
        <Route path="/registration" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
        {/* <Route path="/products/:id" element={}/> */}
       </Routes>
    
    
  <Footer/>
    </Router>
   </>
  );
}

export default App;
