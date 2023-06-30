import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LogIn.css";

const LogInFail = ({ login }) => {
    
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };

    login(userInfo);
    e.target.reset();
  };

  return (
    <div id="login">
      <div className="login-container">
        <h1 className="entr" style={{color: 'red'}}>Invalid username or password. Please try again</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Login" className="submit-btn" />
          </div>
        </form>
        <br />
        <div>
          Not registered yet, <a href="/signup">Signup</a>
        </div>
      </div>
    </div>
  );
};

export default LogInFail;