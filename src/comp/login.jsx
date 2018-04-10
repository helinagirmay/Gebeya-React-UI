import React from 'react';

const login = ({content}) => (

<div style={{backgroundImage : "PicsArt_04-04-04.56.20.jpg"}}>
        <div className = "loginBox">
          <h2>Log<b />IN</h2>
          <form>
            <p>UserName</p>
            <input type="text" name="" placeholder="User_Name" />
            <p>Password</p>
            <input type="password" name="" />
            <input type="submit" value="Log" />
            <a href="#">Forget Password</a>

          </form>


        </div>
</div>
        )
    export default login;
