import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';

const FormLogin = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h1>Login to your account</h1>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <br/>
                <p> Don't have an account?
                  <Link to="/register" className="card-link"> 
                  Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;





