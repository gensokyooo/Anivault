import Navbar from "./Navbar";  
import Hero from "./Hero"; 
import Trending from "./Trending"; 
import Services from "./Services"; 
import Footer from "./Footer"; 

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