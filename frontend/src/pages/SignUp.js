import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { withRouter, useHistory} from 'react-router';
import { Link } from 'react-router-dom';
import { auth } from '../base';
import './Unauthed.css';
const SignUp = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    error: null,
    loading: false,
  });
  const history = useHistory();
  const { name, email, password, error, loading } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
    setData({ ...data, error: null, loading: false });
    if (!name || !email || !password) {
      setData({ ...data, error: 'All fields are required' });
    }
    try {
      createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setData({
        name: '',
        email: '',
        password: '',
        error: null,
        loading: false,
      });
      history.push('/');
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }


  };

  return (
    <div className="unauthed-body">
      <div className="account-form-wrapper">
        <h1 className="form-title">PayMate</h1>
        <container className="card">
          <form className="unauthed-form" onSubmit={handleSubmit}>
            <label htmlFor="signup-name" className="form-label">Name</label>
            <input
              className="form-input"
              id="signup-name"
              name="name"
              type="text"
              value= {name}
              onChange={handleChange}
            />
            <label htmlFor="signup-email" className="form-label">E-mail Address</label>
            <input
              className="form-input"
              id="signup-email"
              name="email"
              type="email"
              value= {email}
              onChange={handleChange}
            />
            <label htmlFor="signup-password" className="form-label">Password</label>
            <input
              className="form-input"
              id="signup-password"
              name="password"
              type="password"
              value = {password}
              onChange={handleChange}
            />
            <button className="form-button" type="submit">Sign Up</button>
          </form>
        </container>
        <container className="card">
          <Link className="unauthed-link" to='/login'>i already have an account</Link>
        </container>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
