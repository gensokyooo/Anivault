
function Navbar () {

return (

    <nav
    style = {{
        backgroundColor: "black",
        display: "flex",
        padding: "30px",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "100px",
        paddingLeft: "100px",
        fontSize: "20px",
    }}
> <h2 id="logo"> Anivault </h2>
    <ul 

    style = {{
        listStyle: "none", 
        display: "flex", 
        margin: "0px",
       flexDirection: "row",
       alignItems: "center",
        gap: "30px",
        color: "white", 
    }}
    
    >    

  <li> <button
        style = {{
            width: "200px",
            height: "50px",
            borderRadius: "80px",
            backgroundColor: "white",
            fontSize: "20px",
            color: "black",
            fontWeight: "bold",
        }}
        
        > Sign Up</button></li>

    <li>
        
        <a 
        href = "/home"
         style = {{
            color: "white",
            textDecoration: "none",
        }}

        > Home 
         </a>
         </li>

    <li> 
        <a 
        href = "/trending"
        style = {{
            color: "white",
            textDecoration: "none",
        }}
        > Trending
         </a>  </li>
        
    <li> 
        <a 
        href = "/login" 
        style = {{
            color: "white",
            textDecoration: "none",
        }}
        > <b> Login </b> </a> </li>

      

    </ul>

    </nav>

); 

}

export default Navbar;              