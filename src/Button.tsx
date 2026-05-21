type ButtonThing = { 
    title: string; 
}; 

function Button ({title}: ButtonThing) {
    return ( 
        <button
style = {{
    fontSize: "17px",
    letterSpacing: "2px",
    marginTop: "20px",
width: "250px",
height: "60px",
backgroundColor: "transparent",
borderRadius: "20px",
textTransform: "uppercase",
fontWeight: "bold",
}}
> {title} </button>
    ); 
}

export default Button; 