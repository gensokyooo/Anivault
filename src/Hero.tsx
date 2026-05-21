
function Hero () {
return ( 
<div
> 
<section
style = {{

  position: "relative",
  width: "100%", 
  height: "60vh",
  overflow: "visible",

}}
> 

    <div style =  {{
    position: "absolute",
    top: "50%",  
    left: "50%",
    transform: "translate(-50%,-50% )",
    textAlign: "center",

  }} 
> <h1
style = {{
  fontSize: "150px",
  lineHeight: "0.9",
  letterSpacing: "-9px",
}}
>  Track <span style  = {{ fontStyle: "Italic"}}> your </span> <br/ > 
favorite anime. </h1>
    <p
    style = {{
      fontSize: "26px",
      marginTop: "10px",

    }}
    > Anivault is the first platform for anime fans that lets you
      do a lot of things and it's perfect for you.
    </p>
  </div>
  </section>
</div>

); 

  }

  export default Hero; 