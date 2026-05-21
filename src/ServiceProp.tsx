import Button from "./Button"; 

type ServiceThing = {
    image: string; 
    title: string;
    description: string;
    reverse: boolean; 
    buttonTitle: string; 
};

function ServiceProp ({image, title, description, reverse = false, buttonTitle}: ServiceThing) {
    return ( 

<div
style = {{

    width: "100%",
    height: "50%",
    display: "flex",
    boxSizing: "border-box",
    paddingLeft: "150px",
    paddingRight: "150px",
    flexDirection: reverse ? "row-reverse" : "row",
}}
>

<div
style = {{
    width: "50%",
    height: "100%",

}}
> 
<img
src = {image}
style = { {
    width: "800px",
    height: "500px",
    objectFit: "cover",
    

} } 

>
</img>
</div>
<div
style = {{
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
        alignItems: "center",

}}
> 
<div
style = {{
    width: "400px",
    lineHeight: "1"
}}
> 
<h1> {title} </h1>

</div>

<div
style = {{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    boxSizing: "border-box",
    width: "500px",
    lineHeight: "1.2"

}}
> 

<p
style = {{
    fontSize: "22px",
    color: "white",
    fontStyle: "italic",
}}
> {description} </p>
<div
style = {{
    marginTop: "20px",
}}> 
<Button
title = {buttonTitle}
/> 
</div>

</div>

</div>


</div>

    ); 
}

export default ServiceProp; 