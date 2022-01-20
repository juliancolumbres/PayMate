import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../base';
import { useHistory } from 'react-router-dom';
import './Unauthed.css';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
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
      setData({ ...data, error: 'All fields are required' });
    }
    try {
      signInWithEmailAndPassword(auth, email, password);

      setData({
        email: '',
        password: '',
        error: null,
        loading: false,
      });
      history.replace('/');
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
            <label htmlFor="email" className="form-label">E-mail Address</label>
            <input
              className="form-input"
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <label htmlFor="password" className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            {error ? <p className="error">{error}</p> : null}
            <button className="form-button" disabled={loading}>
              {loading ? 'Logging in ...' : 'Login'}
            </button>
          </form>
        </container>
      </div>
    </div>
  );
};

export default Login;
