import Navbar from "./Pages/Home/Navbar";  
import Hero from "./Pages/Home/Hero"; 
import Trending from "Pages/Home/Trending"; 
import Services from "./Pages/Home/Services"; 
import Footer from "./Pages/Home/Footer"; 

function App () {

  return ( 
  <div
  style = {{
    margin: "0px",
    padding: "0px", 
    backgroundColor: "black",
    minHeight: "100vh",
  }} 
>
    <Navbar /> 
    <Hero/> 
    <Trending/>
    <Services/> 
    <Footer/>
  
  </div>
  );
}

export default App; 