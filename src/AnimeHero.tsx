import Button from "./Button"; 
type HeroImage = {
    title: string; 
    description: string; 
    image: string; 
    button: string; 
}

function AnimeHero ({title,description,image,button}: HeroImage ) {

    return (

        <div 
        style = {{
            display: "flex",
            width: "100%",
            height : "700px",
            position: "relative",
            border: "2px solid yellow"
            
            
            }} > 
        
        < img

        src = {image}
        alt = {title}
        style = {{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 30%",
            opacity: "0.2",

        }}  
        />
        
        <div
        style = {{ 
            
            width: "2000px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }}
        > 
        <h1
        style = {{
            fontSize: "130px",
            lineHeight: "0.7",
            letterSpacing: "-9px",

        }}
        > {title} </h1>
        <div 
            style = {{
                marginTop: "20px",
                marginBottom: "50px",

            }}
> <p
    style = {{
        fontSize: "25px",
    }}
> {description}
</p>

        </div>
        <div 
> <Button 
title = "Click me"
/>
</div> 
        </div>

        </div>
    );

}

export default AnimeHero; 