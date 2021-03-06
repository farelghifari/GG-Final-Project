import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { urlGet } from '../Login/index';
import { Logout } from '..Login/Index';
import { setToken } from '..Login/index';

const Navbar = ({ children }) => {
  const token = useSelector((state) => state.Auth.token);
  const me = useSelector((state) => state.User.user).display_name;
  const dispatch = useDispatch;
  const getApiToken = token ? (
    <button
      onClick={() => {
        Logout();
        dispatch(setToken(''));
      }}
      type="button"
      className="btn btn-danger"
    >
      Halo
      {' '}
      {me}
      , Logout
    </button>
  ) : (
    <a href={urlGet} className="btn btn-primary">
      login
    </a>
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid d-flex align-content-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/track">
                  Track
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/playlist"
                >
                  Playlist
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/create-playlist"
                >
                  Create Playlist
                </Link>
              </li>
            </ul>
          </div>
          <div className="float-right">{getApiToken}</div>
        </div>
      </nav>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Navbar;
