import React from 'react';

const Login = () => (
  <div>
    <form>
      <div>
        <img></img>
      </div>
      <label htmlFor="uname">Username</label>
      <input type="text" placeholder="Enter Username" name="uname" required />

      <label htmlFor="psw">Username</label>
      <input type="password" placeholder="Enter Password" name="psw" required />
      <button type="submit">Login</button>
      <div>
        <label></label>
      </div>
    </form>
  </div>
);

export default Login;
