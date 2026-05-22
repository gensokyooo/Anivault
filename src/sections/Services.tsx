import ServiceProp from "../../components/ServiceProp"; 


function Services () {

    return (
<section
style = {{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",

    paddingTop: "100px",
    paddingBottom: "100px",
}}
> 


<div

>
<ServiceProp
title= {<> Premium anime? <i> Easy. </i>  </>} 
description = "Our platform provides cross-network sharing 
technologies accelataring the orchestration layer behind 
the new frontier of anime watching turning dreams into 
realities one step at a time. Providing our customers with amazing day-to-day experiences in their anime watching journey. "
image = "src/Anime Card Images/image4.jpg"
buttonTitle = "JOIN ANIVAULT"

/>
</div>

<div
style = {{
    marginTop: "150px",
}}> 

<ServiceProp
title = {<> A <i> dream </i> for every otaku. </>}
description = "The rare chance to have a platform where everything regarding your anime things is stored. This is a once in a lifetime opportunity. This service is extremely luxurious. All of our clients rely on us for the best possible service"
image = "src/Anime Card Images/image2.jpg"
reverse = {true}
buttonTitle = "learn more"
/> 
</div>

<div 
style = {{
    marginTop: "150px",
}}> 


<ServiceProp
title = "The final boss of anime tracking."
description = "Everyone has been talking about a future where every and each of your tracked anime isn't lost due to some database burning, server ddos or some other hacking stuff. This is your white castle. The only one in the world!"
image = "src/Anime Card Images/image1.jpg"
reverse = {false}
buttonTitle = "learn more"
/> 
</div>

</section> 

    )
}

export default Services; 