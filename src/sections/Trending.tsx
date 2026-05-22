import AnimeCard from "../components/AnimeCard";
import AnimeHero from "../components/AnimeHero"; 

function Trending () {

return (
<>
<section


style = {{
    minHeight: "300px",
    backgroundColor: "black",
    display: "flex",    
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "0 clamp(10px, 2vw, 20px)",
}}
>

    
<AnimeCard 
    image= "src/homeimages/image1.jpg"
    title= "One outs"
    description = "Great gambling and baseball anime"
/> 

<AnimeCard
image = "src/homeimages/image2.jpg"
title = "Pale Cocoon"
description = "Good anime i liked nice "
/>

<AnimeCard
image = "src/homeimages/image3.jpg"
title = "Sakugan"
description = "Gagumba is really the best but not always"
/> 

<AnimeCard
image = "src/homeimages/image4.jpg"
title = "Eighty Six"
description = "One of the best animes i've ever watched"
/>



</section>

<section

style = {{

    width: "100%",
    display: "flex",
    justifyContent: "center",
}}

>
    <AnimeHero
   
    image = "src/homeimages/Akihabara.jpg"
    title = "Watch your collections grow."
    description = "All the animes you've ever watched won't be lost anymore, ever."
    button = "Register Account"
    />
</section>





</>

); 

}

export default Trending; 