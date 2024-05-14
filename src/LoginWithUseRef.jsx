import React from "react";

export const LoginWithUseRefApp = () => {

    const inputUserName = React.useRef();
    const inputPwd = React.useRef();
    const lblResult = React.useRef();

    const [outputDtls, setOutput] = React.useState('');

    const calcDetails = () => {
        // console.log(inputUserName.current.value);
        // console.log(inputPwd.current.value);
        if (inputUserName.current.value === 'test@gmail.com' 
                && inputPwd.current.value === '12345678')
        {
            setOutput('Login successful');
            lblResult.current.style.color = 'green';
        }
        else
        {
            setOutput('Login Failed. Try again!!!');
            lblResult.current.style.color = 'red';
        }
        inputUserName.current.value = '';
        inputPwd.current.value = '';
    };

    return <div>
        <h1>Assignment 7 - Login page using useRef()</h1>
        <form onSubmit={e => { // <-- form submit callback
            e.preventDefault(); // prevent default form action so page doesn't reload
            calcDetails(); // update state
          }}>

            <label style={{fontWeight:"bold" }}>User Name:</label>
            <input 
                id="username1" 
                ref={inputUserName}
                type="text" 
                placeholder="Enter user name/email" 
                style={{marginLeft:"5px"}}>
            </input>
            <br />
            <label style={{fontWeight:"bold" }}>Password:</label>
            <input 
                id="pwd1" 
                ref={inputPwd}
                type="password" 
                placeholder="Enter password"
                style={{marginLeft:"5px"}}>
            </input>
            <br />
            <button type="submit" className="button">Login</button>
            <br />
            <br />
            <label ref={lblResult}>{outputDtls}</label>
        </form>
    </div>
}