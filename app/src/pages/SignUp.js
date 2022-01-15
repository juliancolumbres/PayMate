import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { withRouter, useHistory} from "react-router";
import { Link } from "react-router-dom";
import { auth } from "../base";
import './Unauthed.css';
const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: null,
    loading: false,
  });
  const history = useHistory();
  const { name, email, password, error, loading } = data;
  const handleChange = (e) => {
    console.log(data);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
    setData({ ...data, error: null, loading: false });
    if (!name || !email || !password) {
      setData({ ...data, error: "All fields are required" });
    }
    try {
     createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setData({
        name: "",
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      history.push("/");
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
    
    
  };

  return (
    <div className="login-signup">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
      <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="Name"
            value= {name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value= {email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Password"
            value = {password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <Link to='/login'>i already have an account</Link>
    </div>
  );
};

export default withRouter(SignUp);
