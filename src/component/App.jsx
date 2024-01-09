import React from "react";
import Login from "./Login";

var userRegistered = false;

function App(){

    return <Login isRegister={userRegistered} />
    
}

export default App;