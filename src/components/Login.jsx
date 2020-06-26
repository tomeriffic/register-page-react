import React from 'react';


function Login(){

    return (
        <>
            <h1>Login</h1>
            <input type="text" id="uname" name="uname"></input>
            <input type="password" id="pass" name="pass"></input>
            <input type="submit" value="Login"></input>
            <br></br>
            <input type="submit" value="Register"></input>
        </>
    );
}

export default Login;