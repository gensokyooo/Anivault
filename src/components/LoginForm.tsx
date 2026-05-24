 type LoginButtons = {
    label: string; 
    input: string; 
 }; 
 
 function LoginForm ({label, input}: LoginButtons) {
    return ( 
        <div
                style = {{
                    height: "100%",
                    width: "60%",
                    border: "2px solid white", 
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",

                }} > 
                    
                    <div
                    style = {{
                        height: "100%",
                        width: "50%",
                        border:"2px solid red",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }} > 
                    <h1> Get Started Now</h1>
                    <label> {label} </label>
                        <input type = "email" placeholder = {input} 
                        style = {{ width: "40%", fontSize: "18px",}}/> 
                    </div>
                </div>
    );
 }

 export default LoginForm; 
 