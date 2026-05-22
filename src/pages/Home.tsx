import Navbar from "../components/Navbar";  
import Hero from "../sections/Hero"; 
import Trending from "../sections/Trending"; 
import Services from "../sections/Services"; 
import Footer from "../components/Footer"; 

function Home () {

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

export default Home;