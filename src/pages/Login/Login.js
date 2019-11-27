import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginReq } from '../../components/serverReq';
import './Login.css';

const Login = ({ loginReq }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const credentials = {
    email,
    password
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };
  const handelSubmit = event => {
    loginReq(credentials);
    event.preventDefault();
  };
  return (
    <div className="container">
      <div className="login">
        <form className="login-form" onSubmit={handelSubmit}>
          <div>
            <img></img>
          </div>
          <label htmlFor="uname">Email:</label>
          <input
            type="text"
            placeholder="Enter Email"
            name="uname"
            onChange={handleEmail}
            required
          />

          <label htmlFor="psw">Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            onChange={handlePassword}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  loginReq
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
