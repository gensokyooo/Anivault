import "./Footer.css";

function Footer () {
    return ( 

<section
        style = {{
            display: "flex",
            flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
            
            borderTop: "1px solid grey",
            width: "100%",
            height: "200px",
            boxSizing: "border-box",
            padding: "0 200px",
            gap: 0,
                }}
        > 



<ul
style = {{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",
    margin: 0,
    padding:0,
    width: "100%",
    gap: "0px",
    opacity: "60%"
   
}
}
> <li
style = {{
   
    width: "600px",
    textAlign: "center",
    fontSize: "13px",
    lineHeight: 1.5,
}}
><p> Terms and conditions apply. Please read our cookie policy and 
make sure you're doing everything safely inside our 
website or you might explode like a pinata. </p></li>
<li

style = {{
    width: "600px",
    textAlign: "center",
    height: "100px",

}}
><h1
style = {{ fontSize: "60px", opacity: "30%", }}
> Anivault </h1></li>
<li
style = {{
    textAlign: "center",
    width: "600px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",

}}
> <img src = "./github.webp" 
style = {{ width: "30px", height: "30px", }}
/> 
<h3
style = {{
    fontWeight: "normal",
    fontSize: "15px",
}}
> Made by <span style = {{fontWeight: "bold"}} > @gensokyoooz </span>  </h3></li>

</ul>

        </section>

    ); 
}

export default Footer; 