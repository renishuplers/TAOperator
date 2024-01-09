import React from "react";
import Input from "./Input";



function Login(props){
    return (
        <form>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="password" />
            {!props.isRegister && <Input type="password" placeholder="Confirm Password" />}
            <button>
            {props.isRegister === true ? "Submit" : "Register"}
            </button>
        </form>
    )
};

export default Login;