import LoginForm from "../components/LoginForm"; 

function Login () {

    return (
        <section 
        style = {{
            backgroundColor: "black",
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}> 

        <div
        style = {{
        border: "2px solid white", 
        width: "90%",
        height: "80%",
        }}
        
            >
               <LoginForm 
               label = "Email"
               input = "Enter your email"
               /> 

                        
        </div>
        </section>
    );
}

export default Login; 