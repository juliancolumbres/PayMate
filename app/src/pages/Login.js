import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../base";
import { useHistory } from "react-router-dom";
import './Unauthed.css';

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
    loading: false,
  });

  const history = useHistory();

  const { email, password, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!email || !password) {
      setData({ ...data, error: "All fields are required" });
    }
    try {
      signInWithEmailAndPassword(auth, email, password);

      setData({
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      history.replace("/");
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };
  return (
    <div className="login-signup">
      <h3>log in</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input_container">
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="email"
          />
        </div>
        <div className="input_container">
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="password"
          />
        </div>
        {error ? <p className="error">{error}</p> : null}
        <div className="btn_container">
          <button className="btn" disabled={loading}>
            {loading ? "Logging in ..." : "login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;