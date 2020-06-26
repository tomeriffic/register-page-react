import React from 'react';
import Login from './Login.jsx';
import Register from './Register.jsx';


function Main(){

    var doesNeedToRegister = true;
    var isAllowedToLogin = false;


    var content=<Login/>
    if (doesNeedToRegister && !isAllowedToLogin)
        content = <Register/>

    

    return content
}

export default Main;