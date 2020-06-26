import React from 'react';


function Register(){

    return (
        <>
            <h1>Register</h1>
            <input type="text" id="full_name" name="full_name"></input>
            <input type="text" id="uname" name="uname"></input>
            <input type="password" id="pass" name="pass"></input>
            <input type="password" id="confirm_pass" name="confirm_pass"></input>
            <br></br>
            <input type="submit" value="Register"></input>
        </>
    );
}

export default Register;