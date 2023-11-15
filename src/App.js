
// import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";




import "./styles/Header.css";
// import "./styles/Home.css";
import "./styles/Home.css";
import "./styles/Contact.css"; 
import "./styles/Footer.css"; 
import "./styles/Login.css"
import "./styles/Navbar.css"
import "./styles/Product.css"
import Registration from "./pages/Registration";
import Login from "./pages/Login";


function App() {
  return (
   <>

   <Router>
   <Header/>
      <Routes>
         <Route path ="/" element={<Home/>}/>
         <Route path ="/Contact" element={<Contact/>}/>
         <Route path ="/Product" element={<Product/>}/>
        <Route path="/registration" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
       </Routes>
    
    
  <Footer/>
    </Router>
   </>
  );
}

export default App;
