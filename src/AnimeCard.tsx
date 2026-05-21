type CardProps = {
    image: string; 
    title: string;
    description: string; 

}; 

function AnimeCard ({image, title, description}: CardProps) {
    return (

        <div style = {{
            display: "flex",
            marginBottom: "20px",
        }} >

        <img 

        src = {image}
        alt = {title}
        style ={{

            width: "200px",
            height: "250px",
            objectFit: "cover",
        }}
        /> 

        <div style = {{
            padding: "30px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
                width: "200px",

        }}
        >
            <h2> {title} </h2>
            <p
            style = {{
                width: "200px",
            }}
            > {description} </p>

            <button
            style = {{
                marginTop: "30px",
                width: "200px",
                height: "50px",
                borderRadius: "32px",
                backgroundColor: "black",
            }}
            > EDIT NOW </button>
        </div>
        </div>
    ); 

}

export default AnimeCard; 