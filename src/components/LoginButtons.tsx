
 type LoginButtons = {
    label1: string; 
    type1: string; 
    input1: string; 

    label2?: string; 
    input2?: string; 
    type2?: string; 

}; 
 
function LoginButtons ({label1, type1, input1, label2, input2, type2}: LoginButtons) {
    return ( 
            <div>
                  <label> {label1} </label>
                        <input type = {type1} placeholder = {input1} 
                        style = {{ width: "40%", fontSize: "18px",}}
                        
                        />  
                    {label2 && input2 && type2 &&  (
                    <div> 
                        <label> {label2} </label>
                        <input type = {type2} 
                        placeholder = {input2}   
                        style = {{ width: "40%", fontSize: "18px",}}
                    />    
                    </div>  
                    )
                    }
                    </div>
    );
}

export default LoginButtons; 