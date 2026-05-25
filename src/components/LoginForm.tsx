import LoginButtons from "../components/LoginButtons"; 

 function LoginForm () {
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
                    <LoginButtons 
                        label1 = "Email"
                        type1 = "email"
                        input1 = "Enter your email"
                    /> 
                    </div>
                </div>
    );
 }

 export default LoginForm; 
 