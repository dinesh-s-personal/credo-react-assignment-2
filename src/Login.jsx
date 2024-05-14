import React from "react";

export const LoginApp = () => {

    const [username, setUsername] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [outputDtls, setOutput] = React.useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePwdChange = (e) => {
        setPwd(e.target.value);
    };

    const calcDetails = () => {
        console.log(username);
        console.log(pwd)
        setOutput(username === 'test@gmail.com' && pwd === '12345678' ? 'Login successful' : 'Login Failed. Try again!!!');
    };

    return <div>
        <h1>Assignment 2 - Login</h1>
        <form onSubmit={e => { // <-- form submit callback
            e.preventDefault(); // prevent default form action so page doesn't reload
            // console.log(username);
            // console.log(pwd);
            calcDetails(username, pwd); // update state
            setUsername(''); // reset input value
            setPwd(''); // reset input value
          }}>

            <label style={{fontWeight:"bold" }}>User Name:</label>
            <input 
                id="username" 
                value={username} 
                onChange={handleUsernameChange}
                type="text" 
                placeholder="Enter user name/email" 
                style={{marginLeft:"5px"}}>
            </input>
            <br />
            <label style={{fontWeight:"bold" }}>Password:</label>
            <input 
                id="pwd" 
                value={pwd}
                onChange={handlePwdChange} 
                type="password" 
                placeholder="Enter password"
                style={{marginLeft:"5px"}}>
            </input>
            <br />
            <button type="submit" className="button">Login</button>
            <br />
            <br />
            <label>{outputDtls}</label>
        </form>
    </div>
}