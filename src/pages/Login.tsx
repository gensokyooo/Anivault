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
               label1 = "Email"
               input1 = "Enter your email"
               type1 = "password" 

               /> 

                        
        </div>
        </section>
    );
}

export default Login; 